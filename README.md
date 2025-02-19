# Search Hopper 🔍🔄

A browser extension for Firefox that lets you easily switch between multiple search engines right from the search results page. 🚀

[untitled.webm](https://github.com/user-attachments/assets/1887c926-c96e-44d3-9a8a-6d190d7385de)

---

## Features ✨
- **Add your favorite search engines**: Configure custom search engines with their URLs and query parameters.
- **Quick switching**: Seamlessly switch between search engines like Google, Yandex, Brave, DuckDuckGo, and more.
- **Floating toolbar**: A sleek, always-visible toolbar at the bottom of the page for quick access.
- **Customizable**: Add, remove, or edit search engines in the settings page.
- **Default engines included**: Comes pre-configured with popular search engines like Google, Yandex, Brave, Perplexity, and DuckDuckGo.

---

## Screenshots 📸
**Toolbar**
![image](https://github.com/user-attachments/assets/5fa80bea-bd03-47a8-bd69-17cbd8a40c3b)

**Settings Page**
![image](https://github.com/user-attachments/assets/aa6fdcaa-1a9c-4218-b9a5-458fdaa088c0)

---

## How It Works 🛠️

1. **Detects search pages**: When you perform a search on a supported website (e.g., Google), the extension detects the search query.
2. **Displays a toolbar**: A floating toolbar appears at the bottom of the page with buttons for other search engines.
3. **Switch engines**: Click a button to redirect your search query to another search engine instantly.

---

## Installation 🚀

### Step 1: Download the Extension
1. Clone or download this repository to your local machine.
2. Ensure all files are in a single folder (`manifest.json`, `content.js`, `content.css`, `options.html`, `options.js`, `background.js`, and `icon.png`).

### Step 2: Load the Extension in Firefox
1. Open Firefox and go to `about:debugging`.
2. Click on **This Firefox** in the sidebar.
3. Click **Load Temporary Add-on**.
4. Select the `manifest.json` file from the extension folder.

### Step 3: Start Using It!
- Perform a search on any supported website (e.g., Google).
- The toolbar will appear at the bottom of the page. Click a button to switch search engines.

---

## Configuration ⚙️

### Adding a New Search Engine
1. Click the extension icon in the toolbar to open the settings page.
2. Fill in the following details:
   - **Name**: The name of the search engine (e.g., "Google").
   - **URL**: The search URL (e.g., `https://www.google.com/search`).
   - **Query Parameter**: The parameter used for search queries (e.g., `q` for Google).
3. Click **Add Engine**.

### Removing a Search Engine
1. Open the settings page.
2. Find the search engine you want to remove in the list.
3. Click **Delete**.

---

## Default Search Engines 🔍

The extension comes with the following search engines pre-configured:

| Name        | URL                                | Query Parameter |
|-------------|------------------------------------|-----------------|
| Google      | `https://www.google.com/search`    | `q`             |
| Yandex      | `https://ya.ru/search/`            | `text`          |
| Brave       | `https://search.brave.com/search`  | `q`             |
| Perplexity  | `https://www.perplexity.ai/search` | `q`             |
| DuckDuckGo  | `https://duckduckgo.com/`          | `q`             |

---

## Troubleshooting 🛠️

### The Toolbar Doesn't Appear
- Ensure you're on a supported search engine (e.g., Google, Yandex).
- Make sure the extension is loaded correctly in `about:debugging`.

### Search Engines Not Switching
- Double-check the URL and query parameter in the settings page.
- Ensure the search engine's URL is correct and accessible.

---

Happy searching! 🔍✨
