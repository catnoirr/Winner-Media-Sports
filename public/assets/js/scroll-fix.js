// Set scroll restoration to manual to prevent the browser from auto-scrolling
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  // When the page is being left, scroll to the top.
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });
  
  // After the page has fully loaded, wait a moment and then force scroll to top.
  // This is a more aggressive approach to override other scripts.
  window.addEventListener('load', () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Increased timeout to ensure it runs after other load events
  });
  