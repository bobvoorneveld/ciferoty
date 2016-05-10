export class CiferotyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ciferoty-app h1')).getText();
  }
}
