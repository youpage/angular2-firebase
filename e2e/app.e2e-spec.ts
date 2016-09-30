import { FormsPage } from './app.po';

describe('Angular Firebase App', function() {
  let page: FormsPage;

  beforeEach(() => {
    page = new FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
