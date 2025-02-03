// @ts-check
import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');
const argsString = process.argv[2]; // Get the first argument as a string
const argsArray = argsString.split(','); // Split the string into an array


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



console.log("Arguments passed:", argsArray);

(async () => {
    const browser = await chromium.launch({ headless: true }); // Launch browser once

    for (const [index, arg] of argsArray.entries()) {
        console.log(`Processing: ${arg} (Index ${index})`);

        const page = await browser.newPage();
        //await page.goto(`https://example.com/search?q=${arg}`); // Example: visiting a search page
        await page.goto(`https://www.google.com/`); // Example: visiting a search page
        console.log(`Title for ${arg}:`, await page.title());

        await page.close(); // Close the page after use
    }

    await browser.close(); // Close browser after the loop
})();
