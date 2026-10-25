/* Lightweight entrance effects for the fibodo Free landing page. */
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var items = document.querySelectorAll('.free-section-head, .free-card, .free-step-list li, .free-journey-copy, .free-growth-card');
        if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            items.forEach(function (item) { item.classList.add('is-visible'); });
            return;
        }
        items.forEach(function (item) { item.classList.add('free-reveal'); });
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -45px' });
        items.forEach(function (item) { observer.observe(item); });
    });
})();
