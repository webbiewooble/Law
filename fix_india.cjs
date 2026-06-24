const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(/Pakistan/g, 'India');
    content = content.replace(/Pakistani/g, 'Indian');
    content = content.replace(/Islamabad Zone IV/g, 'New Delhi');
    content = content.replace(/Islamabad, Lahore, and Karachi/g, 'New Delhi, Mumbai, and Bangalore');
    content = content.replace(/Est\. 2008 — Islamabad/g, 'Est. 2019 — India');
    content = content.replace(/Competition Commission of Pakistan \(CCP\)/g, 'Competition Commission of India (CCI)');
    content = content.replace(/SECP/g, 'SEBI');
    content = content.replace(/Faisalabad/g, 'Mumbai');
    // For copyright
    content = content.replace(/© 2026 Lawion/g, '© 2026 Lawion');

    fs.writeFileSync(file, content);
    console.log('Fixed India in ' + file);
});
