const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(/Indiai/g, 'Indian');

    fs.writeFileSync(file, content);
    console.log('Fixed Indiai in ' + file);
});
