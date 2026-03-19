<div align="center">
  <img src="icons/icon.svg" alt="GhostVolume Icon" width="128">
  <h1>GhostVolume</h1>
  <p><strong>Invisible volume boost. Zero tracking. Pure sound.</strong></p>

  <p>
    <a href="https://addons.mozilla.org/firefox/addon/ghostvolume/">AMO Store</a> •
    <a href="#-installation">Installation</a> •
    <a href="PRIVACY.md">Privacy</a> •
    <a href="LICENSE">License</a>
  </p>

  <p>
    <a href="https://github.com/Androdom/ghostvolume/releases"><img alt="Version" src="https://img.shields.io/badge/version-1.5.1-6a5acd.svg?style=flat-square" /></a>
    <a href="https://addons.mozilla.org/firefox/addon/ghostvolume/"><img alt="Available on Firefox" src="https://img.shields.io/badge/Firefox_Add--on-FF7139?style=flat-square&logo=firefox-browser&logoColor=white" /></a>
    <a href="LICENSE"><img alt="License: GPLv3" src="https://img.shields.io/badge/License-GPLv3-yellow.svg?style=flat-square" /></a>
  </p>
</div>

---

## 👻 About

**GhostVolume** is a minimalist, privacy-first browser extension that amplifies the audio of videos, live streams, and music in your browser up to **600%**.

Unlike other volume boosters, GhostVolume guarantees **absolute privacy** and is designed to stay completely out of your way. Built with a natively rendered dark UI and a dynamic audio compressor for safe listening, it operates entirely locally. It requires only the `activeTab` permission, ensuring code is injected **only** when you explicitly click the extension button.

---

## 🚀 Installation

### Official Stores

[![Firefox Add-on](https://img.shields.io/badge/Install_from-Mozilla_Add--ons-FF7139?style=for-the-badge&logo=firefox-browser&logoColor=white)](https://addons.mozilla.org/firefox/addon/ghostvolume/)

Requires **Firefox 140+**.

### Manual Installation (For Source & Testing)

```bash
git clone https://github.com/Androdom/ghostvolume.git
```

<details>
<summary>🦊 <b>For Mozilla Firefox</b></summary>
<br>

1. Navigate to `about:debugging#/runtime/this-firefox` in your address bar.
2. Click the **Load Temporary Add-on...** button.
3. Select the `manifest.json` file inside the cloned directory.
</details>

<details>
<summary>🌍 <b>For Chrome, Edge, and Chromium Browsers</b></summary>
<br>

1. Navigate to `chrome://extensions/` (or `edge://extensions/`).
2. Enable **Developer mode** (usually a toggle in the top right).
3. Click the **Load unpacked** button.
4. Select the cloned `ghost-volume` folder.
</details>

---

## 🇹🇷 Türkçe Açıklama

**GhostVolume**, tarayıcınızdaki ses seviyesini **%600'e kadar** yükseltebilen, güvenlik ve gizlilik odaklı minimalist bir eklentidir. Chrome, Edge ve Firefox ile uyumludur. 

Arka planda çalışarak tarayıcınızı yormaz; yalnızca simgesine tıkladığınız sayfada aktif olur ve hiçbir verinizi izlemez. İçerdiği **Güvenli Mod** (Akıllı Ses Sınırlayıcı) sayesinde yüksek seslerde yaşanabilecek cihaz bozulmalarının önüne geçer.

---

## 🛠 Built With

| Technology | Description |
|:---:|---|
| ⚡ **Vanilla JavaScript** | Minimal core logic directly utilizing ES6 without heavy frameworks |
| 🎨 **CSS3** | Modern dark-themed UI with hardware-accelerated micro-animations |
| 🎛️ **Web Audio API** | Native `AudioContext`, `GainNode`, and `DynamicsCompressor` integrations |
| 🧩 **WebExtensions API** | Manifest V3 compatible, utilizing strict and transparent privacy permissions |

---

<div align="center">
  <br>
  Made with 💜 by <a href="https://androdom.com.tr"><b>Androdom</b></a>
</div>
