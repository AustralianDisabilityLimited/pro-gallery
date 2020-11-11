import GalleryDriver from '../../drivers/pptrDriver';
import {toMatchImageSnapshot} from '../../drivers/matchers';
import { GALLERY_CONSTS } from 'pro-gallery-lib';

expect.extend({ toMatchImageSnapshot });

describe('column - e2e', () => {
  let driver;

  beforeAll(async () => {
    driver = new GalleryDriver();
    await driver.launchBrowser();
  });

  afterAll(() => {
    driver.closeBrowser();
  });
  it('column - scrollDirection = vertical', async () => {
    await driver.openPage({
      galleryLayout: GALLERY_CONSTS.layout.COLUMN,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL
    });
    await driver.waitFor.hookToBeVisible('item-container');
    await driver.waitFor.timer(200);
    const page = await driver.grab.screenshot();
    expect(page).toMatchImageSnapshot();
  });
  it('column - scrollDirection = horizontal', async () => {
    await driver.openPage({
      galleryLayout: GALLERY_CONSTS.layout.COLUMN,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    await driver.waitFor.hookToBeVisible('item-container');
    await driver.waitFor.timer(200);
    const page = await driver.grab.screenshot();
    expect(page).toMatchImageSnapshot();
  });

})
