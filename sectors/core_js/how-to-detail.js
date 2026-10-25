(function () {
  document.body.classList.add('how-to-detail');

  const page = document.getElementById('page') || document.querySelector('.main');
  if (!page) return;

  const hero = Array.from(page.children).find((child) => child.tagName === 'SECTION');
  if (hero) {
    hero.classList.add('guide-detail-hero');
    const container = hero.querySelector('.container');
    if (container && !container.querySelector('.guide-hero-aside')) {
      container.insertAdjacentHTML('beforeend', '<aside class="guide-hero-aside"><small>CORE guide</small><strong>Clear steps.<br>Real progress.</strong><span>Work through the guide at your own pace.</span></aside>');
    }
  }

  const content = document.querySelector('.how-to-content');
  const guideSteps = [];

  if (content) {
    const nodes = Array.from(content.childNodes);
    let step = null;

    nodes.forEach((node) => {
      const isHeading = node.nodeType === 1 && node.tagName === 'H2';
      const isDivider = node.nodeType === 1 && node.tagName === 'HR';

      if (isDivider) {
        node.remove();
        step = null;
        return;
      }

      if (isHeading) {
        step = document.createElement('article');
        step.className = 'guide-step';
        content.insertBefore(step, node);
        guideSteps.push(step);
      }

      if (step) step.appendChild(node);
    });

    guideSteps.forEach((section, index) => {
      const number = index + 1;
      section.id = `guide-step-${number}`;
      if (index % 3 === 1) section.classList.add('is-dark');
      if (index % 3 === 2) section.classList.add('is-tint');

      const copy = document.createElement('div');
      copy.className = 'guide-copy';
      const media = document.createElement('div');
      media.className = 'guide-media';

      Array.from(section.childNodes).forEach((node) => {
        if (node.nodeType === 1 && node.tagName === 'IMG') media.appendChild(node);
        else copy.appendChild(node);
      });

      copy.insertAdjacentHTML('afterbegin', `<div class="guide-step-number">${String(number).padStart(2, '0')}</div>`);
      const complete = document.createElement('button');
      complete.type = 'button';
      complete.className = 'guide-complete';
      complete.dataset.guideComplete = String(number);
      complete.textContent = 'Mark step complete';
      copy.appendChild(complete);
      section.appendChild(copy);
      if (media.childNodes.length) {
        section.classList.add('has-media');
        section.appendChild(media);
      }
    });
  }

  const accordionItems = Array.from(document.querySelectorAll('.accordion-item'));
  const journeyItems = guideSteps.length ? guideSteps : accordionItems;

  if (journeyItems.length && hero) {
    const journey = document.createElement('section');
    journey.className = 'guide-journey';
    const navLinks = journeyItems.map((item, index) => {
      const id = item.id || `guide-topic-${index + 1}`;
      item.id = id;
      const heading = item.querySelector('h2, h3, h6, .accordion-button');
      const label = heading ? heading.textContent.trim().replace(/^\d+[.:]?\s*/, '') : `Step ${index + 1}`;
      return `<a href="#${id}" data-guide-link="${index + 1}">${index + 1}. ${label}</a>`;
    }).join('');
    journey.innerHTML = `<div class="guide-journey__top"><span>Your guide</span><strong data-guide-progress>0 of ${journeyItems.length} complete</strong></div><div class="guide-progress-track"><i></i></div><nav class="guide-step-nav" aria-label="Guide steps">${navLinks}</nav>`;
    hero.insertAdjacentElement('afterend', journey);
  }

  if (guideSteps.length) {
    const storageKey = `core-guide-progress:${window.location.pathname}`;
    let completed = [];
    try { completed = JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch (error) { completed = []; }

    const updateProgress = () => {
      document.querySelectorAll('[data-guide-complete]').forEach((button) => {
        const done = completed.includes(Number(button.dataset.guideComplete));
        button.classList.toggle('is-complete', done);
        button.textContent = done ? 'Step complete ✓' : 'Mark step complete';
      });
      document.querySelectorAll('[data-guide-link]').forEach((link) => link.classList.toggle('is-complete', completed.includes(Number(link.dataset.guideLink))));
      const label = document.querySelector('[data-guide-progress]');
      const bar = document.querySelector('.guide-progress-track i');
      if (label) label.textContent = `${completed.length} of ${guideSteps.length} complete`;
      if (bar) bar.style.width = `${(completed.length / guideSteps.length) * 100}%`;
      try { localStorage.setItem(storageKey, JSON.stringify(completed)); } catch (error) { /* Storage is optional. */ }
    };

    document.querySelectorAll('[data-guide-complete]').forEach((button) => {
      button.addEventListener('click', () => {
        const step = Number(button.dataset.guideComplete);
        completed = completed.includes(step) ? completed.filter((item) => item !== step) : [...completed, step].sort((a, b) => a - b);
        updateProgress();
      });
    });
    updateProgress();
  }
})();
