const fs = require('fs');

const pages = [
    { file: 'index.html', active: 'Home' },
    { file: 'practice.html', active: 'Practice areas' },
    { file: 'attorneys.html', active: 'Insights' },
    { file: 'cases.html', active: 'Career and internships' },
    { file: 'contact.html', active: 'Contact us' } // Contact has its own CTA but just in case
];

pages.forEach(p => {
    let content = fs.readFileSync(p.file, 'utf8');

    const navItems = [
        { href: 'index.html', label: 'Home' },
        { href: 'practice.html', label: 'Practice areas' },
        { href: 'attorneys.html', label: 'Insights' },
        { href: 'cases.html', label: 'Career and internships' }
    ];

    let desktopNav = '<div class="hidden md:flex items-center gap-10">\n';
    navItems.forEach(item => {
        if(item.label === p.active) {
            desktopNav += `                <a href="${item.href}" class="nav-link text-xs font-medium text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-accent-500 hover:after:w-full after:transition-all hover:text-accent-500 after:w-full">${item.label}</a>\n`;
        } else {
            desktopNav += `                <a href="${item.href}" class="nav-link text-xs font-medium text-white/70 hover:text-accent-500 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-accent-500 hover:after:w-full after:transition-all">${item.label}</a>\n`;
        }
    });
    desktopNav += '            </div>';

    const regex = /<div class="hidden md:flex items-center gap-10">[\s\S]*?<\/div>/;
    content = content.replace(regex, desktopNav);

    fs.writeFileSync(p.file, content);
    console.log('Fixed nav in ' + p.file);
});
