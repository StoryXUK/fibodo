const FORM_ENDPOINT = window.PRIZE_DRAW_ENDPOINT || '';
const form = document.getElementById('entry-form');
const PRIZE_DRAW_PAGE = form.dataset.prizeDrawPage;
let submissionId = '';
function newSubmissionId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function') return globalThis.crypto.randomUUID();
  return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2) + '-' + Math.random().toString(36).slice(2);
}
form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const status = document.getElementById('status');
  const button = this.querySelector('button');
  if (button.disabled) return;
  if (!FORM_ENDPOINT) {
    status.textContent = 'Entries are not open yet. Please check back soon.';
    return;
  }
  submissionId = submissionId || newSubmissionId();
  const payload = new URLSearchParams(new FormData(this));
  payload.set('prize_draw_page', PRIZE_DRAW_PAGE);
  if (payload.has('exercise')) payload.set('answer', payload.get('exercise'));
  payload.set('submission_id', submissionId);
  payload.set('consent_statement', document.getElementById('consent').textContent.trim());
  button.disabled = true;
  status.textContent = 'Sending your entry…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST', body: payload, redirect: 'follow', signal: controller.signal
    });
    if (!response.ok) throw new Error('We could not confirm your entry. Please try again.');
    const result = await response.json();
    if (!result.ok) throw new Error(result.error || 'Your entry could not be saved. Please try again.');
    this.reset();
    submissionId = '';
    status.textContent = 'Thank you — your entry has been received!';
  } catch (error) {
    status.textContent = error.name === 'AbortError' || error instanceof TypeError
      ? 'We could not confirm your entry. Please try again; retrying here will not create a duplicate.'
      : error.message || 'Your entry could not be sent. Please try again.';
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
  }
});
