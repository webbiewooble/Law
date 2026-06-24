const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(/<a href="mailto:info@lawionandpartners\.com" class="hover:text-accent-500 transition-colors">Contact us<\/a>/g, '<a href="contact.html" class="hover:text-accent-500 transition-colors">Contact us</a>');

    fs.writeFileSync(file, content);
    console.log('Fixed Contact us link in ' + file);
});
