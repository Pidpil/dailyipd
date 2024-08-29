function doGet(e) {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("ฟอร์มDaily_IPD")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

var url = "https://docs.google.com/spreadsheets/d/1LwxEjj6KQ5B_sFTZnTpotkQZMf8MPp_uOHHdJCdrOD4/edit?gid=0#gid=0";
var folderId = "1inVWYXZ7upPOvqQ6_oq6_LOCr1ITvjAe";

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function uploadFiles(data) {
  var file = data.myFile;
  var folder = DriveApp.getFolderById(folderId);
  var createFile = folder.createFile(file);
  return createFile.getUrl();
}

function addNewRow2(rowData) {
  const ss = SpreadsheetApp.openByUrl(url);
  const ws = ss.getSheetByName("ชีต1");
  
  const headers = ws.getRange(1, 1, 1, ws.getLastColumn()).getValues()[0];
  const newRow = headers.map(header => rowData[header] || "");
  
  ws.appendRow(newRow);
  
  return { success: true, message: "บันทึกข้อมูลสำเร็จ" };
}

// ***** โค้ดนี้เป็นโค้ดที่ถูกแก้ไขเพื่อไม่ให้เกิดปัญหารหัส GS-13 ***** //

function doGet() {  
  return HtmlService.createHtmlOutputFromFile('index');
}

function addData(obj) {
  let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ชีต1');
  ss.appendRow([
    new Date(),
    obj.aName,
    obj.bdate,
    obj.cward,
    obj.dyodyokma,
    obj.episet,
    obj.fsaman,
    obj.glongterm,
    obj.hrabkrangrak,
    obj.irabhrangrong,
    obj.jrabyay,
    obj.kreadmit,
    obj.lsongklab,
    obj.myatrab,
    obj.nyaireun,
    obj.orefer,
    obj.pd_cwithplan,
    obj.qescape,
    obj.rsongsongkroa,
    obj.sdead  
  ]);
}
