# GhostVolume Privacy Policy

Last Updated: March 2026

**GhostVolume** is built from the ground up to respect your privacy. This policy explains what happens when you use the extension.

## 1. Zero Data Collection
GhostVolume **does not collect, store, or transmit any data**. 
- No analytics.
- No tracking codes.
- No usage statistics.
- No external server connections.

## 2. "activeTab" Permission
The extension requires the `activeTab` permission. This is the least-invasive permission model available for browser extensions.
- We **do not** request permissions to read your entire browsing history (`tabs` or `history`).
- We **do not** inject code automatically on every page you visit (`<all_urls>` script injection).
- The extension **only activates and accesses a given page when you explicitly click the extension button**. 

## 3. How it Works Locally
When activated on a page, GhostVolume attaches a Web Audio API `GainNode` to `<video>` and `<audio>` elements present on that specific page in order to amplify the sound. This process is 100% local. No information about the tab title, URL, media name, or playback state ever leaves your device or is saved anywhere.

## 4. Open Source
Because GhostVolume is open source, anyone can inspect the code to verify these claims. The source code is publicly available here on GitHub under the terms of the GNU General Public License v3.0.

## 5. Contact
If you have any questions or concerns regarding this Privacy Policy, please open an issue in the GitHub repository.
