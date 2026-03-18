/**
 * GhostVolume — Popup Script
 * Minimal. Private. No data leaves your browser.
 */
(function () {
  'use strict';

  const api = typeof browser !== 'undefined' ? browser : chrome;

  // ── i18n ──
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const msg = api.i18n.getMessage(el.dataset.i18n);
    if (msg) el.textContent = msg;
  });

  // ── DOM ──
  const slider    = document.getElementById('slider');
  const gainNum   = document.getElementById('gainNum');
  const limiter   = document.getElementById('limiter');
  const logo      = document.getElementById('logo');
  const preBtns   = document.querySelectorAll('.pre');

  let tabId = null;

  // ── Helpers ──
  function setStatus(type) {
    logo.className = 'logo';
    if (type === 'on')  logo.classList.add('on');
    if (type === 'err') logo.classList.add('err');
  }

  function colorGain(val) {
    gainNum.classList.remove('warm', 'hot');
    if (val >= 400)      gainNum.classList.add('hot');
    else if (val >= 250) gainNum.classList.add('warm');
  }

  function syncPresets(val) {
    preBtns.forEach(b => b.classList.toggle('active', +b.dataset.g === val));
  }

  function setUI(val) {
    slider.value = val;
    gainNum.textContent = val;
    colorGain(val);
    syncPresets(val);
  }

  // ── Badge ──
  function badge(val) {
    if (!api.action?.setBadgeText) return;
    if (val === 100) {
      api.action.setBadgeText({ text: '', tabId });
    } else {
      api.action.setBadgeText({ text: String(val), tabId });
      let c = '#9b8aff';
      if (val >= 400) c = '#e85d5d';
      else if (val >= 250) c = '#e8a946';
      api.action.setBadgeBackgroundColor({ color: c, tabId });
    }
  }

  // ── Communicate with content script ──
  function send(pct) {
    if (!tabId) return;
    api.tabs.sendMessage(tabId, {
      action: 'setGain',
      gain: pct / 100,
      limiter: limiter.checked
    }).then(r => {
      if (r?.success) setStatus('on', 'statusActive');
    }).catch(() => inject(pct));
  }

  function inject(pct) {
    api.scripting.executeScript({
      target: { tabId },
      files: ['/content/content.js']
    }).then(() => {
      setTimeout(() => send(pct), 120);
    }).catch(() => {
      setStatus('err', 'statusNoAccess');
    });
  }

  // ── Events ──
  slider.addEventListener('input', () => {
    const v = +slider.value;
    gainNum.textContent = v;
    colorGain(v);
    syncPresets(v);
    badge(v);
    send(v);
  });

  preBtns.forEach(b => b.addEventListener('click', () => {
    const v = +b.dataset.g;
    setUI(v);
    badge(v);
    send(v);
  }));

  limiter.addEventListener('change', () => send(+slider.value));

  // ── Init ──
  api.tabs.query({ active: true, currentWindow: true }).then(async tabs => {
    if (!tabs?.[0]) return setStatus('err', 'statusNoAccess');
    tabId = tabs[0].id;

    try {
      const r = await api.tabs.sendMessage(tabId, { action: 'getState' });
      if (r?.gain !== undefined) {
        const pct = Math.round(r.gain * 100);
        setUI(pct);
        badge(pct);
        limiter.checked = r.limiter !== false;
        setStatus('on', pct > 100 ? 'statusActive' : 'statusReady');
      }
    } catch {
      // Content script not yet injected — that's fine, inject on first use
      setStatus('', 'statusReady');
    }
  });

})();
