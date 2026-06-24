const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<li><a href="contact\.html" class="hover:text-accent-500 transition-colors">Contact us<\/a><\/li>/g, 
                             '<li><a href="mailto:info@lawionandpartners.com" class="hover:text-accent-500 transition-colors">Contact us</a></li>');
    fs.writeFileSync(file, content);
    console.log('Updated footer in ' + file);
});
