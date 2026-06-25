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

const removeFooterLinks = (content) => {
    content = content.replace(/<li><a href="practice.html" class="hover:text-accent-500 transition-colors">Litigation (?:&amp;|&) Dispute Resolution<\/a><\/li>\s*/g, '');
    content = content.replace(/<li><a href="practice.html" class="hover:text-accent-500 transition-colors">Corporate (?:&amp;|&) Commercial Law<\/a><\/li>\s*/g, '');
    return content;
};

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];
pages.forEach(p => processFile(p, removeFooterLinks));
