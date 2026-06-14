const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // old nav class
    content = content.replace(/<nav class="fixed top-0 w-full z-50 bg-white\/90 backdrop-blur-md border-b border-stone-200\/60 transition-all duration-300">/g, 
                             '<nav class="fixed top-0 w-full z-50 bg-brand-900 border-b border-brand-800 transition-all duration-300">');
    
    // Logo block
    content = content.replace(/<div class="w-8 h-8 md:w-10 md:h-10 bg-brand-900 text-white flex items-center justify-center rounded-sm group-hover:bg-brand-700 transition-colors duration-300 shadow-sm shrink-0">/g,
                             '<div class="w-8 h-8 md:w-10 md:h-10 bg-accent-500 text-brand-900 flex items-center justify-center rounded-sm group-hover:bg-accent-400 transition-colors duration-300 shadow-sm shrink-0">');

    // Title texts
    content = content.replace(/<span class="text-\[11px\] md:text-sm font-semibold tracking-tight uppercase leading-none text-brand-900">Lawion and Partners<\/span>/g,
                             '<span class="text-[11px] md:text-sm font-semibold tracking-tight uppercase leading-none text-white">Lawion and Partners</span>');

    content = content.replace(/<span class="text-\[7.5px\] md:text-\[10px\] text-stone-500 uppercase tracking-widest leading-none mt-1 group-hover:text-brand-600 transition-colors block">Advocates &amp; Counsel<\/span>/g,
                             '<span class="text-[7.5px] md:text-[10px] text-accent-500/80 uppercase tracking-widest leading-none mt-1 group-hover:text-accent-500 transition-colors block">Advocates &amp; Counsel</span>');

    // Desktop Nav Items (home is active)
    content = content.replace(/<a href="([^"]+)" class="nav-link text-xs font-medium hover:text-brand-800 transition-colors relative after:content-\[''\] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-brand-700 hover:after:w-full after:transition-all text-brand-800 after:w-full">([^<]+)<\/a>/g,
                             '<a href="$1" class="nav-link text-xs font-medium text-white transition-colors relative after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-accent-500 hover:after:w-full after:transition-all hover:text-accent-500 after:w-full">$2</a>');
                             
    // Desktop Nav Items (inactive)
    content = content.replace(/<a href="([^"]+)" class="nav-link text-xs font-medium text-stone-500 hover:text-brand-800 transition-colors relative after:content-\[''\] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-700 hover:after:w-full after:transition-all">([^<]+)<\/a>/g,
                             '<a href="$1" class="nav-link text-xs font-medium text-white/70 hover:text-accent-500 transition-colors relative after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-accent-500 hover:after:w-full after:transition-all">$2</a>');

    // Contact button
    content = content.replace(/<a href="contact\.html" class="bg-brand-800 hover:bg-brand-700 text-white text-xs font-semibold   px-6 py-3 rounded-sm transition-all shadow-lg shadow-stone-900\/10 hover:shadow-brand-700\/20 flex items-center gap-2 group">/g,
                             '<a href="contact.html" class="bg-accent-500 hover:bg-accent-600 text-[#2B2B2B] text-xs font-semibold px-6 py-3 rounded-sm transition-all shadow-lg shadow-black/20 flex items-center gap-2 group">');

    // Mobile hamburger menu toggle
    content = content.replace(/<button class="md:hidden absolute right-6 top-1\/2 -translate-y-1\/2 text-brand-900" onclick="toggleMobileMenu\(\)">/g,
                             '<button class="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white" onclick="toggleMobileMenu()">');

    // Mobile Menu Overlay
    // background: white -> brand-950
    // link texts
    content = content.replace(/<div id="mobile-menu" class="hidden md:hidden absolute top-24 left-0 w-full bg-white border-b border-stone-100 p-6 flex-col gap-6 shadow-xl animate-fade-in-down">/g,
                             '<div id="mobile-menu" class="hidden md:hidden absolute top-24 left-0 w-full bg-brand-950 border-b border-brand-800 p-6 flex-col gap-6 shadow-xl animate-fade-in-down">');

    content = content.replace(/<a href="([^"]+)" class="text-left text-sm font-medium text-brand-900">([^<]+)<\/a>/g,
                             '<a href="$1" class="text-left text-sm font-medium text-white">$2</a>');

    content = content.replace(/<a href="([^"]+)" class="text-left text-sm font-medium text-stone-500">([^<]+)<\/a>/g,
                             '<a href="$1" class="text-left text-sm font-medium text-white/70 hover:text-accent-500">$2</a>');

    content = content.replace(/<a href="contact\.html" class="text-left text-sm font-medium text-brand-800">Contact us<\/a>/g,
                             '<a href="contact.html" class="text-left text-sm font-medium text-accent-500">Contact us</a>');

    fs.writeFileSync(file, content);
    console.log('Updated Nav in ' + file);
});
