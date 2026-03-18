<div align="center">
  <img src="icons/icon.svg" alt="GhostVolume Icon" width="128">
  <h1>GhostVolume</h1>
  <p><strong>Invisible volume boost. Zero tracking. Pure sound.</strong></p>

  <p>
    <a href="https://github.com/Androdom/ghostvolume/releases">Releases</a> •
    <a href="#installation">Installation</a> •
    <a href="#features">Features</a> •
    <a href="LICENSE">License</a>
  </p>
</div>

---

## 👻 About

**GhostVolume** is a minimalist, privacy-first Firefox extension that amplifies the audio of videos, live streams, and music in your browser. Unlike other volume boosters, GhostVolume guarantees **absolute privacy** and is designed to stay completely out of your way.

## ✨ Features

- **Up to 600% Boost:** Amplify audio on any tab far beyond the default system limits.
- **Absolute Privacy:** Requires only the `activeTab` permission. We **do not** track your tabs, history, or clicks. Data never leaves your browser.
- **Minimalist UI:** A clean, dark-themed interface built for speed and simplicity. 
- **Safe Mode:** Built-in dynamic compressor (Soft Limiter) prevents audio clipping and protects your speakers from distortion at high volumes.
- **Zero Bloat:** Lightweight footprint. No background scripts running constantly. Code is only injected when you explicitly click the extension button.
- **Open Source:** Fully open source under the GNU GPLv3 license.

## 🚀 Installation

### From Mozilla Add-ons (Coming Soon)
A link to the official Mozilla Add-ons store will be placed here once the extension is published.

### Install from Source (For Developers & Testing)

1. Clone the repository:
   ```bash
   git clone https://github.com/Androdom/ghostvolume.git
   ```
2. Open Mozilla Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click on the **"Load Temporary Add-on..."** button.
4. Select the `manifest.json` file located in the cloned `ghost-volume` directory.
5. The GhostVolume icon will appear in your toolbar. Click it to start boosting!

## 🇹🇷 Türkçe Açıklama

**GhostVolume**, tarayıcınızdaki ses seviyesini %600'e kadar yükseltebilen, güvenlik ve gizlilik odaklı minimalist bir Firefox eklentisidir.

- **Tam Gizlilik:** Yalnızca o an bulunduğunuz sekmeye erişim izni (`activeTab`) ister. Hangi siteleri gezdiğinizi veya ne izlediğinizi takip etmez.
- **Güvenli Mod:** Akıllı ses sınırlayıcısı sayesinde yüksek seste yaşanan ses çatlamalarını ve hoparlör hasarlarını önler.
- **Hafif ve Hızlı:** Eklenti simgesine tıklayana kadar sayfalara herhangi bir kod enjekte etmez.

## 🛠 Built With
- Vanilla JavaScript (ES6)
- CSS3
- Web Audio API (AudioContext, GainNode, DynamicsCompressor)
- Firefox WebExtensions API (Manifest V3)

## 📄 License
This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](LICENSE) file for details.

---
<div align="center">
  Made with 💜 by <a href="https://www.androdom.com.tr">Androdom</a>
</div>
