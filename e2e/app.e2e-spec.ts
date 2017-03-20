import { Ng2HttpEventsPage } from './app.po';

describe('ng2-http-events App', () => {
  let page: Ng2HttpEventsPage;

  beforeEach(() => {
    page = new Ng2HttpEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
