(function () {
  const header = document.getElementById('navbar');
  if (!header) return;

  const getCurrentPage = () => {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    if (currentFile === 'index.html') return 'home';
    if (currentFile === 'about.html' || currentFile === 'about-us.html') return 'about';
    if (currentFile === 'pricing.html') return 'pricing';
    return 'features';
  };

  const initialiseNavigation = () => {
    const nav = header.querySelector('.core-main-nav');
    const toggle = header.querySelector('.core-nav-toggle');
    if (!nav || !toggle) return;

    const activeLink = nav.querySelector(`[data-nav-page="${getCurrentPage()}"]`);
    if (activeLink) activeLink.setAttribute('aria-current', 'page');

    toggle.addEventListener('click', function () {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  };

  header.className = 'core-site-header';
  fetch('nav.html')
    .then((response) => {
      if (!response.ok) throw new Error(`Unable to load nav.html: ${response.status}`);
      return response.text();
    })
    .then((markup) => {
      header.innerHTML = markup;
      initialiseNavigation();
    })
    .catch((error) => {
      console.error(error);
    });
})();
