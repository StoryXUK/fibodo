/**
 * fibodo.com 2026 redesign — lightweight event tracking.
 * Sends events to gtag when available; always logs to console in development.
 */
(function () {
  'use strict';

  function trackEvent(action, params) {
    var payload = Object.assign({ event_category: '2026_redesign' }, params || {});

    if (typeof window.gtag === 'function') {
      window.gtag('event', action, payload);
    }

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.debug('[fibodo analytics]', action, payload);
    }
  }

  function initNavTracking() {
    document.addEventListener('click', function (event) {
      var link = event.target.closest('#navbar a.nav-link, #menuOffcanvas a.nav-link, .menu-btn3 a');
      if (!link) return;

      var href = link.getAttribute('href') || '';
      var label = (link.textContent || '').trim().replace(/\s+/g, ' ');
      trackEvent('nav_click', { event_label: label, link_url: href });
    });
  }

  function initCtaTracking() {
    document.addEventListener('click', function (event) {
      var el = event.target.closest('[data-track]');
      if (!el) return;

      var type = el.getAttribute('data-track');
      var label = el.getAttribute('data-track-label') || (el.textContent || '').trim();
      trackEvent(type + '_click', { event_label: label });
    });
  }

  function initAnchorTracking() {
    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (!link || !link.hash || link.hash === '#') return;

      var id = link.hash.slice(1);
      if (!document.getElementById(id)) return;

      trackEvent('anchor_jump', { event_label: id, link_url: link.hash });
    });
  }

  function initEmailTracking() {
    document.querySelectorAll('form.conversion-form input[type="email"]').forEach(function (input) {
      var tracked = false;
      input.addEventListener('focus', function () {
        if (tracked) return;
        tracked = true;
        trackEvent('email_start', { event_label: input.name || 'email' });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNavTracking();
    initCtaTracking();
    initAnchorTracking();
    initEmailTracking();
  });
})();
