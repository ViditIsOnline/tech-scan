import { TechScanPage } from './app.po';

describe('tech-scan App', () => {
  let page: TechScanPage;

  beforeEach(() => {
    page = new TechScanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
