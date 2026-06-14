const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/);
    if(footerMatch) {
        let footerText = footerMatch[0];
        
        // Fix logo in footer
        footerText = footerText.replace(/w-8 h-8 bg-brand-900 text-white/g, 'w-8 h-8 bg-accent-500 text-[#2B2B2B]');
        
        // Fix social links
        footerText = footerText.replace(/rounded-full bg-white border border-stone-200 flex/g, 'rounded-full bg-transparent border border-accent-500/30 flex');
        footerText = footerText.replace(/hover:text-white hover:border-accent-500/g, 'hover:bg-accent-500 hover:text-[#2B2B2B] hover:border-accent-500');

        content = content.replace(footerMatch[0], footerText);
    }
    
    fs.writeFileSync(file, content);
    console.log('Fixed footer logo/social in ' + file);
});
