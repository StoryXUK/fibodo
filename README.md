# Active Insight active-net Meeting Selector

Restyled to match the supplied Active Insight reference website.

## Deployment
Upload all files in this folder together: index.html, operators.html, suppliers.html, styles.css, script.js, active-insight-logo.jpg and fibodo-logo.svg.

## Google Sheets
The existing script.js has been retained **byte-for-byte** from the previously working website. It uses the same deployed Google Apps Script endpoint and sends: submittedAt, attendeeType, primaryAttendee, secondAttendee, company, selections. The spreadsheet order is A timestamp, B type, C primary, D second, E company, F preferences. No Google Apps Script redeployment is required for this design-only update.

## Notes
The reference page mentioned a September deadline and a 40% guarantee. These have not been copied as they may not apply to the new event. All form IDs and JS hooks are preserved. The no-cors endpoint cannot confirm a spreadsheet write; test once after deployment.
