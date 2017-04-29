import { SpaceAppsFrontendPage } from './app.po';

describe('space-apps-frontend App', function() {
  let page: SpaceAppsFrontendPage;

  beforeEach(() => {
    page = new SpaceAppsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
