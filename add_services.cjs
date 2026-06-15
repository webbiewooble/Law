const fs = require('fs');

const newCards = `
                    <div class="group p-8 rounded-sm border border-stone-100 hover:border-accent-500/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left">
                        <div class="w-12 h-12 rounded-sm bg-white border border-stone-100 text-brand-900 group-hover:bg-accent-500 group-hover:text-textMain flex items-center justify-center mb-6 transition-colors">
                            <iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-serif text-brand-900 mb-3">Capital Markets</h3>
                        <p class="text-sm text-stone-500 leading-relaxed font-light mb-6 flex-grow">
                            Expert guidance on IPOs, FPOs, rights issues, and all capital market transactions.
                        </p>
                        <a href="practice.html" class="text-[10px] font-bold uppercase tracking-widest text-accent-500 hover:text-accent-600 transition-colors mt-auto flex items-center gap-2">
                           LEARN MORE <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                    
                    <div class="group p-8 rounded-sm border border-stone-100 hover:border-accent-500/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left">
                        <div class="w-12 h-12 rounded-sm bg-white border border-stone-100 text-brand-900 group-hover:bg-accent-500 group-hover:text-textMain flex items-center justify-center mb-6 transition-colors">
                            <iconify-icon icon="solar:hand-shake-linear" width="24"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-serif text-brand-900 mb-3">Private Equity</h3>
                        <p class="text-sm text-stone-500 leading-relaxed font-light mb-6 flex-grow">
                            Comprehensive legal support for PE investments, fund formation, and exits.
                        </p>
                        <a href="practice.html" class="text-[10px] font-bold uppercase tracking-widest text-accent-500 hover:text-accent-600 transition-colors mt-auto flex items-center gap-2">
                           LEARN MORE <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    <div class="group p-8 rounded-sm border border-stone-100 hover:border-accent-500/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left">
                        <div class="w-12 h-12 rounded-sm bg-white border border-stone-100 text-brand-900 group-hover:bg-accent-500 group-hover:text-textMain flex items-center justify-center mb-6 transition-colors">
                            <iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-serif text-brand-900 mb-3">Mergers &amp; Acquisition</h3>
                        <p class="text-sm text-stone-500 leading-relaxed font-light mb-6 flex-grow">
                            Strategic legal counsel for domestic and cross-border M&amp;A transactions.
                        </p>
                        <a href="practice.html" class="text-[10px] font-bold uppercase tracking-widest text-accent-500 hover:text-accent-600 transition-colors mt-auto flex items-center gap-2">
                           LEARN MORE <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    <div class="group p-8 rounded-sm border border-stone-100 hover:border-accent-500/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left">
                        <div class="w-12 h-12 rounded-sm bg-white border border-stone-100 text-brand-900 group-hover:bg-accent-500 group-hover:text-textMain flex items-center justify-center mb-6 transition-colors">
                            <iconify-icon icon="solar:case-linear" width="24"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-serif text-brand-900 mb-3">General Corporate</h3>
                        <p class="text-sm text-stone-500 leading-relaxed font-light mb-6 flex-grow">
                            Full-spectrum corporate legal services for businesses at every stage.
                        </p>
                        <a href="practice.html" class="text-[10px] font-bold uppercase tracking-widest text-accent-500 hover:text-accent-600 transition-colors mt-auto flex items-center gap-2">
                           LEARN MORE <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    <div class="group p-8 rounded-sm border border-stone-100 hover:border-accent-500/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left">
                        <div class="w-12 h-12 rounded-sm bg-white border border-stone-100 text-brand-900 group-hover:bg-accent-500 group-hover:text-textMain flex items-center justify-center mb-6 transition-colors">
                            <iconify-icon icon="solar:scale-linear" width="24"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-serif text-brand-900 mb-3">Commercial Litigation &amp; Arbitration</h3>
                        <p class="text-sm text-stone-500 leading-relaxed font-light mb-6 flex-grow">
                            Aggressive representation in disputes, litigation, and arbitration proceedings.
                        </p>
                        <a href="practice.html" class="text-[10px] font-bold uppercase tracking-widest text-accent-500 hover:text-accent-600 transition-colors mt-auto flex items-center gap-2">
                           LEARN MORE <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                    
                    <a href="practice.html" class="group p-8 rounded-sm border border-stone-100 border-dashed hover:border-accent-500/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-[250px]">
                        <div class="w-12 h-12 text-brand-900 flex items-center justify-center mb-2 mx-auto">
                            <iconify-icon icon="solar:add-square-linear" width="32"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-serif text-brand-900 mb-4">View All Areas</h3>
                        <span class="text-[10px] font-bold uppercase tracking-widest text-accent-500 mt-2 flex items-center gap-2 mx-auto">
                           EXPLORE ALL <span aria-hidden="true">&rarr;</span>
                        </span>
                    </a>
`;

['index.html', 'practice.html'].forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');

        // First change grid columns to lg:grid-cols-4 for tighter layout like image
        content = content.replace(/<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">/g, 
                                  '<div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">');
                                  
        // We add the items right after the grid wrapper
        const gridRegex = /<div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">/;
        
        // Only prepend if we haven't already!
        if (!content.includes('Capital Markets')) {
            content = content.replace(gridRegex, '$&\n' + newCards);
        }
        
        // Ensure old cards have "flex flex-col"
        content = content.replace(/<div class="group p-8 rounded-sm border border-stone-100 hover:border-accent-500\/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1">/g,
                                  '<div class="group p-8 rounded-sm border border-stone-100 hover:border-accent-500/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col text-left">');
        
        fs.writeFileSync(file, content);
        console.log('Added services to ' + file);
    } catch (e) {
        console.error(e);
    }
});
