const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Make the word emphasis strictly accent (Gold)
    content = content.replace(/text-brand-800/g, (match, offset, fullText) => {
        // We only want to replace it when it's not part of "border-brand-800" but we are already matching "text-brand-800" so it's safe!
        return 'text-accent-500';
    });

    content = content.replace(/text-brand-600/g, 'text-accent-500');
    content = content.replace(/border-brand-600/g, 'border-accent-500');
    content = content.replace(/hover:bg-brand-700/g, 'hover:bg-accent-600');

    // Ensure buttons that might have been missed
    content = content.replace(/shadow-brand-900\/20/g, 'shadow-black/20');
    
    // There might be some bg-brand-100 borders
    content = content.replace(/border-brand-100\/50/g, 'border-stone-200/50');
    content = content.replace(/hover:shadow-brand-100\/50/g, 'hover:shadow-stone-200');

    fs.writeFileSync(file, content);
    console.log('Fixed stragglers in ' + file);
});
