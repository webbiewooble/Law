const fs = require('fs');

['index.html', 'practice.html'].forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        const regex = /[ \t]*<a href="practice\.html" class="text-\[10px\] font-bold uppercase tracking-widest text-accent-500 hover:text-accent-600 transition-colors mt-auto flex items-center gap-2">\s*LEARN MORE <span aria-hidden="true">&rarr;<\/span>\s*<\/a>\n/g;
        
        content = content.replace(regex, '');
        fs.writeFileSync(file, content);
        console.log('Removed Learn More buttons in ' + file);
    } catch (e) {
        console.error(e);
    }
});
