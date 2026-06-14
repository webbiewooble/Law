const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Make footer background deep navy
    content = content.replace(/<footer class="bg-\[#ebdcd3\] border-t border-stone-200 pt-20 pb-10">/g,
                             '<footer class="bg-brand-900 border-t border-brand-800 pt-20 pb-10">');
                             
    // In footer, replace "text-stone-500" with "text-white/60", and "text-brand-900" with "text-white"
    // To do this safely, we can replace within the <footer>...</footer> block
    
    // Instead of complex regex, let's just do targeted replacements in the footer
    const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/);
    if(footerMatch) {
        let footerText = footerMatch[0];
        footerText = footerText.replace(/text-brand-900/g, 'text-white');
        footerText = footerText.replace(/text-stone-500/g, 'text-white/60');
        footerText = footerText.replace(/text-stone-400/g, 'text-white/40');
        footerText = footerText.replace(/bg-white border-stone-200 flex/g, 'bg-transparent border-accent-500 flex text-accent-500 hover:bg-accent-500 hover:text-textMain');
        footerText = footerText.replace(/hover:border-stone-900/g, 'hover:border-accent-500');
        
        // Newsletter input
        footerText = footerText.replace(/bg-white border-stone-200 w-full px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800/g,
                                        'bg-brand-950 border-brand-800 text-white w-full px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500');
                                        
        // Newsletter button
        footerText = footerText.replace(/bg-brand-900 text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-brand-800 transition-colors/g,
                                        'bg-accent-500 text-textMain px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-accent-600 transition-colors');
        
        // Ensure "Lawion and Partners" logo is still fine in footer
        // "w-8 h-8 bg-brand-900 text-white..." wait, 'bg-brand-900' in footer will be invisible!
        footerText = footerText.replace(/w-8 h-8 bg-white text-white/g, 'w-8 h-8 bg-accent-500 text-textMain');
        
        content = content.replace(footerMatch[0], footerText);
    }
    
    // Pre-Footer CTA adjustments
    content = content.replace(/%23b05f93/g, '%23C9A14A'); // svg pattern
    content = content.replace(/bg-white text-brand-900 px-10 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-brand-50 transition-colors/g,
                              'bg-accent-500 text-textMain px-10 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-accent-600 transition-colors');

    fs.writeFileSync(file, content);
    console.log('Fixed footer in ' + file);
});
