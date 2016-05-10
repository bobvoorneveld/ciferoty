import { CiferotyPage } from './app.po';

describe('ciferoty App', function() {
  let page: CiferotyPage;

  beforeEach(() => {
    page = new CiferotyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ciferoty works!');
  });
});
