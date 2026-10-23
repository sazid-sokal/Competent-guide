/*
  গুগল শিটে অর্ডার জমা করার স্ক্রিপ্ট (Google Apps Script)

  সেটআপ:
  1. নতুন একটি Google Sheet খুলুন (যেমন নাম: "Competent Orders")।
  2. মেনু থেকে Extensions > Apps Script এ যান।
  3. পুরনো কোড মুছে এই পুরো কোড পেস্ট করে Save করুন।
  4. Deploy > New deployment > Type: Web app
       Execute as: Me
       Who has access: Anyone
     তারপর Deploy করুন এবং অনুমতি (Authorize) দিন।
  5. যে "Web app URL" পাবেন, সেটি order.html ফাইলের SCRIPT_URL এর জায়গায় বসান।

  কোড বদলালে নতুন করে Deploy > Manage deployments > Edit > New version দিতে হবে।
*/

var SHEET_NAME = "Orders";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["অর্ডারের তারিখ", "নাম", "মোবাইল", "ঠিকানা"]);
      sheet.getRange(1, 1, 1, 4).setFontWeight("bold").setBackground("#dff2fb");
      sheet.setFrozenRows(1);
    }

    var p = e.parameter;
    var date = Utilities.formatDate(new Date(), "Asia/Dhaka", "dd/MM/yyyy hh:mm a");

    // মোবাইল নাম্বারের শুরুর 0 যেন হারিয়ে না যায়, তাই লেখা (text) হিসেবে রাখা হচ্ছে
    var phoneCell = sheet.getRange(sheet.getLastRow() + 1, 3);
    phoneCell.setNumberFormat("@");

    sheet.appendRow([date, p.name || "", p.phone || "", p.address || ""]);
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}
