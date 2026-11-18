// Paste into Code.gs in a script bound to your Google Sheet.
// Run setup() once, then deploy as a Web app: Execute as Me; access Anyone.
const DRAW_CONFIG = {
  "je3-foundation-defib-supplies-prize-draw.html": {
    "company": "JE3 Foundation/Defib Supplies",
    "consent": "*By entering this competition you agree to receive marketing materials from JE3 Foundation/Defib Supplies.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "konsileo-prize-draw.html": {
    "company": "Konsileo",
    "consent": "*By entering this competition you agree to receive marketing materials from Konsileo.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "cimspa-prize-draw.html": {
    "company": "CIMSPA",
    "consent": "*By entering this competition you agree to receive marketing materials from CIMSPA.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "brite-prize-draw.html": {
    "company": "Brite",
    "consent": "*By entering this competition you agree to receive marketing materials from Brite.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "clubwise-prize-draw.html": {
    "company": "Clubwise",
    "consent": "*By entering this competition you agree to receive marketing materials from Clubwise.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "gym-log-books-prize-draw.html": {
    "company": "Gym Log Books",
    "consent": "*By entering this competition you agree to receive marketing materials from Gym Log Books.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "accolade-pro-prize-draw.html": {
    "company": "Accolade Pro",
    "consent": "*By entering this competition you agree to receive marketing materials from Accolade Pro.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "performx-prize-draw.html": {
    "company": "PerformX",
    "consent": "*By entering this competition you agree to receive marketing materials from PerformX.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "prs-ppl-prs-for-music-prize-draw.html": {
    "company": "PRS/ PPL PRS for Music",
    "consent": "*By entering this competition you agree to receive marketing materials from PRS/ PPL PRS for Music.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "a50-fitness-prize-draw.html": {
    "company": "A50 Fitness",
    "consent": "*By entering this competition you agree to receive marketing materials from A50 Fitness.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "benfit-prize-draw.html": {
    "company": "BenFit",
    "consent": "*By entering this competition you agree to receive marketing materials from BenFit.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "balanced-body-prize-draw.html": {
    "company": "Balanced Body",
    "consent": "*By entering this competition you agree to receive marketing materials from Balanced Body.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "wattbike-prize-draw.html": {
    "company": "Wattbike",
    "consent": "*By entering this competition you agree to receive marketing materials from Wattbike.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "leisure-jobs-prize-draw.html": {
    "company": "Leisure Jobs",
    "consent": "*By entering this competition you agree to receive marketing materials from Leisure Jobs.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "johnson-reed-prize-draw.html": {
    "company": "Johnson Reed",
    "consent": "*By entering this competition you agree to receive marketing materials from Johnson Reed.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "rijo42-prize-draw.html": {
    "company": "Rijo42",
    "consent": "*By entering this competition you agree to receive marketing materials from Rijo42.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "adapt-to-perform-prize-draw.html": {
    "company": "Adapt to Perform",
    "consent": "*By entering this competition you agree to receive marketing materials from Adapt to Perform.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "rackd-prize-draw.html": {
    "company": "Rackd",
    "consent": "*By entering this competition you agree to receive marketing materials from Rackd.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "quikswitch-prize-draw.html": {
    "company": "Quikswitch",
    "consent": "*By entering this competition you agree to receive marketing materials from Quikswitch.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "my-fitness-pal-prize-draw.html": {
    "company": "My Fitness Pal",
    "consent": "*By entering this competition you agree to receive marketing materials from My Fitness Pal.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "jordan-fitness-prize-draw.html": {
    "company": "Jordan Fitness",
    "consent": "*By entering this competition you agree to receive marketing materials from Jordan Fitness.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "brawn-power-prize-draw.html": {
    "company": "Brawn Power",
    "consent": "*By entering this competition you agree to receive marketing materials from Brawn Power.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "ig-prize-draw.html": {
    "company": "fibodo",
    "consent": "*By entering this competition you agree to receive marketing materials from fibodo.",
    "businessRequired": false,
    "question": "What is your favourite exercise?",
    "answerRequired": true
  },
  "output-sports-prize-draw.html": {
    "company": "Output Sports",
    "consent": "*By entering this competition you agree to receive marketing materials from Output Sports.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "xplor-fitness-leisure-prize-draw.html": {
    "company": "Xplor Fitness & Leisure",
    "consent": "*By entering this competition you agree to receive marketing materials from Xplor Fitness & Leisure.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "satellite-finance-prize-draw.html": {
    "company": "Satellite Finance",
    "consent": "*By entering this competition you agree to receive marketing materials from Satellite Finance.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "inbody-prize-draw.html": {
    "company": "Inbody",
    "consent": "*By entering this competition you agree to receive marketing materials from Inbody.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "elements-health-prize-draw.html": {
    "company": "Elements Health",
    "consent": "*By entering this competition you agree to receive marketing materials from Elements Health.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "salt-wood-prize-draw.html": {
    "company": "SALT Wood",
    "consent": "*By entering this competition you agree to receive marketing materials from SALT Wood.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "precor-prize-draw.html": {
    "company": "Precor",
    "consent": "*By entering this competition you agree to receive marketing materials from Precor.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "d2f-prize-draw.html": {
    "company": "D2F",
    "consent": "*By entering this competition you agree to receive marketing materials from D2F.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "taylor-made-designs-prize-draw.html": {
    "company": "Taylor Made Designs",
    "consent": "*By entering this competition you agree to receive marketing materials from Taylor Made Designs.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "factory-weights-prize-draw.html": {
    "company": "Factory Weights",
    "consent": "*By entering this competition you agree to receive marketing materials from Factory Weights.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "fibodo-exhibitor-prize-draw.html": {
    "company": "FIBODO",
    "consent": "*By entering this competition you agree to receive marketing materials from FIBODO.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "my-gym-equipment-prize-draw.html": {
    "company": "My Gym Equipment",
    "consent": "*By entering this competition you agree to receive marketing materials from My Gym Equipment.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "record-uk-prize-draw.html": {
    "company": "Record UK",
    "consent": "*By entering this competition you agree to receive marketing materials from Record UK.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "mountain-coach-prize-draw.html": {
    "company": "Mountain Coach",
    "consent": "*By entering this competition you agree to receive marketing materials from Mountain Coach.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "fitness-club-dynamics-prize-draw.html": {
    "company": "Fitness Club Dynamics",
    "consent": "*By entering this competition you agree to receive marketing materials from Fitness Club Dynamics.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "the-fit-va-prize-draw.html": {
    "company": "The Fit VA",
    "consent": "*By entering this competition you agree to receive marketing materials from The Fit VA.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "cobble-hill-prize-draw.html": {
    "company": "Cobble Hill",
    "consent": "*By entering this competition you agree to receive marketing materials from Cobble Hill.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "well-nation-prize-draw.html": {
    "company": "Well Nation",
    "consent": "*By entering this competition you agree to receive marketing materials from Well Nation.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "guru-paul-prize-draw.html": {
    "company": "Guru Paul",
    "consent": "*By entering this competition you agree to receive marketing materials from Guru Paul.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "clubright-prize-draw.html": {
    "company": "Clubright",
    "consent": "*By entering this competition you agree to receive marketing materials from Clubright.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "origin-fitness-prize-draw.html": {
    "company": "Origin Fitness",
    "consent": "*By entering this competition you agree to receive marketing materials from Origin Fitness.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "hyper-ice-prize-draw.html": {
    "company": "Hyper Ice",
    "consent": "*By entering this competition you agree to receive marketing materials from Hyper Ice.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "future-fit-for-business-prize-draw.html": {
    "company": "Future Fit for Business",
    "consent": "*By entering this competition you agree to receive marketing materials from Future Fit for Business.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "getmorevits-prize-draw.html": {
    "company": "GetMoreVits",
    "consent": "*By entering this competition you agree to receive marketing materials from GetMoreVits.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "seca-prize-draw.html": {
    "company": "SECA",
    "consent": "*By entering this competition you agree to receive marketing materials from SECA.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "mt3-fitness-prize-draw.html": {
    "company": "MT3 Fitness",
    "consent": "*By entering this competition you agree to receive marketing materials from MT3 Fitness.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "the-wellbeing-company-prize-draw.html": {
    "company": "The Wellbeing Company",
    "consent": "*By entering this competition you agree to receive marketing materials from The Wellbeing Company.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "dyaco-prize-draw.html": {
    "company": "Dyaco",
    "consent": "*By entering this competition you agree to receive marketing materials from Dyaco.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "sweat-life-prize-draw.html": {
    "company": "Sweat Life",
    "consent": "*By entering this competition you agree to receive marketing materials from Sweat Life.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "speedflex-prize-draw.html": {
    "company": "Speedflex",
    "consent": "*By entering this competition you agree to receive marketing materials from Speedflex.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "tanita-prize-draw.html": {
    "company": "Tanita",
    "consent": "*By entering this competition you agree to receive marketing materials from Tanita.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "keiser-ciclozone-prize-draw.html": {
    "company": "Keiser/Ciclozone",
    "consent": "*By entering this competition you agree to receive marketing materials from Keiser/Ciclozone.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "tropicana-prize-draw.html": {
    "company": "Tropicana",
    "consent": "*By entering this competition you agree to receive marketing materials from Tropicana.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "epassi-prize-draw.html": {
    "company": "ePassi",
    "consent": "*By entering this competition you agree to receive marketing materials from ePassi.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "blue-water-prize-draw.html": {
    "company": "Blue Water",
    "consent": "*By entering this competition you agree to receive marketing materials from Blue Water.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "bh-fitness-prize-draw.html": {
    "company": "BH Fitness",
    "consent": "*By entering this competition you agree to receive marketing materials from BH Fitness.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "myzone-prize-draw.html": {
    "company": "MyZone",
    "consent": "*By entering this competition you agree to receive marketing materials from MyZone.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "fitness-superstore-prize-draw.html": {
    "company": "Fitness Superstore",
    "consent": "*By entering this competition you agree to receive marketing materials from Fitness Superstore.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "align-merrithew-prize-draw.html": {
    "company": "Align/Merrithew",
    "consent": "*By entering this competition you agree to receive marketing materials from Align/Merrithew.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "rep-fitness-prize-draw.html": {
    "company": "REP Fitness",
    "consent": "*By entering this competition you agree to receive marketing materials from REP Fitness.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "egym-hussle-prize-draw.html": {
    "company": "Egym Hussle",
    "consent": "*By entering this competition you agree to receive marketing materials from Egym Hussle.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "matrix-fitness-prize-draw.html": {
    "company": "Matrix Fitness",
    "consent": "*By entering this competition you agree to receive marketing materials from Matrix Fitness.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "egym-prize-draw.html": {
    "company": "Egym",
    "consent": "*By entering this competition you agree to receive marketing materials from Egym.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "health-check-services-prize-draw.html": {
    "company": "Health Check Services",
    "consent": "*By entering this competition you agree to receive marketing materials from Health Check Services.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "fibodo-prize-draw.html": {
    "company": "fibodo",
    "consent": "*By entering this competition you agree to receive marketing materials from fibodo.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "together-we-lift-prize-draw.html": {
    "company": "Together We Lift",
    "consent": "*By entering this competition you agree to receive marketing materials from Together We Lift.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "active-insight-prize-draw.html": {
    "company": "Active Insight",
    "consent": "*By entering this competition you agree to receive marketing materials from Active Insight.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "echelon-prize-draw.html": {
    "company": "Echelon",
    "consent": "*By entering this competition you agree to receive marketing materials from Echelon.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "awesome-supps-prize-draw.html": {
    "company": "Awesome Supps",
    "consent": "*By entering this competition you agree to receive marketing materials from Awesome Supps.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  },
  "shua-prize-draw.html": {
    "company": "Shua",
    "consent": "*By entering this competition you agree to receive marketing materials from Shua.",
    "businessRequired": true,
    "question": "",
    "answerRequired": false
  }
};
const HEADERS = ['Submitted at', 'Company / prize draw', 'Name', 'Business name', 'Email', 'Question', 'Answer', 'Consent statement displayed', 'Source page', 'Submission ID'];

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Open this script through your Google Sheet: Extensions > Apps Script.');
  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', ss.getId());
  ss.setSpreadsheetTimeZone('Europe/London');
  const sheet = ss.getSheetByName('Entries') || ss.insertSheet('Entries');
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  checkHeaders_(sheet);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#066af2').setFontColor('#ffffff');
  if (!sheet.getFilter()) sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 2), HEADERS.length).createFilter();
  sheet.autoResizeColumns(1, HEADERS.length);
}

function doGet() {
  return json_({ok: true, service: 'Independent Gyms prize draw entry receiver'});
}

function doPost(e) {
  let lock;
  try {
    const p = (e && e.parameter) || {};
    const page = text_(p.prize_draw_page, 160);
    const config = Object.prototype.hasOwnProperty.call(DRAW_CONFIG, page) ? DRAW_CONFIG[page] : null;
    if (!config) throw new Error('Invalid prize draw.');
    const company = config.company;
    const name = text_(p.name, 160);
    const business = text_(p.business_name, 160);
    const email = text_(p.email, 254);
    const question = config.question;
    const answer = text_(p.answer, 4000);
    if (config.answerRequired && !answer) throw new Error('Please provide your answer.');
    const id = text_(p.submission_id, 80);
    if (!name || (config.businessRequired && !business) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Please provide all required details and a valid email.');
    if (!/^[a-zA-Z0-9-]{16,80}$/.test(id)) throw new Error('Invalid submission ID. Please refresh the page.');
    const consent = config.consent;
    if (p.consent_statement !== consent) throw new Error('The entry wording has changed. Please refresh the page.');
    const spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
    if (!spreadsheetId) throw new Error('Entries are not configured yet.');
    lock = LockService.getScriptLock();
    lock.waitLock(20000);
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Entries');
    if (!sheet) throw new Error('Entries are not configured yet.');
    checkHeaders_(sheet);
    // Repeated attempts from the same form entry must not create extra rows.
    if (sheet.getLastRow() > 1) {
      const existing = sheet.getRange(2, 10, sheet.getLastRow() - 1, 1).createTextFinder(id).matchEntireCell(true).findNext();
      if (existing) return json_({ok: true, duplicate: true});
    }
    const row = [new Date(), company, name, business, email, question, answer, consent, 'https://fibodo.com/prizedraw/' + page, id];
    sheet.appendRow(row.map(safeCell_));
    sheet.getRange(sheet.getLastRow(), 1).setNumberFormat('dd/MM/yyyy HH:mm:ss');
    SpreadsheetApp.flush();
    return json_({ok: true});
  } catch (error) {
    console.error(error);
    // Return safe user-facing validation messages; do not expose sheet internals.
    const message = error && error.message || '';
    const allowed = /^(Invalid prize draw\.|Please provide|Invalid submission ID\.|The entry wording|Entries are not configured)/;
    return json_({ok: false, error: allowed.test(message) ? message : 'We could not save your entry. Please try again.'});
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}
function text_(value, limit) {
  const s = String(value == null ? '' : value).trim();
  if (s.length > limit) throw new Error('Please provide shorter field values.');
  return s;
}
function safeCell_(value) {
  // Keep user input as text instead of allowing spreadsheet formulas.
  return typeof value === 'string' && /^[\s]*[=+@-]/.test(value) ? "'" + value : value;
}
function checkHeaders_(sheet) {
  const actual = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  if (actual.some((v, i) => v !== HEADERS[i])) throw new Error('Entries sheet headers have changed. Restore the original headers.');
}
function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
