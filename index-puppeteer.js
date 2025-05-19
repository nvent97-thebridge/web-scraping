import puppeteer from "puppeteer";

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
  });
  const page = await browser.newPage();

  await page.goto("https://www.paulinacocina.net/");

  // Select button and click it

  await browser.close();
};

main();
