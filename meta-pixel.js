/* Meta Pixel, loaded only after the visitor accepts marketing cookies (see consent.js). */
(function () {
  var PIXEL_ID = '1007068095171567';
  var loaded = false;

  function loadPixel() {
    if (loaded) return;
    loaded = true;
    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = true; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  if (window.fibodoMarketingConsent === 'granted') loadPixel();
  document.addEventListener('fibodo:consent', function (e) {
    if (e.detail === 'granted') loadPixel();
  });
})();
