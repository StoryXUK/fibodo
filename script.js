// Replace with your deployed Google Apps Script Web App /exec URL.
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsOMVMrpzH_qzuOrWfqYS5HHGENvHzWbg30fsEAJGtkW802kjqml15N8sQGRaRkAyE/exec';
const OPERATORS = ['Alderford', 'Anglian Water', 'Aqua Park Training', 'Aztec Adventure', 'Beccles Lido', 'beendurance', 'Cotswold Country Park and Beach', 'Cotswold Lake Trust', 'Gateshead Leisure Centre', 'Lincoln Water Parks', 'Meadowbay', 'Parkwood Leisure', 'Petersfield Lido', 'ptp coaching', 'Royal Parks', 'South downs leisure', 'St Andrews Lakes', 'Stubbers Adventure Centre', 'UK Water Parks', 'Ware Priory Lido', 'West Country Waterpark', 'Peak Open Water Sports', 'Dŵr Cymru Welsh Water'];
const SUPPLIERS = ['4 Leisure Recruitment Ltd', 'Active Insight', 'Airspace Solutions.com Ltd', 'Aqua parks UK', 'Blowmesup', 'fibodo', 'Nowca', 'RLSS', 'Wibit', 'xn leisure', 'Decathlon', 'Swim Nation', 'Swim England', 'Industry Wake'];
const WEBSITES = {
  "Alderford": "https://alderford.com/",
  "Anglian Water": "https://www.anglianwater.co.uk/",
  "Aqua Park Training": "https://aquaparktraining.com/",
  "Aztec Adventure": "https://aztecadventure.co.uk/",
  "Beccles Lido": "https://beccleslido.com/",
  "beendurance": "https://beenduranceopenwater.com/",
  "Cotswold Country Park and Beach": "https://cotswoldlakes.com/cotswold-country-park-and-beach/",
  "fibodo": "https://fibodo.com/",
  "Gateshead Leisure Centre": "https://gatesheadleisurecentre.co.uk/",
  "Lincoln Water Parks": "https://www.lincolnwaterpark.co.uk/",
  "Meadowbay": "https://meadowbay.com/",
  "Parkwood Leisure": "https://www.parkwoodleisure.co.uk/",
  "Petersfield Lido": "https://petersfieldlido.org.uk/",
  "ptp coaching": "https://www.ptp.org.uk/",
  "Royal Parks": "https://www.royalparks.org.uk/",
  "South downs leisure": "https://southdownsleisure.co.uk/",
  "St Andrews Lakes": "https://www.standrewslakes.co.uk/",
  "Stubbers Adventure Centre": "https://www.stubbers.co.uk/",
  "UK Water Parks": "https://aquaparkgroup.co.uk/",
  "Ware Priory Lido": "https://warepriorylido.co.uk/",
  "West Country Waterpark": "https://westcountrywaterpark.co.uk/",
  "Peak Open Water Sports": "https://www.peakopenwatersports.com/",
  "Dŵr Cymru Welsh Water": "https://www.dwrcymru.com/en",
  "4 Leisure Recruitment Ltd": "https://www.4leisurerecruitment.co.uk/",
  "Active Insight": "https://active-insight.org/",
  "Airspace Solutions.com Ltd": "https://www.airspacesolutions.com/",
  "Aqua parks UK": "https://aquaparkgroup.co.uk/",
  "Blowmesup": "https://blowmesup.co.uk/",
  "Nowca": "https://nowca.org/",
  "RLSS": "https://www.rlss.org.uk/",
  "Wibit": "https://www.wibitsports.com/",
  "xn leisure": "https://xnleisure.com/",
  "Decathlon": "https://www.decathlon.co.uk/",
  "Swim Nation": "https://swimnation.uk/",
  "Swim England": "https://www.swimming.org/swimengland/",
  "Industry Wake": "https://www.industrywake.co.uk/"
};
const role = document.body.dataset.role;
if (role) {
  const own = role === 'Operator' ? OPERATORS : SUPPLIERS;
  const choices = role === 'Operator' ? SUPPLIERS : OPERATORS;
  const business = document.getElementById('business');
  const primaryAttendee = document.getElementById('primaryAttendee');
  const secondAttendee = document.getElementById('secondAttendee');
  const options = document.getElementById('options');
  const count = document.getElementById('count');
  const search = document.getElementById('search');
  const status = document.getElementById('status');
  const submit = document.getElementById('submit');
  const selected = new Set();
  own.forEach(name => { const option = document.createElement('option'); option.value = name; option.textContent = name; business.append(option) });
  const ownWebsite = document.getElementById('ownWebsite');
  function updateOwnWebsite() { const url = WEBSITES[business.value]; ownWebsite.hidden = !url; if (url) { ownWebsite.href = url; ownWebsite.textContent = `Visit ${business.value} website ↗`; } }
  business.addEventListener('change', updateOwnWebsite); updateOwnWebsite();
  function render() {
    const q = search.value.trim().toLocaleLowerCase(); options.replaceChildren();
    choices.filter(name => name.toLocaleLowerCase().includes(q)).forEach(name => {
      const label = document.createElement('label'); label.className = 'option';
      const input = document.createElement('input'); input.type = 'checkbox'; input.checked = selected.has(name); input.value = name;
      input.addEventListener('change', () => { input.checked ? selected.add(name) : selected.delete(name); count.textContent = `${selected.size} selected`; });
      const span = document.createElement('span'); span.textContent = name; label.append(input, span);
      if (WEBSITES[name]) { const a = document.createElement('a'); a.href = WEBSITES[name]; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.className = 'website'; a.textContent = 'Website ↗'; a.setAttribute('aria-label', `Visit ${name} website (opens in a new tab)`); a.addEventListener('click', e => e.stopPropagation()); label.append(a) }
      options.append(label);
    });
    if (!options.childElementCount) { const empty = document.createElement('p'); empty.textContent = 'No matching businesses'; options.append(empty) }
  }
  search.addEventListener('input', render); render();
  document.getElementById('meetingForm').addEventListener('submit', async event => {
    event.preventDefault(); status.className = 'status';
    if (!business.value || !primaryAttendee.value.trim() || !selected.size) { status.textContent = 'Enter your primary attendee, select your business and at least one meeting preference.'; status.classList.add('error'); return }
    if (!GOOGLE_SCRIPT_URL.startsWith('https://script.google.com/macros/s/')) { status.textContent = 'The Google Sheets connection has not been configured yet.'; status.classList.add('error'); return }
    submit.disabled = true; submit.textContent = 'Submitting…'; status.textContent = 'Saving your preferences…';
    try {
      // Apps Script web apps redirect cross-origin; no-cors is a write-only request.
      // This confirms sending, not successful saving; check the Sheet for receipt.
      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ submittedAt: new Date().toISOString(), attendeeType: role, primaryAttendee: primaryAttendee.value.trim(), secondAttendee: secondAttendee.value.trim(), company: business.value, selections: [...selected] }) });
      status.textContent = 'Your preferences have been sent. Please contact the organiser if you need to confirm receipt.'; status.classList.add('success');
      submit.textContent = 'Preferences sent';
    } catch (error) { status.textContent = 'Unable to send your preferences. Please try again.'; status.classList.add('error'); submit.disabled = false; submit.textContent = 'Submit meeting preferences →' }
  });
}
