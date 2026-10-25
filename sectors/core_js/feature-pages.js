(function () {
  const related = document.getElementById('additional-features');
  if (related && !document.body.classList.contains('feature-directory')) {
    related.className = 'core-related';
    related.innerHTML = `
      <div class="core-related__inner">
        <div><span class="core-eyebrow">One platform. More possibilities.</span><h2>Explore every tool inside <em>CORE.</em></h2></div>
        <a class="core-button" href="additional-features.html">View all features →</a>
      </div>`;
  }
})();
