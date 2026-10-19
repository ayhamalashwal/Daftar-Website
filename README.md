# Daftar Website

A static, responsive landing page for the Daftar Android app. It uses plain HTML, CSS, and JavaScript, so there is no build process or framework to install.

## Included

- Responsive product landing page
- English, French, and Arabic language switcher with right-to-left layout for Arabic
- Five real Daftar screenshots with click-to-enlarge lightbox
- GitHub Releases download links
- Features overview and Android installation guide
- Optional Google Drive alternative download button
- GitHub Pages deployment instructions

## Before publishing

### 1. Add the Google Drive download link

Open `script.js` and change:

```js
const GOOGLE_DRIVE_URL = "";
```

to the share URL for your APK, for example:

```js
const GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/YOUR_FILE_ID/view";
```

Use your real share link. The Google Drive alternative is hidden until a URL is configured. Make sure the file's sharing settings allow your intended users to access it.

### 2. Review app details

Check the feature descriptions and screenshots, especially before public launch. The website describes the currently advertised features and does not claim that the app is on Google Play.

## Preview locally

Open `index.html` in a browser. For a local web server, from this directory run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

Recommended: keep this website in its own repository so it stays separate from the Daftar app source.

1. Create a new public GitHub repository named `daftar-website` (or another name you prefer).
2. Upload the **contents** of this folder (`index.html`, `styles.css`, `script.js`, `assets/`, and this README) to the repository's root.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to finish deploying. GitHub will show the published website URL in Settings → Pages.

If the repository is named exactly `ayhamalashwal.github.io`, the site can use `https://ayhamalashwal.github.io/`. Otherwise, a project site normally uses `https://ayhamalashwal.github.io/daftar-website/`.

## Download links

- Android APK releases: https://github.com/ayhamalashwal/Daftar-App/releases
- Source code: https://github.com/ayhamalashwal/Daftar-Source-Code

## Notes

- This is a static site; it does not collect personal information or use a backend.
- Google Fonts are loaded from Google Fonts when a network connection is available; the site otherwise uses system fonts.
- GitHub Pages provides HTTPS automatically.
# Daftar-Website
