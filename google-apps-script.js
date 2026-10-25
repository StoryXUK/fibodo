// Replace the existing doPost in the Apps Script attached to your Google Sheet.
// Responses tab columns: A Submitted At, B Attendee Type, C Primary Attendee,
// D Second Attendee, E Company, F Meeting Preferences.
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) throw new Error('No form data received');
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses');
    if (!sheet) throw new Error('A sheet tab named Responses could not be found');
    if (!['Operator','Supplier'].includes(data.attendeeType) ||
        !String(data.primaryAttendee || '').trim() ||
        !String(data.company || '').trim() ||
        !Array.isArray(data.selections) || !data.selections.length) {
      throw new Error('Invalid meeting preferences submission');
    }
    const safe = value => {
      const str = String(value == null ? '' : value).trim();
      return /^[=+\-@]/.test(str) ? "'" + str : str;
    };
    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      sheet.appendRow([
        safe(data.submittedAt || new Date().toISOString()),
        safe(data.attendeeType),
        safe(data.primaryAttendee),
        safe(data.secondAttendee),
        safe(data.company),
        data.selections.map(safe).join(', ')
      ]);
    } finally { lock.releaseLock(); }
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:error.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
