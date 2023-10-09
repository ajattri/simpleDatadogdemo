const fs = require('fs');

const filePath = './out/.nojekyll';
const fileContent = '';

// Write to the file with error handling
try {
  fs.writeFileSync(filePath, fileContent);
  console.log(`File "${filePath}" created with content.`);
} catch (error) {
  console.error('Error writing to the file:', error.message);
}