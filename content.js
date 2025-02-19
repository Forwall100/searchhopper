async function initialize() {
    const engines = await loadEngines();
    const currentHost = window.location.hostname;
    const currentEngine = engines.find(engine => {
      try {
        const engineHost = new URL(engine.url).hostname;
        return engineHost === currentHost;
      } catch (e) {
        return false;
      }
    });
  
    if (!currentEngine) return;
  
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get(currentEngine.param);
    if (!query) return;
  
    createSwitcher(engines, currentEngine, query);
  }
  
  function loadEngines() {
    return new Promise(resolve => {
      chrome.storage.local.get(['engines'], data => {
        resolve(data.engines || []);
      });
    });
  }
  
  function createSwitcher(engines, currentEngine, query) {
    const container = document.createElement('div');
    container.className = 'switcher-container';
  
    engines.forEach(engine => {
      if (engine.url === currentEngine.url) return;
      const button = document.createElement('button');
      button.className = 'switcher-button';
      button.textContent = engine.name;
      button.onclick = () => {
        const newUrl = buildSearchUrl(engine, query);
        window.location.href = newUrl;
      };
      container.appendChild(button);
    });
  
    document.body.appendChild(container);
  }
  
  function buildSearchUrl(engine, query) {
    const url = new URL(engine.url);
    url.searchParams.set(engine.param, query);
    return url.toString();
  }
  
  initialize();