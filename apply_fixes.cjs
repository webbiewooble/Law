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

// Remove the four services
const removeCards = (content) => {
    // 1. Commercial Litigation & Arbitration
    content = content.replace(/<div class="group[^>]*>\s*<div[^>]*>[\s\S]*?<iconify-icon[^>]*>[\s\S]*?<\/div>\s*<h3[^>]*>Commercial Litigation &amp; Arbitration<\/h3>[\s\S]*?<\/div>\s*/g, '');
    
    // 2. Corporate & Commercial Law
    content = content.replace(/<div class="group[^>]*>\s*<div[^>]*>[\s\S]*?<iconify-icon[^>]*>[\s\S]*?<\/div>\s*<h3[^>]*>Corporate &amp; Commercial Law<\/h3>[\s\S]*?<\/div>\s*/g, '');
    
    // 3. Litigation & Enforcement
    content = content.replace(/<div class="group[^>]*>\s*<div[^>]*>[\s\S]*?<iconify-icon[^>]*>[\s\S]*?<\/div>\s*<h3[^>]*>Litigation &amp; Enforcement<\/h3>[\s\S]*?<\/div>\s*/g, '');
    
    // 4. Dispute Resolution (Litigation & Dispute Resolution)
    // The prompt says "Dispute resolution", so let's match both "Dispute Resolution" and "Litigation & Dispute Resolution"
    content = content.replace(/<div class="group[^>]*>\s*<div[^>]*>[\s\S]*?<iconify-icon[^>]*>[\s\S]*?<\/div>\s*<h3[^>]*>Dispute Resolution<\/h3>[\s\S]*?<\/div>\s*/g, '');
    content = content.replace(/<div class="group[^>]*>\s*<div[^>]*>[\s\S]*?<iconify-icon[^>]*>[\s\S]*?<\/div>\s*<h3[^>]*>Litigation &amp; Dispute Resolution<\/h3>[\s\S]*?<\/div>\s*/g, '');
    
    return content;
};

processFile('index.html', removeCards);
processFile('practice.html', removeCards);

// "Insights main The hata do , legal team is ok"
// We change "The Legal Team" to "Legal Team"
processFile('attorneys.html', content => {
    return content.replace(
        '<h1 class="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">The Legal Team</h1>',
        '<h1 class="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">Legal Team</h1>'
    );
});

// Update email in contact.html
processFile('contact.html', content => {
    return content.replace(
        /<a href="mailto:lawionandpartners@gmail\.com" class="text-lg text-white hover:text-accent-500 transition-colors font-serif"[^>]*>lawionandpartners@gmail\.com<\/a>/g,
        `<a href="mailto:info@lawionandpartners.com" class="block text-lg text-white hover:text-accent-500 transition-colors font-serif mb-1" style="word-break: break-all;">info@lawionandpartners.com</a>
                            <a href="mailto:lawionandpartners@gmail.com" class="block text-lg text-white/70 hover:text-accent-500 transition-colors font-serif" style="word-break: break-all;">lawionandpartners@gmail.com</a>`
    );
});
