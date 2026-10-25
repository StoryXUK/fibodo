(() => {
  document.querySelectorAll('.faq-q').forEach(btn => btn.addEventListener('click', () => { const item = btn.closest('.faq-item'); const open = item.classList.toggle('open'); btn.setAttribute('aria-expanded', String(open)); }));
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));
  document.querySelectorAll('.js-offer').forEach(a => a.addEventListener('click', () => window.dataLayer?.push({ event: 'study_active_offer_click', cta: a.textContent.trim() })));
  document.querySelectorAll('.core-footer a').forEach(link => {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
})();
