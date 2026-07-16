/**
 * Simmi Immigration — contact form → Google Sheet
 * ------------------------------------------------
 * Paste this into your Google Sheet's Apps Script editor
 * (Extensions ▸ Apps Script), then Deploy ▸ New deployment ▸ Web app.
 *
 * New submissions are inserted at ROW 2, so the NEWEST entry is always on top.
 */

// The tab (sheet) name to write to. Rename if your tab isn't called "Leads".
const SHEET_NAME = 'Leads';

// Column order written to the sheet. Row 1 of your sheet should have these headers.
const COLUMNS = ['Date', 'Name', 'Email', 'Phone', 'Service', 'Message', 'Page'];

function doPost(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(COLUMNS); // create header row if the tab is new
    }

    // Build the row in column order.
    const when = p.submittedAt ? new Date(p.submittedAt) : new Date();
    const row = [
      when,
      p.name || '',
      p.email || '',
      p.phone || '',
      p.service || '',
      p.message || '',
      p.page || '',
    ];

    // Insert a blank row directly under the header, then write into it.
    // Row 1 = headers, Row 2 = newest entry (older entries shift down).
    sheet.insertRowBefore(2);
    sheet.getRange(2, 1, 1, row.length).setValues([row]);

    // OPTIONAL: also email a copy to the office. Uncomment to enable.
    // MailApp.sendEmail({
    //   to: 'simmiimmigration@gmail.com',
    //   subject: 'New consultation request — ' + (p.name || 'Website'),
    //   htmlBody:
    //     '<h2>New consultation request</h2>' +
    //     '<p><b>Name:</b> ' + (p.name || '') + '</p>' +
    //     '<p><b>Email:</b> ' + (p.email || '') + '</p>' +
    //     '<p><b>Phone:</b> ' + (p.phone || '') + '</p>' +
    //     '<p><b>Service:</b> ' + (p.service || '') + '</p>' +
    //     '<p><b>Message:</b><br>' + (p.message || '') + '</p>' +
    //     '<p style="color:#888"><b>Page:</b> ' + (p.page || '') + '</p>',
    // });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Lets you open the deployed URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput('Simmi Immigration form endpoint is running.');
}
