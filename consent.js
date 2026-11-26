/* Marketing consent: banner, persisted choice, Google Consent Mode update. */
(function () {
  var KEY = 'fibodo_marketing_consent';

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  function apply(v) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    var s = v === 'granted' ? 'granted' : 'denied';
    gtag('consent', 'update', { ad_storage: s, ad_user_data: s, ad_personalization: s, analytics_storage: s });
    window.fibodoMarketingConsent = v;
    document.dispatchEvent(new CustomEvent('fibodo:consent', { detail: v }));
  }

  function banner() {
    var css = document.createElement('style');
    css.textContent =
      '.fb-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:560px;margin:0 auto;background:#151615;color:#fff;border-radius:14px;padding:18px 20px;font:500 14px/1.5 Inter,system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.35)}' +
      '.fb-consent p{margin:0 0 14px}.fb-consent a{color:#fff;text-decoration:underline}' +
      '.fb-consent div{display:flex;gap:10px;flex-wrap:wrap}' +
      '.fb-consent button{font:700 14px Inter,system-ui,sans-serif;border-radius:10px;padding:10px 18px;cursor:pointer;border:1px solid #fff;background:transparent;color:#fff}' +
      '.fb-consent button[data-v=granted]{background:#fff;color:#151615}' +
      '.fb-consent button:focus-visible{outline:2px solid #ff8a3d;outline-offset:2px}';
    document.head.appendChild(css);
    var el = document.createElement('div');
    el.className = 'fb-consent';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Marketing cookies');
    el.innerHTML =
      '<p>We use marketing cookies (Meta Pixel) to measure the effectiveness of our advertising. Accept to allow them, or reject to continue without.</p>' +
      '<div><button type="button" data-v="granted">Accept marketing cookies</button><button type="button" data-v="denied">Reject</button></div>';
    el.addEventListener('click', function (ev) {
      var v = ev.target && ev.target.getAttribute && ev.target.getAttribute('data-v');
      if (!v) return;
      write(v);
      el.remove();
      apply(v);
    });
    document.body.appendChild(el);
  }

  function init() {
    if (read() === null) banner();
  }

  var stored = read();
  if (stored) apply(stored);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
