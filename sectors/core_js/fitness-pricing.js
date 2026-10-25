(function () {
  const pricing = document.getElementById('pricing');
  if (!pricing) return;

  const signup = 'https://web.fibodo.com/signup/information?app=c1';
  pricing.className = 'fitness-pricing section-panel section-break';
  pricing.setAttribute('aria-labelledby', 'fitness-pricing-title');
  pricing.innerHTML = `
    <div class="container">
      <header class="fitness-pricing-head">
        <div>
          <span class="fitness-pricing-eyebrow">Pricing that moves with you</span>
          <h2 id="fitness-pricing-title">From your first step<br>to your next big move.</h2>
        </div>
        <p>Start free. Choose more when you're ready. CORE grows with your business, so you can focus on delivering great experiences.</p>
      </header>
      <div class="fitness-plan-grid">
        <article class="fitness-plan">
          <span class="fitness-plan-label">Run your business</span>
          <h3>CORE</h3>
          <p>Everything you need to run your business.</p>
          <div class="fitness-plan-price"><strong>£25</strong><span> / month</span></div>
          <p class="fitness-billing">Billed monthly</p>
          <a class="fitness-plan-button" href="${signup}" target="_blank" rel="noopener noreferrer">Change to CORE</a>
        </article>
        <article class="fitness-plan is-featured">
          <span class="fitness-plan-label">Grow your business</span>
          <h3>CORE Grow</h3>
          <p>More ways to earn, more ways to grow.</p>
          <div class="fitness-plan-price"><strong>£99</strong><span> / month</span></div>
          <p class="fitness-billing">Billed monthly</p>
          <a class="fitness-plan-button" href="${signup}" target="_blank" rel="noopener noreferrer">Change to CORE Grow</a>
        </article>
        <article class="fitness-plan">
          <span class="fitness-plan-label">No limits</span>
          <h3>CORE Ultimate</h3>
          <p>Reach further, build a business with no limits.</p>
          <div class="fitness-plan-price"><strong>£199</strong><span> / month</span></div>
          <p class="fitness-billing">Billed monthly</p>
          <a class="fitness-plan-button" href="${signup}" target="_blank" rel="noopener noreferrer">Change to CORE Pro</a>
        </article>
      </div>
      <p class="fitness-pricing-note">All subscription prices include VAT and are billed monthly.</p>
      <article class="fitness-custom-app">
        <div>
          <span class="fitness-plan-label">Compatible with all CORE plans</span>
          <h3>Custom App</h3>
          <p>Make it yours. Your App. Your Brand.</p>
        </div>
        <div class="fitness-custom-price"><strong>£2,399</strong><span>One-off fee</span></div>
        <ul class="fitness-custom-plans" aria-label="Compatible CORE plans">
          <li>CORE</li><li>CORE Grow</li><li>CORE Ultimate</li>
        </ul>
        <div class="fitness-custom-action">
          <p>Pay your one-off custom build fee of £2,399, with £25 / month added to your monthly subscription.</p>
          <a class="fitness-custom-button" href="contact-us.html">Add Custom App</a>
        </div>
      </article>
      <p class="fitness-start-anytime">Start anytime!</p>
    </div>`;
})();
