# GhostVolume Privacy Policy

Last Updated: March 2026

**GhostVolume** is built from the ground up to respect your privacy. This policy explains what happens when you use the extension.

## 1. Zero Data Collection
GhostVolume **does not collect, store, or transmit any data**. 
- No analytics.
- No tracking codes.
- No usage statistics.
- No external server connections.

## 2. Permissions
GhostVolume uses the minimum permissions required to function:

- **`activeTab`** — Grants access to the current tab only when you click the extension button. We **do not** request permissions to read your browsing history (`tabs` or `history`), and we **do not** inject code automatically on every page you visit.
- **`scripting`** — Used solely to inject the volume-boost script into the active tab on demand. No code runs until you explicitly click the extension button.

We declare `data_collection_permissions: { required: ["none"] }` in our manifest to formally confirm that **no user data is collected or transmitted**.

## 3. How it Works Locally
When activated on a page, GhostVolume attaches a Web Audio API `GainNode` to `<video>` and `<audio>` elements present on that specific page in order to amplify the sound. This process is 100% local. No information about the tab title, URL, media name, or playback state ever leaves your device or is saved anywhere.

## 4. Open Source
Because GhostVolume is open source, anyone can inspect the code to verify these claims. The source code is publicly available here on GitHub under the terms of the GNU General Public License v3.0.

## 5. Contact
If you have any questions or concerns regarding this Privacy Policy, please open an issue in the [GitHub repository](https://github.com/Androdom/ghostvolume).
