const fs = require('fs');

let content = fs.readFileSync('contact.html', 'utf8');

// Regex to match the block:
// <div class="flex gap-6 items-start">
//     <div ...>
//         <iconify-icon ...>
//     </div>
//     <div>
//         ...
//     </div>
// </div>
// ...
const blockRegex = /<div class="flex gap-6 items-start">[\s\S]*?<iconify-icon icon="solar:map-point-linear"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

content = content.replace(blockRegex, '');

fs.writeFileSync('contact.html', content);
console.log('Removed location block from contact.html');
