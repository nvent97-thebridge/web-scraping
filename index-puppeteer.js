import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
  });
  const page = await browser.newPage();

  await page.goto("https://www.paulinacocina.net/");

  await browser.close();
})();
