// Google Apps Script for UrbanNest Customer Enquiry Form
// Deploy as web app: New → Project → code.gs → Deploy → New Deployment → Web app → Execute as: [your email] → Who has access: Anyone

function doGet(e) {
  const name = e.parameter.name || '';
  const email = e.parameter.email || '';
  const phone = e.parameter.phone || '';
  
  // Validate required fields
  if (!name || !email || !phone) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Name, email, and phone are required'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  try {
    const sheet = getOrCreateResponseSheet();
    const timestamp = new Date().toLocaleString();
    
    // Append row to sheet
    sheet.appendRow([timestamp, name, email, phone]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Enquiry submitted successfully',
      data: { timestamp, name, email, phone }
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  // Support POST requests as well
  const params = JSON.parse(e.postData.contents);
  const name = params.name || '';
  const email = params.email || '';
  const phone = params.phone || '';
  
  if (!name || !email || !phone) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Name, email, and phone are required'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  try {
    const sheet = getOrCreateResponseSheet();
    const timestamp = new Date().toLocaleString();
    
    sheet.appendRow([timestamp, name, email, phone]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Enquiry submitted successfully',
      data: { timestamp, name, email, phone }
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateResponseSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName('Responses');
  
  if (!sheet) {
    // Create new sheet if it doesn't exist
    sheet = spreadsheet.insertSheet('Responses');
    
    // Add header row with bold formatting
    const headerRange = sheet.getRange(1, 1, 1, 4);
    headerRange.setValues([['Timestamp', 'Name', 'Email', 'Phone']]);
    headerRange.setFontWeight('bold');
    
    // Set column widths
    sheet.setColumnWidth(1, 180);
    sheet.setColumnWidth(2, 200);
    sheet.setColumnWidth(3, 250);
    sheet.setColumnWidth(4, 150);
  }
  
  return sheet;
}

// Test function to verify deployment
function testSheet() {
  const sheet = getOrCreateResponseSheet();
  Logger.log('Responses sheet ready. Total rows: ' + sheet.getLastRow());
}
