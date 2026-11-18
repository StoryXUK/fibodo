(() => {
            const endpoint = 'https://script.google.com/macros/s/AKfycbzenIn_E-pbUw4fqXVHUr-NQ2B7yLYJNNbPZY0Kk_Na3_Id1W1o0aJEiv5Ev7GptF7i/exec';
            const dialog = document.getElementById('ticket-dialog');
            let previousFocus;
            const close = () => dialog.close();
            dialog.querySelector('.ticket-close').addEventListener('click', close);
            dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close(); } });
            dialog.addEventListener('close', () => { document.body.style.overflow = ''; if (previousFocus && previousFocus.isConnected) previousFocus.focus(); });
            const show = () => setTimeout(() => { if (document.querySelector('.ticket-form :focus')) return; previousFocus = document.activeElement; dialog.showModal(); document.body.style.overflow = 'hidden'; }, 1000);
            document.querySelectorAll('[data-ticket-open]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); previousFocus = a; dialog.showModal(); document.body.style.overflow = 'hidden'; }));
            if (document.readyState === 'complete') show(); else window.addEventListener('load', show, { once: true });
            document.querySelectorAll('.ticket-form').forEach(form => {
                form.addEventListener('submit', async event => {
                    event.preventDefault(); if (form.dataset.busy === 'true' || !form.reportValidity()) return;
                    const status = form.querySelector('.ticket-status'); const button = form.querySelector('[type=submit]');
                    form.dataset.busy = 'true'; form.setAttribute('aria-busy', 'true'); button.disabled = true; status.textContent = 'Sending your request…';
                    const payload = new URLSearchParams(new FormData(form)); payload.set('source', form.dataset.source);
                    const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 30000);
                    try {
                        const response = await fetch(endpoint, { method: 'POST', body: payload, signal: controller.signal, credentials: 'omit', redirect: 'follow' });
                        if (!response.ok) throw new Error('Request failed');
                        const result = await response.json();
                        if (result.success !== true) throw new Error(result.message || 'Unable to save your request.');
                        status.textContent = 'Thank you. Your request has been received. Our team will be in touch to help you claim your free app.';
                        form.reset(); form.dataset.submitted = 'true'; button.textContent = 'Thank you — request received ✓'; status.classList.add('ticket-success');
                    } catch (error) {
                        status.textContent = 'We couldn’t confirm your request. Please contact sales@fibodo.com before retrying, as it may already have been received.';
                        button.disabled = false; form.dataset.busy = 'false';
                    } finally { clearTimeout(timeout); form.dataset.busy = 'false'; form.setAttribute('aria-busy', 'false'); }
                });
            });
        })();
