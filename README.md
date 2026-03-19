<div align="center">
  <img src="icons/icon.svg" alt="GhostVolume Icon" width="128">
  <h1>GhostVolume</h1>
  <p><strong>Invisible volume boost. Zero tracking. Pure sound.</strong></p>

  <p>
    <a href="https://github.com/Androdom/ghostvolume/releases">Releases</a> •
    <a href="#installation">Installation</a> •
    <a href="#features">Features</a> •
    <a href="PRIVACY.md">Privacy</a> •
    <a href="LICENSE">License</a>
  </p>
</div>

---

## 👻 About

**GhostVolume** is a minimalist, privacy-first browser extension that amplifies the audio of videos, live streams, and music in your browser. Unlike other volume boosters, GhostVolume guarantees **absolute privacy** and is designed to stay completely out of your way.

## ✨ Features

- **Up to 600% Boost:** Amplify audio on any tab far beyond the default system limits.
- **Absolute Privacy:** Requires only the `activeTab` permission. We **do not** track your tabs, history, or clicks. Data never leaves your browser.
- **Minimalist UI:** A clean, dark-themed interface built for speed and simplicity. 
- **Safe Mode:** Built-in dynamic compressor (Soft Limiter) prevents audio clipping and protects your speakers from distortion at high volumes.
- **Zero Bloat:** Lightweight footprint. No background scripts running constantly. Code is only injected when you explicitly click the extension button.
- **Open Source:** Fully open source under the GNU GPLv3 license.

## 🚀 Installation

### 1. From Firefox Add-ons (AMO)
[![Firefox Add-on](https://img.shields.io/badge/Firefox-Add--on-FF7139?logo=firefox-browser&logoColor=white)](https://addons.mozilla.org/firefox/addon/ghostvolume/)

Install directly from the [Mozilla Add-ons Store](https://addons.mozilla.org/firefox/addon/ghostvolume/). Requires **Firefox 140+**.

### 2. Manual Installation (For source & testing)

First, download the source code:
```bash
git clone https://github.com/Androdom/ghostvolume.git
```

#### 🦊 For Mozilla Firefox:
1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click on the **"Load Temporary Add-on..."** button.
3. Select the `manifest.json` file located in the cloned `ghost-volume` directory.
4. GhostVolume is now ready to use!

#### 🌍 For Google Chrome, Edge, and Chromium Browsers:
1. Open your browser and navigate to `chrome://extensions/` (or `edge://extensions/`).
2. Turn on **"Developer mode"** (usually a toggle in the top right corner).
3. Click on the **"Load unpacked"** button.
4. Select the entire cloned `ghost-volume` **folder**.
5. Pin the GhostVolume icon to your toolbar and click it to start boosting!

## 🇹🇷 Türkçe Açıklama

**GhostVolume**, tarayıcınızdaki ses seviyesini %600'e kadar yükseltebilen, güvenlik ve gizlilik odaklı minimalist bir eklentidir. Chrome, Edge ve Firefox ile uyumludur.

- **Tam Gizlilik:** Yalnızca o an bulunduğunuz sekmeye erişim izni (`activeTab`) ister. Hangi siteleri gezdiğinizi veya ne izlediğinizi takip etmez.
- **Güvenli Mod:** Akıllı ses sınırlayıcısı sayesinde yüksek seste yaşanan ses çatlamalarını ve hoparlör hasarlarını önler.
- **Hafif ve Hızlı:** Eklenti simgesine tıklayana kadar sayfalara herhangi bir kod enjekte etmez.

## 🛠 Built With
- Vanilla JavaScript (ES6)
- CSS3
- Web Audio API (AudioContext, GainNode, DynamicsCompressor)
- WebExtensions API (Manifest V3)
- Firefox 140+ / Chromium Browsers

## 📄 License
This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](LICENSE) file for details.

---
<div align="center">
  Made with 💜 by <a href="https://github.com/Androdom">Androdom</a>
</div>
