const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove old hardcoded hex pinkish backgrounds, replacing with new luxury ivory/light ones
    content = content.replace(/bg-\[#f4eff3\]/g, 'bg-brand-50');
    content = content.replace(/bg-\[#f3edf1\]/g, 'bg-white border border-stone-100');
    content = content.replace(/bg-\[#fbf9fa\]/g, 'bg-brand-50');
    content = content.replace(/bg-\[#f3eaf1\]/g, 'bg-brand-50');
    
    // Fix icons inside cards (group-hover)
    content = content.replace(/group-hover:bg-brand-700 group-hover:text-white/g, 'group-hover:bg-accent-500 group-hover:text-textMain');
    
    // Cards border hover
    content = content.replace(/hover:border-brand-200/g, 'hover:border-accent-500/50');

    // General hover texts to gold
    content = content.replace(/hover:text-brand-800/g, 'hover:text-accent-500');
    content = content.replace(/hover:border-brand-800/g, 'hover:border-accent-500');
    content = content.replace(/group-hover:text-brand-800/g, 'group-hover:text-accent-500');
    
    // Minor headings that were brand-800 (purple) to gold
    content = content.replace(/class="text-brand-800 text-xs font-bold uppercase/g, 'class="text-accent-500 text-xs font-bold uppercase');
    content = content.replace(/class="text-sm font-semibold uppercase text-brand-800/g, 'class="text-sm font-semibold uppercase text-accent-500');
    
    // Hero buttons & CTA Buttons
    // from bg-brand-800 to accent-500
    // Request Counsel / Primary Buttons
    content = content.replace(/bg-brand-800 text-white border border-brand-800 px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-brand-700/g, 
                             'bg-accent-500 text-textMain border border-accent-500 px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-accent-600');
                             
    content = content.replace(/bg-brand-800 hover:bg-brand-700 text-white/g, 'bg-accent-500 hover:bg-accent-600 text-[#2B2B2B]');
                             
    // Secondary Buttons over dark
    content = content.replace(/bg-transparent backdrop-blur-sm border border-white\/30 text-white px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-white\/10/g,
                             'bg-transparent backdrop-blur-sm border border-accent-500/50 text-white px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-accent-500 hover:text-textMain');

    // Form inputs focus
    content = content.replace(/focus:border-brand-800 focus:ring-brand-800\/20/g, 'focus:border-accent-500 focus:ring-accent-500/20');
    content = content.replace(/focus:border-brand-500/g, 'focus:border-accent-500');

    // Backgrounds for specific sections
    // Footer - currently text-white works mostly but verify footer background
    
    // Text colors
    content = content.replace(/text-brand-200/g, 'text-accent-500');
    
    // Disclaimer modal
    content = content.replace(/bg-brand-950\/80/g, 'bg-brand-900/90');
    content = content.replace(/#5f254f/g, '#C9A14A'); // the scrollbar thumb color
    content = content.replace(/#f3eaf1/g, '#F8F5F0'); // the scrollbar track color

    // Ensure iconify-icons the right color where they were text-brand-800
    content = content.replace(/class="text-brand-800/g, 'class="text-accent-500');
    
    // The "bg-brand-800 w-12 h-12" kinds of circle icons
    content = content.replace(/bg-brand-800 text-white/g, 'bg-accent-500 text-textMain');
    
    fs.writeFileSync(file, content);
    console.log('Updated classes in ' + file);
});
