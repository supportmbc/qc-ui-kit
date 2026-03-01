import fs from 'fs';
import path from 'path';

const directory = path.resolve('src/assets/styles');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/@import ['"](.+)['"];/g, "@use '$1' as *;");

  fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.scss')) {
      processFile(filePath);
    }
  });
}

processDirectory(directory);
