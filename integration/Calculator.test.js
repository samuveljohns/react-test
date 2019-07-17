const puppeteer = require('puppeteer');

describe('Calculator', () => {
  it('visually looks correct', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:6006/iframe.html?selectedKind=Calculator&selectedStory=Calculator');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});