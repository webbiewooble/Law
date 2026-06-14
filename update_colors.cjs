const fs = require('fs');

const pages = ['index.html', 'practice.html', 'attorneys.html', 'cases.html', 'contact.html'];

const newTailwindConfig = `tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    colors: {
                        brand: {
                            50: '#F8F5F0',
                            100: '#e6eef5',
                            200: '#c1d4e6',
                            300: '#90b3d1',
                            400: '#5a8fba',
                            500: '#3d719e',
                            600: '#2c5780',
                            700: '#234566',
                            800: '#1b354f',
                            900: '#0F1C2E',
                            950: '#1A1A1A',
                        },
                        accent: {
                            400: '#d1b16a',
                            500: '#C9A14A',
                            600: '#b58e39',
                        },
                        textMain: '#2B2B2B'
                    },
                    backgroundImage: {
                        'grid-pattern': "url(\\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23C9A14A' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\\")",
                    }
                }
            }
        }`;

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Replace the entire tailwind config block
    const configRegex = /tailwind\.config = \{[\s\S]*?            \}\n        \}/;
    content = content.replace(configRegex, newTailwindConfig);

    fs.writeFileSync(file, content);
    console.log('Updated tailwind config in ' + file);
});
