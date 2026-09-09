const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'next-app');
const destDir = __dirname;

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(srcDir)) {
    copyDir(srcDir, destDir);
    fs.rmSync(srcDir, { recursive: true, force: true });
    console.log("Files moved successfully.");
} else {
    console.log("next-app directory not found.");
}
