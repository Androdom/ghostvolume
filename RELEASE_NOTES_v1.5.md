# Release v1.5 - Chrome & Chromium Completing Update 👻🚀

Welcome to GhostVolume version 1.5! This update focuses heavily on cross-browser compatibility to bring our zero-data, minimalist volume booster natively into the Chrome ecosystem without compromising on our strict privacy-first goals.

## 🌟 What's New

*   **Full Chrome & Edge Compatibility:** Upgraded the core extension architecture to seamlessly support Chromium-based browsers, alongside our ongoing support for Mozilla Firefox. 
*   **Zero-Overhead Universal API (`chrome.*` & `browser.*`):** Rebuilt internal service communications using a bulletproof cross-browser API wrapper, guaranteeing consistent behavior on any modern browser.
*   **PNG Retina & Standard Icon Vectors:** The Chrome Web Store strict icon specifications are now fully met. GhostVolume includes precision-resized standard map PNG icon variants (`16px`, `32px`, `48px`, and `128px`) without abandoning the natively superior `.svg` usage for compatible setups.
*   **Animated Status Indicators:** Status indicators are no longer clunky HTML text nodes. The main ghost logo itself now functions as a dynamic visual notifier!
    *   ✨ **Active Boosting:** Displays a gentle floating and glowing animation when boosting audio streams.
    *   🛑 **Restricted Mode:** A red drop-shadow warns you when the extension lacks permission for the current page (e.g., standard browser internal restriction pages).

## 🛡️ Privacy & Security Commitments

*   **Privacy Policy Integration:** Explicitly documented and publicly hosted our [Privacy Policy](PRIVACY.md). GhostVolume continues to run 100% locally on your computer.
*   **`activeTab` Perfection:** Data continues to be processed on-the-fly and completely forgotten as soon as the tab closes or updates. Not a single tracker exists in this release.

---
Thank you for using **GhostVolume**!
If you appreciate the minimal impact and safe permissions of our extension, please consider giving the repository a star. Feel free to open issues or PRs if you want to contribute!
