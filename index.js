const { chromium } = require('playwright');

const argsString = process.argv[2]; // Get the first argument as a string
const argsArray = argsString.split(','); // Split the string into an array

console.log("Arguments passed:", argsArray);

(async () => {
    const browser = await chromium.launch({ headless: true }); // Launch browser once

    for (const [index, arg] of argsArray.entries()) {
        console.log(`Processing: ${arg} (Index ${index})`);

        const page = await browser.newPage();
        //await page.goto(`https://example.com/search?q=${arg}`); // Example: visiting a search page
        await page.goto(`https://www.google.com/`); // Example: visiting a search page
        console.log(`Title for ${arg}:`, await page.title());

       // await page.close(); // Close the page after use
        await page.waitForEvent('close');
    }

    //await browser.close(); // Close browser after the loop
})();

//node script.js "apple,banana,cherry,date"
