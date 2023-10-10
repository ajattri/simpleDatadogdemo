const fs = require('fs');
const path = require('path');

function deleteSourcemaps(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (file.endsWith('.map')) {
      fs.unlinkSync(fullPath);
    } else if (fs.statSync(fullPath).isDirectory()) {
      deleteSourcemaps(fullPath);
    }
  }
}

const sourceMapFolderPath = `${__dirname}/out`

deleteSourcemaps(sourceMapFolderPath);