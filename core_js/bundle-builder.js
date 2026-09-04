/* ==========================================================
   CORE Six Column Bundle Builder JS
   Include after the bundle builder HTML.
   ========================================================== */

(function () {
  const BASE_PRICE = 25;
  const PACKAGE_PRICE_SINGLE = 20;
  const BUNDLE_TOTALS = { 0: 0, 1: 20, 2: 35, 3: 45, 4: 50, 5: 55 };

  const packageNames = {
    'client-app': 'Client App',
    marketing: 'Marketing',
    reach: 'Reach',
    video: 'Video',
    content: 'Content'
  };

  const lines = {
    0: 'CORE only. Everything you need to get booked, get paid and keep moving.',
    1: 'CORE plus one focused package. A sharper setup for your next move.',
    2: 'Two packages added. Your CORE is starting to build around the way you work.',
    3: 'Three packages active. More power, better value, cleaner business momentum.',
    4: 'Four packages selected. A serious setup with strong bundle pricing applied.',
    5: 'Complete CORE setup. All five packages selected with the best bundle value active.'
  };

  function formatGBP(value) {
    const number = Number(value || 0);
    return `£${Number.isInteger(number) ? number.toFixed(0) : number.toFixed(2)}`;
  }

  function getBuilder(section) {
    return section || document.querySelector('[data-core-builder]');
  }

  function getInputs(builder) {
    return Array.from(builder.querySelectorAll('[data-package-input]'));
  }

  function getSelectedIds(builder) {
    return getInputs(builder).filter((input) => input.checked).map((input) => input.value);
  }

  function setSelectedIds(builder, ids) {
    getInputs(builder).forEach((input) => {
      input.checked = ids.includes(input.value);
    });
    updateBuilder(builder);
  }

  function animateTotal(el, nextValue) {
    if (!el) return;

    const previous = Number(el.dataset.value || BASE_PRICE);
    const start = performance.now();
    const duration = 430;

    el.classList.remove('is-price-pulse');

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = previous + (nextValue - previous) * eased;
      el.textContent = formatGBP(Math.round(current * 100) / 100);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = formatGBP(nextValue);
        el.dataset.value = String(nextValue);
        el.classList.add('is-price-pulse');
      }
    }

    requestAnimationFrame(tick);
  }

  function updateBuilder(builder) {
    if (!builder) return;

    const selectedIds = getSelectedIds(builder);
    const count = selectedIds.length;
    const packageTotal = BUNDLE_TOTALS[count] || 0;
    const monthlyTotal = BASE_PRICE + packageTotal;
    const individualTotal = count * PACKAGE_PRICE_SINGLE;
    const saving = Math.max(0, individualTotal - packageTotal);
    const progress = Math.round((count / 5) * 100);

    builder.querySelectorAll('[data-package-card]').forEach((card) => {
      const selected = selectedIds.includes(card.dataset.packageCard);
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', String(selected));

      const state = card.querySelector('.tile-state');
      if (state) state.textContent = selected ? 'Added' : 'Add';
    });

    const bundleCount = builder.querySelector('#bundleCount');
    const bundleTotal = builder.querySelector('#bundleTotal');
    const packageTotalEl = builder.querySelector('#packageTotal');
    const bundleSaving = builder.querySelector('#bundleSaving');
    const bundleLine = builder.querySelector('#bundleLine');
    const bundleProgress = builder.querySelector('#bundleProgress');

    if (bundleCount) bundleCount.textContent = String(count);
    if (packageTotalEl) packageTotalEl.textContent = formatGBP(packageTotal);
    if (bundleSaving) bundleSaving.textContent = formatGBP(saving);
    if (bundleLine) bundleLine.textContent = selectedIds.length ? lines[count] : lines[0];
    if (bundleProgress) bundleProgress.style.width = `${progress}%`;

    animateTotal(bundleTotal, monthlyTotal);
  }

  function bindBuilder(builder) {
    if (!builder) return;

    builder.querySelectorAll('[data-package-card]').forEach((card) => {
      card.addEventListener('click', () => {
        const input = card.querySelector('[data-package-input]');
        if (!input) return;
        input.checked = !input.checked;
        updateBuilder(builder);
      });

      card.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        card.click();
      });
    });

    builder.querySelectorAll('[data-bundle-action]').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (button.dataset.bundleAction === 'clear') {
          setSelectedIds(builder, []);
          return;
        }

        if (button.dataset.bundleAction === 'all') {
          setSelectedIds(builder, Object.keys(packageNames));
        }
      });
    });

    updateBuilder(builder);
  }

  function initCoreSixBundleBuilder() {
    document.querySelectorAll('[data-core-builder]').forEach(bindBuilder);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCoreSixBundleBuilder);
  } else {
    initCoreSixBundleBuilder();
  }
})();
