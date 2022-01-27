const puppeteer = require("puppeteer");

module.exports = async (html, opts = {}) => {
  const {
    fullPage = true,
    omitBackground = false,
    viewportWidth = 800,
    viewportHeight = 600,
    imageType = "png",
  } = opts;
  const browser = await puppeteer.launch({
    defaultViewport: {
      height: viewportHeight,
      width: viewportWidth,
    },
  });
  const page = await browser.newPage();
  await page.setContent(html);
  const image = await page.screenshot({
    fullPage,
    omitBackground,
    type: imageType,
  });
  await browser.close();
  return image;
};
