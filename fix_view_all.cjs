const fs = require('fs');

const viewAllCardRegex = /<a href="practice\.html" class="group p-8 rounded-sm border border-stone-100 border-dashed[\s\S]*?<\/a>/;

// For index.html, we move it to the end of the grid.
let indexContent = fs.readFileSync('index.html', 'utf8');
const indexGridRegex = /<div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">([\s\S]*?)<\/div>\s*(?:<\/div>|<!--)/;

let viewAllMatch = indexContent.match(viewAllCardRegex);
if (viewAllMatch) {
    let viewAllCard = viewAllMatch[0];
    
    // remove it from its current position
    indexContent = indexContent.replace(viewAllCardRegex, '');
    
    // add it right before the closing div of the grid
    indexContent = indexContent.replace(/(<\/div>\s*<\/div>\s*<!-- Process Section -->)/, viewAllCard + '\n                    $1');
    fs.writeFileSync('index.html', indexContent);
    console.log('Moved View All Area in index.html to the end.');
}

// For practice.html, we just remove it because practice.html shows all areas.
let practiceContent = fs.readFileSync('practice.html', 'utf8');
if (practiceContent.match(viewAllCardRegex)) {
    practiceContent = practiceContent.replace(viewAllCardRegex, '');
    fs.writeFileSync('practice.html', practiceContent);
    console.log('Removed View All Area in practice.html');
}
