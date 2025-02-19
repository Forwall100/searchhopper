document.addEventListener('DOMContentLoaded', loadEngines);

const DEFAULT_ENGINES = [
  { name: "Google", url: "https://www.google.com/search", param: "q" },
  { name: "Yandex", url: "https://ya.ru/search/", param: "text" },
  { name: "Brave", url: "https://search.brave.com/search", param: "q" },
  { name: "Perplexity", url: "https://www.perplexity.ai/search/new", param: "q" },
  { name: "Duckduckgo", url: "https://duckduckgo.com/", param: "q" }
];

function loadEngines() {
  chrome.storage.local.get(['engines'], data => {
    if (!data.engines) {
      chrome.storage.local.set({ engines: DEFAULT_ENGINES }, () => {
        renderEngines(DEFAULT_ENGINES);
      });
    } else {
      renderEngines(data.engines);
    }
  });
}

function renderEngines(engines) {
  const tbody = document.querySelector('#engineTable tbody');
  tbody.innerHTML = '';
  engines.forEach((engine, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td><strong>${engine.name}</strong></td>
          <td>${engine.url}</td>
          <td>${engine.param}</td>
          <td><button data-index="${index}">Delete</button></td>
        `;
    row.querySelector('button').addEventListener('click', () => deleteEngine(index));
    tbody.appendChild(row);
  });
}

function deleteEngine(index) {
  chrome.storage.local.get(['engines'], data => {
    const engines = data.engines || [];
    engines.splice(index, 1);
    chrome.storage.local.set({ engines }, loadEngines);
  });
}

document.getElementById('engineForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('engineName').value.trim();
  const url = document.getElementById('engineUrl').value.trim();
  const param = document.getElementById('engineParam').value.trim();

  try {
    new URL(url);
  } catch (error) {
    alert('Invalid URL!');
    return;
  }

  chrome.storage.local.get(['engines'], data => {
    const engines = data.engines || [];
    engines.push({ name, url, param });
    chrome.storage.local.set({ engines }, () => {
      loadEngines();
      document.getElementById('engineForm').reset();
    });
  });
});