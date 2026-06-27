const fs = require('fs');
let template = fs.readFileSync('cases.html', 'utf8');

const privacyContent = template.replace(/<section id="cases"[\s\S]*?<\/section>/, `<section id="privacy" class="page-section fade-in bg-white min-h-screen">
    <div class="max-w-4xl mx-auto px-6 py-24">
        <div class="mb-12 border-b border-stone-200 pb-8">
            <h2 class="text-4xl font-serif text-brand-900 tracking-tight">Privacy Policy</h2>
        </div>
        <div class="prose max-w-none text-stone-600 font-light space-y-6">
            <p>
                Pursuant to the rules of the Bar Council of India, we are prohibited from advertising or soliciting legal work. By continuing to use this website, the user confirms that:
            </p>
            <ul class="list-disc pl-5 space-y-2">
                <li>The user is visiting this website voluntarily to obtain information about the Firm, its practice areas, legal professionals, and services for personal or professional reference.</li>
                <li>No advertisement, solicitation, invitation, inducement, or personal communication has been made by the Firm or any of its members to attract professional engagements through this website.</li>
                <li>The information provided on this website is for general informational purposes only and should not be construed as legal advice, legal opinion, or a substitute for professional legal consultation.</li>
                <li>Accessing, downloading, transmitting, or receiving any material from this website is entirely at the user's discretion and does not establish any lawyer-client relationship with the Firm.</li>
                <li>The Firm shall not be liable for any action taken based on the information available on this website. Users should obtain independent legal advice for any specific legal issue. All content on this website remains the intellectual property of the Firm.</li>
            </ul>
        </div>
    </div>
</section>`).replace('<title>Careers &amp; Internships', '<title>Privacy Policy');

const termsContent = template.replace(/<section id="cases"[\s\S]*?<\/section>/, `<section id="terms" class="page-section fade-in bg-white min-h-screen">
    <div class="max-w-4xl mx-auto px-6 py-24">
        <div class="mb-12 border-b border-stone-200 pb-8">
            <h2 class="text-4xl font-serif text-brand-900 tracking-tight">Terms of Service</h2>
        </div>
        <div class="prose max-w-none text-stone-600 font-light space-y-6">
            <p>
                Pursuant to the rules of the Bar Council of India, we are prohibited from advertising or soliciting legal work. By continuing to use this website, the user confirms that:
            </p>
            <ul class="list-disc pl-5 space-y-2">
                <li>The user is visiting this website voluntarily to obtain information about the Firm, its practice areas, legal professionals, and services for personal or professional reference.</li>
                <li>No advertisement, solicitation, invitation, inducement, or personal communication has been made by the Firm or any of its members to attract professional engagements through this website.</li>
                <li>The information provided on this website is for general informational purposes only and should not be construed as legal advice, legal opinion, or a substitute for professional legal consultation.</li>
                <li>Accessing, downloading, transmitting, or receiving any material from this website is entirely at the user's discretion and does not establish any lawyer-client relationship with the Firm.</li>
                <li>The Firm shall not be liable for any action taken based on the information available on this website. Users should obtain independent legal advice for any specific legal issue. All content on this website remains the intellectual property of the Firm.</li>
            </ul>
        </div>
    </div>
</section>`).replace('<title>Careers &amp; Internships', '<title>Terms of Service');

fs.writeFileSync('privacy.html', privacyContent);
fs.writeFileSync('terms.html', termsContent);

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<a href="#" class="hover:text-white">Privacy Policy<\/a>/g, '<a href="privacy.html" class="hover:text-white">Privacy Policy</a>');
    content = content.replace(/<a href="#" class="hover:text-white">Terms of Service<\/a>/g, '<a href="terms.html" class="hover:text-white">Terms of Service</a>');
    fs.writeFileSync(file, content);
}
