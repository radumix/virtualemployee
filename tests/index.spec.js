const { chromium } = require('playwright');

async function processDocument(docNumber, index) {
    const browser = await chromium.launch({ headless: true }); // Launch browser once
    const page = await browser.newPage();

    console.log(`Processing: ${docNumber} (Index ${index})`);
    await page.goto(`https://example.com/search?q=${docNumber}`); // Example: visiting a search page
    console.log(`Title for ${docNumber}:`, await page.title());

    await page.close(); // Close the page after use
    await browser.close();
}

// Export function for use in script.js
module.exports = { processDocument };
