const { processDocument } = require('./tests/index.spec'); // Import function from tests folder

const argsString = process.argv[2]; // Get the first argument as a string
const argsArray = argsString.split(','); // Split the string into an array

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    console.log("Arguments passed:", argsArray);

    for (const [index, docNumber] of argsArray.entries()) {
        console.log(`Processing document: ${docNumber} (Index ${index})`);

        await processDocument(docNumber, index); // Call function from index.spec.js

        console.log(`Waiting 6 minutes before processing the next document...`);
        await delay(360000); // 6-minute delay (360,000 ms)
    }

    console.log("All documents processed.");
})();
