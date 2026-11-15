const form = document.querySelector('[data-offer-form]');
const status = document.getElementById('status');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const endpoint = window.OFFERS_FORM_ENDPOINT;
  if (!endpoint) {
    status.textContent = 'This enquiry form is not connected yet. Your details have not been sent. Please contact the business at the show.';
    return;
  }
  const button = form.querySelector('button');
  button.disabled = true;
  status.textContent = 'Sending your enquiry…';
  try {
    const response = await fetch(endpoint, {method: 'POST', body: new URLSearchParams(new FormData(form))});
    if (!response.ok) throw new Error('Request failed');
    const result = await response.json();
    if (result.success !== true) throw new Error('Submission not confirmed');
    status.textContent = 'Thank you. Your enquiry has been sent.';
    form.reset();
  } catch (error) {
    status.textContent = 'We could not confirm your enquiry was sent. Please try again or contact the business directly.';
  } finally {
    button.disabled = false;
  }
});
