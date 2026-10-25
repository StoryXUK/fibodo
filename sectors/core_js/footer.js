(function () {
  const footer = document.getElementById('footer');
  if (!footer) return;

  if (!document.querySelector('link[href$="core_css/footer.css"]')) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'core_css/footer.css';
    document.head.appendChild(stylesheet);
  }

  footer.className = 'fibodo-footer';

  fetch('footer.html')
    .then((response) => {
      if (!response.ok) throw new Error(`Unable to load footer.html: ${response.status}`);
      return response.text();
    })
    .then((markup) => {
      footer.innerHTML = markup;
      const year = footer.querySelector('[data-footer-year]');
      if (year) year.textContent = new Date().getFullYear();
    })
    .catch((error) => {
      console.error(error);
    });
})();
