const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Remove the container from Introduction Grid
const containerRegex = /<div class="lg:col-span-7 grid sm:grid-cols-2 gap-6">[\s\S]*?<\/div>\s*(?=<\/div>\s*<a href="practice\.html")/m;
content = content.replace(containerRegex, '');

// If the container was already removed or didn't match, let's try a different regex
// Actually, let's just make sure we remove the cards and the View All.
const viewAllRegex = /<a href="practice\.html" class="group p-8 rounded-sm border border-stone-100 border-dashed hover:border-accent-500\/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-\[250px\]">[\s\S]*?<\/a>/;
let viewAllMatch = content.match(viewAllRegex);
if(viewAllMatch) {
    content = content.replace(viewAllRegex, '');
}

// Convert Card 1 and Card 2 to new style
const newCard1 = `
                    <div class="group p-8 rounded-sm border border-stone-100 hover:border-accent-500/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col text-left">
                        <div class="w-12 h-12 rounded-sm bg-white border border-stone-100 text-brand-900 group-hover:bg-accent-500 group-hover:text-textMain flex items-center justify-center mb-6 transition-colors">
                            <iconify-icon icon="solar:hand-shake-linear" width="24"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-serif text-brand-900 mb-3">Dispute Resolution</h3>
                        <p class="text-sm text-stone-500 leading-relaxed font-light">
                            Certified arbitrators and mediators providing cost-effective alternatives to litigation.
                        </p>
                    </div>`;

const newCard2 = `
                    <div class="group p-8 rounded-sm border border-stone-100 hover:border-accent-500/50 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 flex flex-col text-left">
                        <div class="w-12 h-12 rounded-sm bg-white border border-stone-100 text-brand-900 group-hover:bg-accent-500 group-hover:text-textMain flex items-center justify-center mb-6 transition-colors">
                            <iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-serif text-brand-900 mb-3">Family &amp; Inheritance</h3>
                        <p class="text-sm text-stone-500 leading-relaxed font-light">
                            Sensitive handling of personal matters ensuring privacy and fair distribution under Islamic Law.
                        </p>
                    </div>`;

const endOfGridRegex = /(<\/div>\s*<\/div>\s*<\/div>\s*<!-- Introduction Grid -->)/;
content = content.replace(endOfGridRegex, newCard1 + newCard2 + (viewAllMatch ? '\n' + viewAllMatch[0] : '') + '\n                $1');

// Change the lg:col-span-5 to col-span-12 since there's no cards next to it now.
content = content.replace(/<div class="lg:col-span-5">/g, '<div class="lg:col-span-12 max-w-4xl">');

fs.writeFileSync('index.html', content);
