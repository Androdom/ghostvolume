/**
 * GhostVolume — Content Script
 * Boosts audio via Web Audio API. Injected on demand only.
 * No data leaves this page. No tracking. No analytics.
 */
(function () {
  'use strict';

  const api = typeof browser !== 'undefined' ? browser : chrome;

  if (window.__ghostVolume) return;
  window.__ghostVolume = true;

  const state = {
    gain: 1.0,
    limiter: true,
    ctx: null,
    map: new WeakMap()
  };

  function ctx() {
    if (!state.ctx) state.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (state.ctx.state === 'suspended') state.ctx.resume();
    return state.ctx;
  }

  function process(el) {
    if (state.map.has(el)) return;
    if (!el.src && !el.querySelector('source') && !el.srcObject) return;

    try {
      const c = ctx();
      const src  = c.createMediaElementSource(el);
      const gain = c.createGain();
      const comp = c.createDynamicsCompressor();

      comp.threshold.value = -3;
      comp.knee.value      = 6;
      comp.ratio.value     = 12;
      comp.attack.value    = 0.003;
      comp.release.value   = 0.1;

      gain.gain.value = state.gain;
      src.connect(gain);

      if (state.limiter) {
        gain.connect(comp);
        comp.connect(c.destination);
      } else {
        gain.connect(c.destination);
      }

      state.map.set(el, { src, gain, comp });
    } catch { /* CORS or already captured */ }
  }

  function scan() {
    document.querySelectorAll('video, audio').forEach(process);
  }

  function reconnect() {
    document.querySelectorAll('video, audio').forEach(el => {
      const e = state.map.get(el);
      if (!e) return;
      e.gain.disconnect();
      e.comp.disconnect();
      if (state.limiter) {
        e.gain.connect(e.comp);
        e.comp.connect(ctx().destination);
      } else {
        e.gain.connect(ctx().destination);
      }
    });
  }

  function setGain(val) {
    state.gain = val;
    scan();
    document.querySelectorAll('video, audio').forEach(el => {
      const e = state.map.get(el);
      if (e) e.gain.gain.value = val;
    });
  }

  // Dynamic media detection
  new MutationObserver(muts => {
    for (const m of muts)
      for (const n of m.addedNodes)
        if (n.nodeType === 1 && (n.tagName === 'VIDEO' || n.tagName === 'AUDIO' || n.querySelectorAll?.('video, audio').length))
          setTimeout(scan, 200);
  }).observe(document.documentElement, { childList: true, subtree: true });

  document.addEventListener('play', e => {
    if (e.target.tagName === 'VIDEO' || e.target.tagName === 'AUDIO') {
      process(e.target);
      const entry = state.map.get(e.target);
      if (entry) entry.gain.gain.value = state.gain;
    }
  }, true);

  // Message handler
  api.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'setGain') {
      const limChanged = msg.limiter !== state.limiter;
      state.limiter = msg.limiter ?? state.limiter;
      if (limChanged) reconnect();
      setGain(msg.gain);
      sendResponse({ success: true });
      return false;
    }

    if (msg.action === 'getState') {
      scan();
      sendResponse({
        gain: state.gain,
        limiter: state.limiter
      });
      return false;
    }

    return false;
  });

  scan();
})();
