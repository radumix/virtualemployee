// A function to concatenate strings
function concatenateStrings(...strings) {
    return strings.join(' ');
  }
  
  // process.argv is an array that contains command-line arguments
  // The first two items are the path to the Node executable and the script path
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Please provide some strings as parameters.');
    process.exit(1);
  }
  
  const result = concatenateStrings(...args);
  console.log(result);
  