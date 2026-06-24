const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

const whatsappButton = `
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/919990404665" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1EBE57] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 z-50 group" aria-label="Chat on WhatsApp">
        <iconify-icon icon="ic:baseline-whatsapp" width="28" class="md:hidden"></iconify-icon>
        <iconify-icon icon="ic:baseline-whatsapp" width="32" class="hidden md:block"></iconify-icon>
        <span class="absolute right-[115%] bg-white text-stone-800 text-xs font-semibold px-3 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-stone-100">
            Chat with us
        </span>
    </a>
</body>`;

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('wa.me/919990404665')) {
        content = content.replace(/<\/body>/i, whatsappButton);
        fs.writeFileSync(file, content);
        console.log('Added WhatsApp button to ' + file);
    }
});
