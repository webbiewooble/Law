const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Make footer grid 3 columns
    content = content.replace(/<div class="grid md:grid-cols-4 gap-12 mb-20">/g, 
                             '<div class="grid md:grid-cols-3 gap-12 mb-20">');
                             
    // Remove Locations block
    const locationRegex = /<div>\s*<h4 class="text-xs font-bold text-white uppercase tracking-widest mb-6">Locations<\/h4>[\s\S]*?<\/div>/;
    content = content.replace(locationRegex, '');

    fs.writeFileSync(file, content);
    console.log('Removed locations in ' + file);
});
