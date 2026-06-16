const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/\s*<!-- Trust Bar -->[\s\S]*?<!-- Detailed Practice Areas Strip -->/, '\n\n            <!-- Detailed Practice Areas Strip -->');
fs.writeFileSync('index.html', content);

console.log('Removed Trust Bar');
