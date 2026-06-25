const fs = require('fs');
const path = require('path');

function processFile(filename, modifier) {
    const filePath = path.join(__dirname, filename);
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    const newContent = modifier(content);
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filename}`);
    }
}

const removeCards = (content) => {
    content = content.replace(/<div class="group[^>]*>\s*<div[^>]*>[\s\S]*?<iconify-icon[^>]*>[\s\S]*?<\/div>\s*<h3[^>]*>Corporate (?:&amp;|&) Commercial Law<\/h3>[\s\S]*?<\/div>\s*/g, '');
    content = content.replace(/<div class="group[^>]*>\s*<div[^>]*>[\s\S]*?<iconify-icon[^>]*>[\s\S]*?<\/div>\s*<h3[^>]*>Litigation (?:&amp;|&) Enforcement<\/h3>[\s\S]*?<\/div>\s*/g, '');
    content = content.replace(/<div class="group[^>]*>\s*<div[^>]*>[\s\S]*?<iconify-icon[^>]*>[\s\S]*?<\/div>\s*<h3[^>]*>Litigation (?:&amp;|&) Dispute Resolution<\/h3>[\s\S]*?<\/div>\s*/g, '');
    content = content.replace(/<div class="group[^>]*>\s*<div[^>]*>[\s\S]*?<iconify-icon[^>]*>[\s\S]*?<\/div>\s*<h3[^>]*>Dispute Resolution<\/h3>[\s\S]*?<\/div>\s*/g, '');
    
    return content;
};

processFile('index.html', removeCards);
processFile('practice.html', removeCards);
