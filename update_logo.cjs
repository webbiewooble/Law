const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    const newHeaderLogo = `<a href="index.html" class="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 w-max">
                <img src="assets/logo.jpeg" alt="Lawion and Partners Logo" class="h-10 md:h-12 object-contain">
            </a>`;

    const headerLogoRegex = /<a href="index\.html" class="flex flex-col md:flex-row items-center justify-center md:items-center md:justify-start gap-1 md:gap-3 group absolute left-1\/2 top-1\/2 -translate-x-1\/2 -translate-y-1\/2 md:static md:translate-x-0 md:translate-y-0 w-max">[\s\S]*?<\/a>/;
    
    content = content.replace(headerLogoRegex, newHeaderLogo);
    
    const newFooterLogo = `<a href="index.html" class="inline-block mb-8">
                        <img src="assets/logo.jpeg" alt="Lawion and Partners Logo" class="h-14 object-contain">
                    </a>`;
    
    const footerLogoRegex = /<a href="index\.html" class="flex items-center gap-2 mb-8 text-left">[\s\S]*?<\/a>/;
    
    content = content.replace(footerLogoRegex, newFooterLogo);

    fs.writeFileSync(file, content);
    console.log('Updated logo in ' + file);
});
