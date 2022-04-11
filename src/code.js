// Functions


// docs here
function onOpen() {
	SpreadsheetApp.getUi().createAddonMenu()
		.addItem('Open Sidebar', 'openSidebar')
		.addItem('Hello World', 'helloWorld')
		.addToUi();
}


// docs here
function onInstall() {
	onOpen();
}




function openSidebar() {

	// Name of html file as parameter
	const html = HtmlService.createTemplateFromFile('sidebar').evaluate();

	const ui = SpreadsheetApp.getUi();

	ui.showSidebar(html);

}



function helloWorld() {

	SpreadsheetApp.getActiveSpreadsheet().toast('Hello World!', 'Important Message');

}




function CUSTOMFUNCTION(num) {
	return num * 2;
}





