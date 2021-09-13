function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Dialog')
      .addItem('Open', 'openDialog')
      .addToUi();
}

function openDialog() {
  var html = HtmlService.createTemplateFromFile('Index').evaluate().setWidth(600).setHeight(600);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Dialog title');
}

function AddStats(stats) {
  Logger.log(stats);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  sheet.appendRow([stats.username, stats.faction, stats.level, stats.ap, stats.lifetimeap, stats.trekker, stats.recursions, new Date()]);
}