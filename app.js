        const translations = {
            en: {
                'nav-about': 'About',
                'nav-services': 'Services',
                'nav-products': 'Products',
                'nav-capabilities': 'Capabilities',
                'nav-process': 'Process',
                'nav-why': 'Why Us',
                'nav-contact': 'Contact',
                'products-tag': 'Products',
                'products-title': 'Products we build and ship ourselves.',
                'products-desc': 'Tools born from our own work, refined into products you can use today.',
                'prod-soundlock-kicker': 'macOS · Menu bar app',
                'prod-soundlock-title': 'SoundLock',
                'prod-soundlock-tagline': 'Your audio. Your rules. Always.',
                'prod-soundlock-desc': 'A macOS menu bar app that locks your audio device priority so the right output and input are always selected.',
                'prod-soundlock-feat-1': 'Ranked priority lists with drag-to-reorder',
                'prod-soundlock-feat-2': 'Offline persistence across restarts',
                'prod-soundlock-feat-3': 'Volume and mute control from the menu bar',
                'prod-soundlock-feat-4': 'Guard toggle to lock or unlock at any time',
                'prod-soundlock-feat-5': 'Launch at login with zero Dock footprint',
                'prod-soundlock-feat-6': 'CoreAudio event-driven: ~20MB RAM, 0% idle CPU',
                'prod-soundlock-feat-7': 'Privacy-first: no network, no mic permission, local storage only',
                'prod-soundlock-use-1': 'Pro audio setups',
                'prod-soundlock-use-2': 'Multi-device Bluetooth',
                'prod-soundlock-use-3': 'Video call mic stability',
                'prod-soundlock-fit': 'Best for: anyone tired of macOS switching audio devices on its own',
                'prod-soundlock-cta': 'View on GitHub',
                'prod-soundlock-details': 'View details',
                'nav-home': 'Home',
                'sl-back': '← mancan.digital',
                'sl-hero-eyebrow': 'Product · macOS menu bar app',
                'sl-download': 'Download SoundLock',
                'sl-download-note': 'Free · macOS 13+',
                'sl-overview-label': 'Overview',
                'sl-overview-1': 'macOS constantly reassigns your default audio device on its own logic — plug in a monitor, connect AirPods, join a call, and suddenly the wrong speaker or mic is active. SoundLock ends that.',
                'sl-overview-2': 'You rank your output and input devices once. SoundLock listens to CoreAudio device events and instantly restores your top available device whenever macOS tries to switch. Event-driven, no polling, ~20MB RAM and 0% idle CPU.',
                'sl-shots-label': 'Screenshots',
                'sl-shot-caption': 'Menu bar popover: ranked devices, volume, mute, and guard toggle.',
                'sl-features-label': 'Features',
                'sl-usecases-label': 'Use cases',
                'sl-privacy-label': 'Privacy',
                'sl-privacy-desc': 'SoundLock reads zero audio bytes, never requests microphone permission, ships no network code, and stores preferences locally via UserDefaults. No telemetry, no analytics.',
                'sl-install-label': 'Install',
                'sl-install-1-title': '1. Download & unzip',
                'sl-install-1-desc': 'Download SoundLock.app.zip, unzip it, and drag SoundLock.app into your Applications folder.',
                'sl-install-2-title': '2. First launch (Gatekeeper)',
                'sl-install-2-desc': 'The app is unsigned. On macOS 14 and earlier, right-click it and choose Open twice; on macOS 15 Sequoia, open System Settings → Privacy & Security → Open Anyway. Or clear the quarantine flag from Terminal:',
                'sl-more-label': 'Free & ready',
                'sl-more-desc': "SoundLock is free to download and use — no account, no tracking, no network code. It's a closed-source app maintained by mancan.digital.",
                'sl-cta-github': 'View on GitHub',
                'sl-cta-coffee': 'Buy me a coffee',
                'sl-meta-title': 'SoundLock — Lock your macOS audio device priority',
                'prod-cenna-kicker': 'macOS · Capture & recording',
                'prod-cenna-title': 'Cenna',
                'prod-cenna-tagline': 'Native speed. Without native limits.',
                'prod-cenna-desc': 'A lightweight macOS menu bar app for screenshots and screen recording — native capture, real customization, and memory discipline most tools lack.',
                'prod-cenna-feat-1': 'Full-screen and interactive area capture',
                'prod-cenna-feat-2': 'Built-in annotation editor: arrows, shapes, freehand',
                'prod-cenna-feat-3': 'Post-capture choice: editor, quick preview, copy, or save',
                'prod-cenna-feat-4': 'MP4 recording with system audio, mic, and webcam overlay',
                'prod-cenna-feat-5': 'Timeline editor: split, trim, and speed up segments',
                'prod-cenna-feat-6': 'Direct paths stay flat at ~15MB RAM, editor ~38MB',
                'prod-cenna-feat-7': 'Global shortcuts, login item, configurable save folder',
                'prod-cenna-use-1': 'Demos & product tours',
                'prod-cenna-use-2': 'Support & bug reports',
                'prod-cenna-use-3': 'Docs & async updates',
                'prod-cenna-fit': 'Best for: teams who want native macOS feel without bloated capture tools',
                'prod-cenna-details': 'View details',
                'prod-cenna-cta': 'Get early access',
                'cn-back': '← mancan.digital',
                'cn-hero-eyebrow': 'Product · macOS capture & recording',
                'cn-download-note': 'Free beta · macOS 13+ · coming soon',
                'cn-cta-access': 'Get early access',
                'cn-cta-email': 'Email us',
                'cn-overview-label': 'Overview',
                'cn-overview-1': 'Most screenshot tools promise "simple capture," then keep a heavy pipeline alive in the background, decode huge images in-process, and turn ordinary screenshots into a memory event. Cenna takes the opposite approach.',
                'cn-overview-2': 'It leans on macOS-native capture paths and keeps full-resolution screenshot data off the long-lived UI path, so it feels fast and stays realistic to keep running all day. Native where it matters, custom where it matters, efficient everywhere.',
                'cn-shots-label': 'Screenshots',
                'cn-shot-caption': 'Configurable capture, recording, and post-capture behavior from one menu bar app.',
                'cn-features-label': 'Features',
                'cn-memory-label': 'Memory discipline',
                'cn-memory-desc': 'Direct capture paths stay flat at ~15MB across an entire burst. The editor settles at ~38MB no matter how many shots run through it. Where many open-source tools sit in the hundreds of MB — and can exceed 1GB — Cenna stays lean.',
                'cn-usecases-label': 'Use cases',
                'cn-recording-label': 'Recording advantage',
                'cn-rec-1-title': "Beyond Apple's defaults",
                'cn-rec-1-desc': 'Record full-screen MP4 with system audio, microphone, and a customizable webcam overlay — multiple sizes and shapes — so you appear on top of the video instead of recording screen and camera separately.',
                'cn-rec-2-title': 'Quality you control',
                'cn-rec-2-desc': 'Pick 30 or 60 fps and 720p, 1080p, 1440p, or native resolution. Trade fidelity for dramatically lower memory when that is the right call.',
                'cn-rec-3-title': 'Edit before you save',
                'cn-rec-3-desc': 'Split the timeline at the playhead, trim by deleting (and restoring) segments, and speed up slow sections with 1x–2x presets — per segment or all at once — with an export-accurate preview so what you see is what gets written.',
                'cn-meta-title': 'Cenna — Lightweight macOS screenshots & screen recording',
                'hero-eyebrow': 'Technology consulting',
                'hero-title-1': 'Automate operations,',
                'hero-title-2': 'connect systems, and drive results.',
                'hero-desc': 'Technology consulting that turns AI and automation into business results — for small and mid-size teams that want real control over their data.',
                'hero-pain': 'Manual workflows, disconnected tools, slow delivery.',
                'hero-cta-primary': 'Book a Discovery Call',
                'hero-cta-secondary': 'Explore Capabilities',
                'hero-chip-1': 'Advisory + execution',
                'hero-chip-2': 'Bilingual delivery EN/PT',
                'hero-chip-3': 'Bilingual delivery EN/PT',
                'hero-node-1': 'AI',
                'hero-node-2': 'Automation',
                'hero-node-3': 'Custom Apps',
                'hero-node-4': 'Advisory',
                'board-kicker': 'Networked delivery model',
                'board-desc': 'Strategy, automation, software delivery, and AI implementation aligned in one execution layer.',
                'trust-1': 'Since 2019',
                'trust-2': 'Brazil-based, global delivery',
                'trust-3': 'AI + automation + custom software',
                'trust-4': 'Designed for operational efficiency',
                'about-tag': 'Positioning',
                'about-title': 'Consulting built for teams that need clarity, speed, and durable systems.',
                'about-desc-1': 'We combine strategic advisory and hands-on delivery to diagnose friction, design the right solution, and implement it.',
                'about-desc-2': 'We design and deliver systems that improve throughput, visibility, and decision-making.',
                'about-chip-1': 'Partnered delivery from strategy to implementation',
                'about-chip-2': 'Custom-fit architecture for each engagement',
                'about-chip-3': 'Practical systems over generic transformation talk',
                'about-stat-1-label': 'Focus',
                'about-stat-1-value': 'Operational efficiency',
                'about-stat-2-label': 'Delivery model',
                'about-stat-2-value': 'Advisory + build',
                'capabilities-tag': 'Capabilities',
                'capabilities-title': 'A capability matrix that covers advisory, automation, and delivery.',
                'capabilities-desc': 'Three capability areas: strategy, automation, and custom software delivery.',
                'cap-1-kicker': 'Cluster 01',
                'cap-1-title': 'Consulting & Strategy',
                'cap-1-desc': 'Define the right systems, priorities, and execution path.',
                'cap-1-item-1': 'Digital transformation planning',
                'cap-1-item-2': 'Systems assessment',
                'cap-1-item-3': 'Solution architecture',
                'cap-1-item-4': 'Technology roadmap design',
                'cap-1-fit': 'Best for: teams aligning operations and technology',
                'cap-2-kicker': 'Cluster 02',
                'cap-2-title': 'Automation & AI',
                'cap-2-desc': 'Reduce operational drag with practical automation and AI.',
                'cap-2-item-1': 'RPA and workflow automation',
                'cap-2-item-2': 'AI integration',
                'cap-2-item-3': 'Process optimization',
                'cap-2-item-4': 'Decision support systems',
                'cap-2-fit': 'Best for: teams reducing manual work and operational latency',
                'cap-3-kicker': 'Cluster 03',
                'cap-3-title': 'Software Delivery',
                'cap-3-desc': 'Build custom systems that fit real workflows.',
                'cap-3-item-1': 'Full-stack web applications',
                'cap-3-item-2': 'Desktop and internal tools',
                'cap-3-item-3': 'Cloud-native platforms',
                'cap-3-item-4': 'Systems integrations',
                'cap-3-fit': 'Best for: teams needing custom software and connected systems',
                'engagement-label': 'Engagement formats',
                'engagement-1': 'Advisory',
                'engagement-2': 'Project delivery',
                'engagement-3': 'Ongoing partnership',
                'outcomes-tag': 'Outcomes',
                'outcomes-title': 'Outcomes we deliver when execution and consulting stay connected.',
                'outcomes-desc': 'The goal is simple: faster operations, better decisions, and a foundation that scales.',
                'outcome-1-kicker': 'Outcome 01',
                'outcome-1-title': 'Faster operations',
                'outcome-1-desc': 'Reduce handoffs, repeated manual tasks, and avoidable delays across core workflows.',
                'outcome-2-kicker': 'Outcome 02',
                'outcome-2-title': 'Better decisions',
                'outcome-2-desc': 'Improve visibility, system coherence, and confidence in day-to-day operational choices.',
                'outcome-3-kicker': 'Outcome 03',
                'outcome-3-title': 'Scalable digital foundations',
                'outcome-3-desc': 'Build systems that can support growth instead of becoming the next bottleneck.',
                'process-tag': 'How We Work',
                'process-title': 'A simple engagement model that moves from diagnosis to implementation.',
                'process-desc': 'A clear path from diagnosis to working systems.',
                'process-1-kicker': 'Assess',
                'process-1-title': 'Assess',
                'process-1-desc': 'Audit workflows, systems, bottlenecks, and business priorities to define the real constraints.',
                'process-2-kicker': 'Design',
                'process-2-title': 'Design',
                'process-2-desc': 'Define solution architecture, automation targets, integration paths, and implementation scope.',
                'process-3-kicker': 'Implement',
                'process-3-title': 'Implement',
                'process-3-desc': 'Deliver software, automations, integrations, and iterative improvements that hold up in real operations.',
                'why-tag': 'Why Clients Choose Us',
                'why-title': 'A consultancy model designed for buyers who need working outcomes, not presentation decks.',
                'why-desc': 'Business context, technical depth, and execution in one engagement.',
                'why-1-title': 'Business-first consulting',
                'why-1-desc': 'Recommendations are anchored in operational constraints, business priorities, and delivery reality.',
                'why-2-title': 'Custom-fit delivery',
                'why-2-desc': 'Solutions are shaped around your workflows, tool stack, and team maturity instead of generic templates.',
                'why-3-title': 'Long-term partnership',
                'why-3-desc': 'We stay focused on continuity, maintainability, and improvement after the initial launch.',
                'why-4-title': 'Global-ready execution',
                'why-4-desc': 'Brazil-based delivery with bilingual communication and execution quality built for international clients.',
                'contact-tag': 'Start a Conversation',
                'contact-title': 'Bring the problem and the target timeline.',
                'contact-desc': 'We can scope advisory, delivery, or a hybrid engagement based on your current stage.',
                'contact-note': 'Tell us your challenge, stack, and target timeline.',
                'contact-response': 'Typical first reply within 1 business day.',
                'contact-card-label': 'Primary contact',
                'contact-location': 'Brazil-based, available worldwide.',
                'contact-cta-primary': 'Email Us',
                'contact-cta-secondary': 'Schedule a Discovery Call',
                'footer-email': 'info@mancan.digital',
                'footer-top': 'Back to top',
                'nav-book': 'Book a call',
                'hero-badge': 'Networked delivery model',
                'hero-line-1': 'Automate operations.',
                'hero-line-2': 'Connect systems.',
                'hero-line-3': 'Ship custom software.',
                'hero-stat-1': 'since 2019',
                'hero-stat-2': 'global delivery',
                'hero-stat-3': 'bilingual EN/PT',
                'hero-live': '● live',
                'node-data': 'data',
                'node-bots': 'bots',
                'node-models': 'models',
                'node-connect': 'connect',
                'hero-metric-1': 'throughput ↑ 3.2×',
                'hero-metric-2': 'manual steps ↓ 78%',
                'footer-copy': '© 2026 mancan.digital — brazil-based, available worldwide.',
                'nav-pricing': 'Pricing',
                'foot-pricing': 'Pricing',
                'foot-terms': 'Terms',
                'foot-privacy': 'Privacy',
                'foot-refunds': 'Refunds',
                'legal-tag': 'Legal',
                'pr-tag': 'Pricing',
                'pr-title': 'Simple, transparent pricing.',
                'pr-intro': 'Product pricing depends on the product and license tier. Consulting is scoped per engagement. All prices are in US dollars (USD) unless stated otherwise; applicable taxes may be added at checkout.',
                'pr-products-h': 'Products',
                'pr-cenna-tag': 'macOS · Capture &amp; recording',
                'pr-cenna-price': 'Pricing coming soon',
                'pr-cenna-desc': 'Lightweight macOS menu bar app for screenshots and screen recording. One-time purchase, lifetime use of the purchased major version.',
                'pr-soundlock-tag': 'macOS · Audio',
                'pr-soundlock-desc': 'Free to download and use. macOS 13+.',
                'pr-onetime': 'one-time',
                'pr-view': 'View details',
                'pr-consult-h': 'Consulting',
                'pr-consult-tag': 'Advisory · Delivery · Hybrid',
                'pr-consult-title': 'Custom engagements',
                'pr-consult-sub': 'Scoped per project',
                'pr-consult-desc': 'Technology consulting is priced by engagement scope and timeline — fixed-scope, retainer, or hybrid. Bring the problem and the timeline for a quote.',
                'pr-quote': 'Request a quote',
                'tos-title': 'Terms of Service',
                'legal-updated': 'Last updated: 8 July 2026',
                'tos-intro': 'These Terms of Service ("Terms") govern your access to and use of the websites, software products, and consulting services (together, the "Services") provided by <strong>MANCAN DIGITAL ANALISE E DESENVOLVIMENTO LTDA</strong>, CNPJ 60.808.509/0001-97, a company organized under the laws of Brazil ("mancan.digital", "we", "us"). By purchasing, downloading, or using the Services you agree to these Terms.',
                'tos-h1': '1. Eligibility',
                'tos-p1': 'You must be at least 18 years old and able to form a binding contract to use the Services. If you use the Services on behalf of an organization, you represent that you are authorized to bind that organization.',
                'tos-h2': '2. Products and licenses',
                'tos-p2': 'Our software products (such as Cenna and SoundLock) are licensed, not sold. Some are free and some are paid; subject to any applicable fees and these Terms, we grant you a non-exclusive, non-transferable license to install and use the product for your own use. You may not resell, redistribute, sublicense, reverse-engineer, or remove proprietary notices from the software, except where such restriction is prohibited by law.',
                'tos-h3': '3. Consulting services',
                'tos-p3': 'Consulting engagements are governed by these Terms together with the specific scope, deliverables, and fees agreed in writing for each engagement. Where a signed proposal or statement of work conflicts with these Terms, the signed document controls for that engagement.',
                'tos-h4': '4. Orders and payment',
                'tos-p4': 'Prices are shown on our <a href="pricing.html">Pricing page</a> and at checkout. Payments are processed by third-party payment providers; by paying you also agree to their terms. You are responsible for any applicable taxes not collected by us. We may change prices at any time, but changes do not affect orders already placed.',
                'tos-h5': '5. Refunds',
                'tos-p5': 'Refunds are handled under our <a href="refunds.html">Refund Policy</a>, which forms part of these Terms.',
                'tos-h6': '6. Acceptable use',
                'tos-p6': 'You agree not to use the Services to break any law, infringe others\' rights, distribute malware, or interfere with the operation or security of the Services. We may suspend or terminate access for violations.',
                'tos-h7': '7. Intellectual property',
                'tos-p7': 'All rights, title, and interest in the Services, including software, branding, and content, remain with mancan.digital or its licensors. No rights are granted except as expressly stated in these Terms.',
                'tos-h8': '8. Warranties and disclaimers',
                'tos-p8': 'The Services are provided "as is" and "as available" without warranties of any kind, whether express or implied, to the maximum extent permitted by law. We do not warrant that the Services will be uninterrupted, error-free, or fit for a particular purpose. Statutory consumer rights that cannot be excluded are not affected.',
                'tos-h9': '9. Limitation of liability',
                'tos-p9': 'To the maximum extent permitted by law, mancan.digital will not be liable for indirect, incidental, special, or consequential damages, or loss of data, profits, or revenue. Our total liability for any claim relating to the Services is limited to the amount you paid for the Service giving rise to the claim in the 12 months before the claim.',
                'tos-h10': '10. Termination',
                'tos-p10': 'You may stop using the Services at any time. We may suspend or terminate your access if you breach these Terms. Sections that by their nature should survive termination will survive.',
                'tos-h11': '11. Changes to these Terms',
                'tos-p11': 'We may update these Terms from time to time. The "Last updated" date reflects the latest version. Continued use of the Services after changes take effect constitutes acceptance.',
                'tos-h12': '12. Governing law and jurisdiction',
                'tos-p12': 'These Terms are governed by the laws of the Federative Republic of Brazil. Any dispute will be submitted to the courts of the domicile of mancan.digital, without prejudice to mandatory consumer-protection rules under the Brazilian Consumer Defense Code (CDC).',
                'tos-h13': '13. Contact',
                'tos-p13': 'Questions about these Terms: <a href="mailto:info@mancan.digital">info@mancan.digital</a>.',
                'pp-title': 'Privacy Policy',
                'pp-intro': 'This Privacy Policy explains how <strong>MANCAN DIGITAL ANALISE E DESENVOLVIMENTO LTDA</strong>, CNPJ 60.808.509/0001-97 ("mancan.digital", "we", "us"), collects, uses, and protects personal data when you visit our website, purchase, or use our products and services. We act as data controller and process personal data in accordance with the Brazilian General Data Protection Law (LGPD, Law No. 13.709/2018).',
                'pp-h1': '1. Data we collect',
                'pp-l1a': '<strong>Contact and account data</strong> — name, email address, and any details you provide when you contact us or purchase.',
                'pp-l1b': '<strong>Transaction data</strong> — products purchased, amounts, and billing information. Card details are handled directly by our payment providers; we do not store full card numbers.',
                'pp-l1c': '<strong>Usage and device data</strong> — IP address, browser type, and pages viewed, collected via standard web logs and analytics.',
                'pp-l1d': '<strong>Support data</strong> — information you share when requesting support.',
                'pp-h2': '2. How we use data',
                'pp-l2a': 'To provide, license, and support our products and services.',
                'pp-l2b': 'To process payments, refunds, and invoicing.',
                'pp-l2c': 'To respond to enquiries and provide customer support.',
                'pp-l2d': 'To operate, secure, and improve our website and products.',
                'pp-l2e': 'To comply with legal, tax, and accounting obligations.',
                'pp-h3': '3. Legal bases (LGPD)',
                'pp-p3': 'We process personal data based on: performance of a contract with you; compliance with legal obligations; our legitimate interests (such as security and improving our Services); and your consent, where required.',
                'pp-h4': '4. Sharing data',
                'pp-p4': 'We share personal data only with service providers who help us operate — including payment processors, hosting and analytics providers — and with authorities where required by law. These providers process data on our behalf under appropriate safeguards. We do not sell your personal data.',
                'pp-h5': '5. International transfers',
                'pp-p5': 'Some providers may process data outside Brazil. Where this occurs, we rely on legal transfer mechanisms permitted by the LGPD to protect your data.',
                'pp-h6': '6. Retention',
                'pp-p6': 'We keep personal data only as long as necessary for the purposes above, including to meet legal, tax, and accounting requirements, after which it is deleted or anonymized.',
                'pp-h7': '7. Your rights',
                'pp-p7': 'Under the LGPD you may request confirmation of processing, access, correction, anonymization, portability, deletion, and information about data sharing, and you may withdraw consent. To exercise these rights, contact <a href="mailto:info@mancan.digital">info@mancan.digital</a>.',
                'pp-h8': '8. Cookies',
                'pp-p8': 'Our website may use cookies and similar technologies for functionality and analytics. You can control cookies through your browser settings; disabling them may affect some features.',
                'pp-h9': '9. Security',
                'pp-p9': 'We use reasonable technical and organizational measures to protect personal data against unauthorized access, loss, or misuse. No method of transmission or storage is completely secure.',
                'pp-h10': '10. Children',
                'pp-p10': 'Our Services are not directed to children under 18, and we do not knowingly collect their personal data.',
                'pp-h11': '11. Changes',
                'pp-p11': 'We may update this Policy from time to time. The "Last updated" date reflects the latest version.',
                'pp-h12': '12. Contact',
                'pp-p12': 'Data controller: MANCAN DIGITAL ANALISE E DESENVOLVIMENTO LTDA, CNPJ 60.808.509/0001-97. Privacy enquiries: <a href="mailto:info@mancan.digital">info@mancan.digital</a>.',
                'rf-title': 'Refund Policy',
                'rf-intro': 'This Refund Policy applies to purchases from <strong>MANCAN DIGITAL ANALISE E DESENVOLVIMENTO LTDA</strong>, CNPJ 60.808.509/0001-97 ("mancan.digital", "we", "us") and forms part of our <a href="terms.html">Terms of Service</a>.',
                'rf-h1': '1. 14-day money-back guarantee',
                'rf-p1': 'We offer a <strong>14-day money-back guarantee</strong> on our software products. If you are not satisfied, you may request a full refund within 14 days of your purchase date — no questions asked. This is in addition to any statutory right of withdrawal you may have under the Brazilian Consumer Defense Code (CDC).',
                'rf-h2': '2. How to request a refund',
                'rf-p2': 'Email <a href="mailto:info@mancan.digital">info@mancan.digital</a> from the address used at purchase, including your order number or proof of purchase. We aim to respond within 2 business days.',
                'rf-h3': '3. How refunds are issued',
                'rf-p3': 'Approved refunds are returned to the original payment method through our payment provider. The time for the funds to appear depends on your provider, typically within 5–10 business days.',
                'rf-h4': '4. Consulting services',
                'rf-p4': 'Consulting engagements are custom work and are governed by the refund and cancellation terms set out in the applicable proposal or statement of work. Where none is specified, fees for work already performed are non-refundable, and any prepaid, unused amounts will be refunded on request.',
                'rf-h5': '5. Exceptions',
                'rf-p5': 'We may decline a refund where there is evidence of fraud, abuse of this policy (for example, repeated buy-and-refund behavior), or a violation of our <a href="terms.html">Terms of Service</a>. Mandatory consumer rights under Brazilian law are not affected by this section.',
                'rf-h6': '6. Contact',
                'rf-p6': 'Questions about refunds: <a href="mailto:info@mancan.digital">info@mancan.digital</a>.'
            },
            pt: {
                'nav-about': 'Sobre',
                'nav-services': 'Serviços',
                'nav-products': 'Produtos',
                'nav-capabilities': 'Capacidades',
                'nav-process': 'Processo',
                'nav-why': 'Diferenciais',
                'nav-contact': 'Contato',
                'products-tag': 'Produtos',
                'products-title': 'Produtos que criamos e lançamos por conta própria.',
                'products-desc': 'Ferramentas nascidas do nosso próprio trabalho, refinadas em produtos que você pode usar hoje.',
                'prod-soundlock-kicker': 'macOS · App da barra de menus',
                'prod-soundlock-title': 'SoundLock',
                'prod-soundlock-tagline': 'Seu áudio. Suas regras. Sempre.',
                'prod-soundlock-desc': 'Um app de barra de menus para macOS que trava a prioridade dos dispositivos de áudio, garantindo a saída e a entrada corretas sempre.',
                'prod-soundlock-feat-1': 'Listas de prioridade ordenáveis por arrastar e soltar',
                'prod-soundlock-feat-2': 'Persistência offline entre reinicializações',
                'prod-soundlock-feat-3': 'Controle de volume e mudo pela barra de menus',
                'prod-soundlock-feat-4': 'Botão de trava para bloquear ou liberar a qualquer momento',
                'prod-soundlock-feat-5': 'Inicia no login sem ocupar o Dock',
                'prod-soundlock-feat-6': 'Orientado a eventos do CoreAudio: ~20MB de RAM, 0% de CPU em repouso',
                'prod-soundlock-feat-7': 'Foco em privacidade: sem rede, sem permissão de microfone, apenas armazenamento local',
                'prod-soundlock-use-1': 'Setups de áudio profissional',
                'prod-soundlock-use-2': 'Vários dispositivos Bluetooth',
                'prod-soundlock-use-3': 'Estabilidade de microfone em videochamadas',
                'prod-soundlock-fit': 'Indicado para: quem se cansou do macOS trocando dispositivos de áudio sozinho',
                'prod-soundlock-cta': 'Ver no GitHub',
                'prod-soundlock-details': 'Ver detalhes',
                'nav-home': 'Início',
                'sl-back': '← mancan.digital',
                'sl-hero-eyebrow': 'Produto · App da barra de menus do macOS',
                'sl-download': 'Baixar SoundLock',
                'sl-download-note': 'Grátis · macOS 13+',
                'sl-overview-label': 'Visão geral',
                'sl-overview-1': 'O macOS reatribui o dispositivo de áudio padrão sozinho — conecte um monitor, ligue os AirPods, entre numa chamada e de repente o alto-falante ou microfone errado está ativo. O SoundLock acaba com isso.',
                'sl-overview-2': 'Você ordena seus dispositivos de saída e entrada uma vez. O SoundLock escuta os eventos do CoreAudio e restaura instantaneamente o dispositivo preferido disponível sempre que o macOS tenta trocar. Orientado a eventos, sem polling, ~20MB de RAM e 0% de CPU em repouso.',
                'sl-shots-label': 'Capturas de tela',
                'sl-shot-caption': 'Popover da barra de menus: dispositivos ordenados, volume, mudo e botão de trava.',
                'sl-features-label': 'Recursos',
                'sl-usecases-label': 'Casos de uso',
                'sl-privacy-label': 'Privacidade',
                'sl-privacy-desc': 'O SoundLock não lê nenhum byte de áudio, nunca pede permissão de microfone, não tem código de rede e guarda as preferências localmente via UserDefaults. Sem telemetria, sem analytics.',
                'sl-install-label': 'Instalação',
                'sl-install-1-title': '1. Baixar e descompactar',
                'sl-install-1-desc': 'Baixe o SoundLock.app.zip, descompacte e arraste o SoundLock.app para a pasta Aplicativos.',
                'sl-install-2-title': '2. Primeira execução (Gatekeeper)',
                'sl-install-2-desc': 'O app não é assinado. No macOS 14 ou anterior, clique com o botão direito e escolha Abrir duas vezes; no macOS 15 Sequoia, abra Ajustes do Sistema → Privacidade e Segurança → Abrir Mesmo Assim. Ou remova a flag de quarentena pelo Terminal:',
                'sl-more-label': 'Grátis e pronto',
                'sl-more-desc': 'O SoundLock é gratuito para baixar e usar — sem conta, sem rastreamento, sem código de rede. É um app de código fechado mantido pela mancan.digital.',
                'sl-cta-github': 'Ver no GitHub',
                'sl-cta-coffee': 'Pague um café',
                'sl-meta-title': 'SoundLock — Trave a prioridade do áudio no macOS',
                'prod-cenna-kicker': 'macOS · Captura e gravação',
                'prod-cenna-title': 'Cenna',
                'prod-cenna-tagline': 'Velocidade nativa. Sem limites nativos.',
                'prod-cenna-desc': 'Um app leve de barra de menus para macOS para capturas de tela e gravação — captura nativa, personalização real e disciplina de memória que falta na maioria das ferramentas.',
                'prod-cenna-feat-1': 'Captura de tela cheia e de área interativa',
                'prod-cenna-feat-2': 'Editor de anotações embutido: setas, formas, desenho livre',
                'prod-cenna-feat-3': 'Após a captura: editor, prévia rápida, copiar ou salvar',
                'prod-cenna-feat-4': 'Gravação MP4 com áudio do sistema, microfone e webcam sobreposta',
                'prod-cenna-feat-5': 'Editor de timeline: dividir, cortar e acelerar segmentos',
                'prod-cenna-feat-6': 'Caminhos diretos estáveis em ~15MB de RAM, editor ~38MB',
                'prod-cenna-feat-7': 'Atalhos globais, início no login, pasta de destino configurável',
                'prod-cenna-use-1': 'Demos e tours de produto',
                'prod-cenna-use-2': 'Suporte e relatórios de bug',
                'prod-cenna-use-3': 'Documentação e updates assíncronos',
                'prod-cenna-fit': 'Indicado para: times que querem a sensação nativa do macOS sem ferramentas de captura inchadas',
                'prod-cenna-details': 'Ver detalhes',
                'prod-cenna-cta': 'Acesso antecipado',
                'cn-back': '← mancan.digital',
                'cn-hero-eyebrow': 'Produto · Captura e gravação no macOS',
                'cn-download-note': 'Beta grátis · macOS 13+ · em breve',
                'cn-cta-access': 'Acesso antecipado',
                'cn-cta-email': 'Fale conosco',
                'cn-overview-label': 'Visão geral',
                'cn-overview-1': 'A maioria das ferramentas de captura promete "captura simples" e mantém um pipeline pesado ativo em segundo plano, decodifica imagens enormes no processo e transforma capturas comuns em um evento de memória. O Cenna faz o oposto.',
                'cn-overview-2': 'Ele usa os caminhos de captura nativos do macOS e mantém os dados de tela em resolução total fora do fluxo de UI de longa duração, então é rápido e realista de manter rodando o dia todo. Nativo onde importa, personalizável onde importa, eficiente em todo lugar.',
                'cn-shots-label': 'Capturas de tela',
                'cn-shot-caption': 'Captura, gravação e comportamento pós-captura configuráveis em um único app da barra de menus.',
                'cn-features-label': 'Recursos',
                'cn-memory-label': 'Disciplina de memória',
                'cn-memory-desc': 'Os caminhos diretos de captura ficam estáveis em ~15MB durante toda uma sequência. O editor estabiliza em ~38MB, não importa quantas capturas passem por ele. Onde muitas ferramentas open-source ficam na casa das centenas de MB — e podem passar de 1GB — o Cenna permanece leve.',
                'cn-usecases-label': 'Casos de uso',
                'cn-recording-label': 'Vantagem na gravação',
                'cn-rec-1-title': 'Além do padrão da Apple',
                'cn-rec-1-desc': 'Grave MP4 em tela cheia com áudio do sistema, microfone e uma webcam sobreposta personalizável — vários tamanhos e formatos — para aparecer sobre o vídeo em vez de gravar tela e câmera separadamente.',
                'cn-rec-2-title': 'Qualidade que você controla',
                'cn-rec-2-desc': 'Escolha 30 ou 60 fps e 720p, 1080p, 1440p ou resolução nativa. Troque fidelidade por uso de memória bem menor quando fizer sentido.',
                'cn-rec-3-title': 'Edite antes de salvar',
                'cn-rec-3-desc': 'Divida a timeline no playhead, corte apagando (e restaurando) segmentos e acelere trechos lentos com presets de 1x–2x — por segmento ou todos de uma vez — com prévia fiel à exportação, então o que você vê é o que é gravado.',
                'cn-meta-title': 'Cenna — Capturas de tela e gravação leves para macOS',
                'hero-eyebrow': 'Consultoria de tecnologia',
                'hero-title-1': 'Automatize operações,',
                'hero-title-2': 'conecte sistemas e gere resultado.',
                'hero-desc': 'Consultoria de tecnologia que transforma IA e automação em resultados de negócio — para pequenas e médias equipes que querem controle real sobre seus dados.',
                'hero-pain': 'Fluxos manuais, ferramentas desconectadas, entrega lenta.',
                'hero-cta-primary': 'Agendar uma discovery call',
                'hero-cta-secondary': 'Explorar capacidades',
                'hero-chip-1': 'Consultoria + execução',
                'hero-chip-2': 'Atendimento bilíngue EN/PT',
                'hero-chip-3': 'Atendimento bilíngue EN/PT',
                'hero-node-1': 'IA',
                'hero-node-2': 'Automação',
                'hero-node-3': 'Apps sob medida',
                'hero-node-4': 'Consultoria',
                'board-kicker': 'Modelo de entrega conectado',
                'board-desc': 'Estratégia, automação, desenvolvimento e implementação de IA alinhados em uma única camada de execução.',
                'trust-1': 'Desde 2019',
                'trust-2': 'Base no Brasil, entrega global',
                'trust-3': 'IA + automação + software sob medida',
                'trust-4': 'Desenhado para eficiência operacional',
                'about-tag': 'Posicionamento',
                'about-title': 'Consultoria feita para equipes que precisam de clareza, velocidade e sistemas duráveis.',
                'about-desc-1': 'Combinamos consultoria estratégica e entrega prática para diagnosticar atritos, desenhar a solução certa e implementá-la.',
                'about-desc-2': 'Desenhamos e entregamos sistemas que aumentam throughput, visibilidade e capacidade de decisão.',
                'about-chip-1': 'Entrega parceira da estratégia à implementação',
                'about-chip-2': 'Arquitetura sob medida para cada projeto',
                'about-chip-3': 'Sistemas práticos em vez de discurso genérico de transformação',
                'about-stat-1-label': 'Foco',
                'about-stat-1-value': 'Eficiência operacional',
                'about-stat-2-label': 'Modelo de entrega',
                'about-stat-2-value': 'Consultoria + build',
                'capabilities-tag': 'Capacidades',
                'capabilities-title': 'Uma matriz de capacidades que cobre consultoria, automação e entrega.',
                'capabilities-desc': 'Três áreas principais: estratégia, automação e entrega de software sob medida.',
                'cap-1-kicker': 'Cluster 01',
                'cap-1-title': 'Consultoria e Estratégia',
                'cap-1-desc': 'Defina os sistemas certos, as prioridades e o caminho de execução.',
                'cap-1-item-1': 'Planejamento de transformação digital',
                'cap-1-item-2': 'Avaliação de sistemas',
                'cap-1-item-3': 'Arquitetura de solução',
                'cap-1-item-4': 'Desenho de roadmap tecnológico',
                'cap-1-fit': 'Ideal para: equipes alinhando operação e tecnologia',
                'cap-2-kicker': 'Cluster 02',
                'cap-2-title': 'Automação e IA',
                'cap-2-desc': 'Reduza atrito operacional com automação prática e IA.',
                'cap-2-item-1': 'RPA e automação de workflow',
                'cap-2-item-2': 'Integração com IA',
                'cap-2-item-3': 'Otimização de processos',
                'cap-2-item-4': 'Sistemas de apoio à decisão',
                'cap-2-fit': 'Ideal para: equipes reduzindo trabalho manual e latência operacional',
                'cap-3-kicker': 'Cluster 03',
                'cap-3-title': 'Entrega de Software',
                'cap-3-desc': 'Construa sistemas sob medida para fluxos reais.',
                'cap-3-item-1': 'Aplicações web full-stack',
                'cap-3-item-2': 'Ferramentas desktop e internas',
                'cap-3-item-3': 'Plataformas cloud-native',
                'cap-3-item-4': 'Integrações entre sistemas',
                'cap-3-fit': 'Ideal para: equipes que precisam de software sob medida e sistemas conectados',
                'engagement-label': 'Formatos de atuação',
                'engagement-1': 'Consultoria',
                'engagement-2': 'Entrega de projeto',
                'engagement-3': 'Parceria contínua',
                'outcomes-tag': 'Resultados',
                'outcomes-title': 'Os resultados aparecem quando execução e consultoria permanecem conectadas.',
                'outcomes-desc': 'O objetivo é simples: operações mais rápidas, decisões melhores e uma base que escala.',
                'outcome-1-kicker': 'Resultado 01',
                'outcome-1-title': 'Operações mais rápidas',
                'outcome-1-desc': 'Reduza handoffs, tarefas manuais repetidas e atrasos evitáveis nos fluxos centrais.',
                'outcome-2-kicker': 'Resultado 02',
                'outcome-2-title': 'Decisões melhores',
                'outcome-2-desc': 'Aumente visibilidade, coerência entre sistemas e confiança nas decisões operacionais do dia a dia.',
                'outcome-3-kicker': 'Resultado 03',
                'outcome-3-title': 'Fundação digital escalável',
                'outcome-3-desc': 'Construa sistemas capazes de sustentar crescimento sem virar o próximo gargalo.',
                'process-tag': 'Como Trabalhamos',
                'process-title': 'Um modelo simples de atuação que vai do diagnóstico à implementação.',
                'process-desc': 'Um caminho claro do diagnóstico ao sistema funcionando.',
                'process-1-kicker': 'Avaliar',
                'process-1-title': 'Avaliar',
                'process-1-desc': 'Auditamos fluxos, sistemas, gargalos e prioridades de negócio para definir as restrições reais.',
                'process-2-kicker': 'Desenhar',
                'process-2-title': 'Desenhar',
                'process-2-desc': 'Definimos arquitetura, metas de automação, caminhos de integração e o escopo de implementação.',
                'process-3-kicker': 'Implementar',
                'process-3-title': 'Implementar',
                'process-3-desc': 'Entregamos software, automações, integrações e melhorias iterativas que funcionam na operação real.',
                'why-tag': 'Por Que Escolhem',
                'why-title': 'Um modelo de consultoria pensado para compradores que precisam de resultado funcional, não apenas apresentação.',
                'why-desc': 'Contexto de negócio, profundidade técnica e execução no mesmo projeto.',
                'why-1-title': 'Consultoria orientada ao negócio',
                'why-1-desc': 'As recomendações partem das restrições operacionais, prioridades do negócio e realidade de entrega.',
                'why-2-title': 'Entrega sob medida',
                'why-2-desc': 'As soluções são moldadas aos seus fluxos, stack e maturidade do time, e não a templates genéricos.',
                'why-3-title': 'Parceria de longo prazo',
                'why-3-desc': 'Mantemos foco em continuidade, manutenção e evolução depois do lançamento inicial.',
                'why-4-title': 'Execução pronta para o mercado global',
                'why-4-desc': 'Entrega baseada no Brasil com comunicação bilíngue e padrão de execução preparado para clientes internacionais.',
                'contact-tag': 'Inicie uma Conversa',
                'contact-title': 'Traga o problema e o prazo desejado.',
                'contact-desc': 'Podemos estruturar consultoria, entrega ou um modelo híbrido conforme o seu estágio atual.',
                'contact-note': 'Conte seu desafio, stack e prazo desejado.',
                'contact-response': 'Primeira resposta em até 1 dia útil, em média.',
                'contact-card-label': 'Contato principal',
                'contact-location': 'Base no Brasil, atendimento global.',
                'contact-cta-primary': 'Enviar e-mail',
                'contact-cta-secondary': 'Agendar uma discovery call',
                'footer-email': 'info@mancan.digital',
                'footer-top': 'Voltar ao topo',
                'nav-book': 'Agendar conversa',
                'hero-badge': 'modelo de entrega em rede',
                'hero-line-1': 'Automatize operações.',
                'hero-line-2': 'Conecte sistemas.',
                'hero-line-3': 'Entregue software sob medida.',
                'hero-stat-1': 'desde 2019',
                'hero-stat-2': 'entrega global',
                'hero-stat-3': 'bilíngue EN/PT',
                'hero-live': '● ao vivo',
                'node-data': 'dados',
                'node-bots': 'bots',
                'node-models': 'modelos',
                'node-connect': 'conectar',
                'hero-metric-1': 'throughput ↑ 3,2×',
                'hero-metric-2': 'passos manuais ↓ 78%',
                'footer-copy': '© 2026 mancan.digital — sede no brasil, disponível no mundo todo.',
                'nav-pricing': 'Preços',
                'foot-pricing': 'Preços',
                'foot-terms': 'Termos',
                'foot-privacy': 'Privacidade',
                'foot-refunds': 'Reembolsos',
                'legal-tag': 'Jurídico',
                'pr-tag': 'Preços',
                'pr-title': 'Preços simples e transparentes.',
                'pr-intro': 'O preço dos produtos depende do produto e do nível de licença. A consultoria é orçada por projeto. Todos os preços estão em dólares americanos (USD), salvo indicação em contrário; impostos aplicáveis podem ser adicionados no checkout.',
                'pr-products-h': 'Produtos',
                'pr-cenna-tag': 'macOS · Captura &amp; gravação',
                'pr-cenna-price': 'Preço em breve',
                'pr-cenna-desc': 'App leve na barra de menus do macOS para capturas de tela e gravação de tela. Compra única, uso vitalício da versão principal adquirida.',
                'pr-soundlock-tag': 'macOS · Áudio',
                'pr-soundlock-desc': 'Grátis para baixar e usar. macOS 13+.',
                'pr-onetime': 'compra única',
                'pr-view': 'Ver detalhes',
                'pr-consult-h': 'Consultoria',
                'pr-consult-tag': 'Consultoria · Entrega · Híbrido',
                'pr-consult-title': 'Projetos sob medida',
                'pr-consult-sub': 'Orçado por projeto',
                'pr-consult-desc': 'A consultoria em tecnologia é precificada pelo escopo e prazo do projeto — escopo fechado, retainer ou híbrido. Traga o problema e o prazo para um orçamento.',
                'pr-quote': 'Solicitar orçamento',
                'tos-title': 'Termos de Serviço',
                'legal-updated': 'Última atualização: 8 de julho de 2026',
                'tos-intro': 'Estes Termos de Serviço ("Termos") regem seu acesso e uso dos sites, produtos de software e serviços de consultoria (em conjunto, os "Serviços") fornecidos pela <strong>MANCAN DIGITAL ANALISE E DESENVOLVIMENTO LTDA</strong>, CNPJ 60.808.509/0001-97, sociedade constituída sob as leis do Brasil ("mancan.digital", "nós"). Ao comprar, baixar ou usar os Serviços, você concorda com estes Termos.',
                'tos-h1': '1. Elegibilidade',
                'tos-p1': 'Você deve ter pelo menos 18 anos e capacidade de celebrar um contrato vinculante para usar os Serviços. Se você usar os Serviços em nome de uma organização, declara estar autorizado a vinculá-la.',
                'tos-h2': '2. Produtos e licenças',
                'tos-p2': 'Nossos produtos de software (como Cenna e SoundLock) são licenciados, não vendidos. Alguns são gratuitos e outros pagos; sujeito a eventuais taxas aplicáveis e a estes Termos, concedemos a você uma licença não exclusiva e intransferível para instalar e usar o produto para uso próprio. Você não pode revender, redistribuir, sublicenciar, fazer engenharia reversa ou remover avisos de propriedade do software, exceto quando tal restrição for proibida por lei.',
                'tos-h3': '3. Serviços de consultoria',
                'tos-p3': 'Os projetos de consultoria são regidos por estes Termos em conjunto com o escopo, as entregas e os honorários específicos acordados por escrito para cada projeto. Havendo conflito entre uma proposta ou contrato assinado e estes Termos, o documento assinado prevalece para aquele projeto.',
                'tos-h4': '4. Pedidos e pagamento',
                'tos-p4': 'Os preços são exibidos em nossa <a href="pricing.html">página de Preços</a> e no checkout. Os pagamentos são processados por provedores de pagamento terceiros; ao pagar, você também concorda com os termos deles. Você é responsável por quaisquer impostos aplicáveis não recolhidos por nós. Podemos alterar os preços a qualquer momento, mas as alterações não afetam pedidos já realizados.',
                'tos-h5': '5. Reembolsos',
                'tos-p5': 'Os reembolsos são tratados conforme nossa <a href="refunds.html">Política de Reembolso</a>, que faz parte destes Termos.',
                'tos-h6': '6. Uso aceitável',
                'tos-p6': 'Você concorda em não usar os Serviços para violar qualquer lei, infringir direitos de terceiros, distribuir malware ou interferir na operação ou segurança dos Serviços. Podemos suspender ou encerrar o acesso em caso de violações.',
                'tos-h7': '7. Propriedade intelectual',
                'tos-p7': 'Todos os direitos, título e interesse sobre os Serviços, incluindo software, marca e conteúdo, permanecem com a mancan.digital ou seus licenciadores. Nenhum direito é concedido além do expressamente previsto nestes Termos.',
                'tos-h8': '8. Garantias e isenções',
                'tos-p8': 'Os Serviços são fornecidos "no estado em que se encontram" e "conforme disponíveis", sem garantias de qualquer tipo, expressas ou implícitas, na máxima extensão permitida por lei. Não garantimos que os Serviços serão ininterruptos, livres de erros ou adequados a um fim específico. Direitos do consumidor previstos em lei que não possam ser excluídos não são afetados.',
                'tos-h9': '9. Limitação de responsabilidade',
                'tos-p9': 'Na máxima extensão permitida por lei, a mancan.digital não será responsável por danos indiretos, incidentais, especiais ou consequenciais, nem por perda de dados, lucros ou receita. Nossa responsabilidade total por qualquer reclamação relacionada aos Serviços limita-se ao valor pago por você pelo Serviço que deu origem à reclamação nos 12 meses anteriores.',
                'tos-h10': '10. Rescisão',
                'tos-p10': 'Você pode parar de usar os Serviços a qualquer momento. Podemos suspender ou encerrar seu acesso caso você viole estes Termos. As cláusulas que, por sua natureza, devam sobreviver à rescisão permanecerão em vigor.',
                'tos-h11': '11. Alterações destes Termos',
                'tos-p11': 'Podemos atualizar estes Termos periodicamente. A data de "Última atualização" reflete a versão mais recente. O uso contínuo dos Serviços após as alterações entrarem em vigor constitui aceitação.',
                'tos-h12': '12. Lei aplicável e foro',
                'tos-p12': 'Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro do domicílio da mancan.digital, sem prejuízo das normas cogentes de proteção ao consumidor previstas no Código de Defesa do Consumidor (CDC).',
                'tos-h13': '13. Contato',
                'tos-p13': 'Dúvidas sobre estes Termos: <a href="mailto:info@mancan.digital">info@mancan.digital</a>.',
                'pp-title': 'Política de Privacidade',
                'pp-intro': 'Esta Política de Privacidade explica como a <strong>MANCAN DIGITAL ANALISE E DESENVOLVIMENTO LTDA</strong>, CNPJ 60.808.509/0001-97 ("mancan.digital", "nós"), coleta, usa e protege dados pessoais quando você visita nosso site, compra ou usa nossos produtos e serviços. Atuamos como controladores de dados e tratamos dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).',
                'pp-h1': '1. Dados que coletamos',
                'pp-l1a': '<strong>Dados de contato e conta</strong> — nome, e-mail e demais informações que você fornece ao entrar em contato ou comprar.',
                'pp-l1b': '<strong>Dados de transação</strong> — produtos comprados, valores e informações de cobrança. Os dados do cartão são tratados diretamente pelos provedores de pagamento; não armazenamos o número completo do cartão.',
                'pp-l1c': '<strong>Dados de uso e dispositivo</strong> — endereço IP, tipo de navegador e páginas visualizadas, coletados por registros web padrão e analytics.',
                'pp-l1d': '<strong>Dados de suporte</strong> — informações que você compartilha ao solicitar suporte.',
                'pp-h2': '2. Como usamos os dados',
                'pp-l2a': 'Para fornecer, licenciar e dar suporte aos nossos produtos e serviços.',
                'pp-l2b': 'Para processar pagamentos, reembolsos e faturamento.',
                'pp-l2c': 'Para responder a solicitações e prestar atendimento ao cliente.',
                'pp-l2d': 'Para operar, proteger e melhorar nosso site e produtos.',
                'pp-l2e': 'Para cumprir obrigações legais, fiscais e contábeis.',
                'pp-h3': '3. Bases legais (LGPD)',
                'pp-p3': 'Tratamos dados pessoais com base em: execução de contrato com você; cumprimento de obrigações legais; nossos legítimos interesses (como segurança e melhoria dos Serviços); e seu consentimento, quando exigido.',
                'pp-h4': '4. Compartilhamento de dados',
                'pp-p4': 'Compartilhamos dados pessoais apenas com prestadores de serviço que nos ajudam a operar — incluindo processadores de pagamento, provedores de hospedagem e analytics — e com autoridades quando exigido por lei. Esses prestadores tratam os dados em nosso nome sob salvaguardas adequadas. Não vendemos seus dados pessoais.',
                'pp-h5': '5. Transferências internacionais',
                'pp-p5': 'Alguns prestadores podem tratar dados fora do Brasil. Quando isso ocorre, utilizamos mecanismos de transferência legais permitidos pela LGPD para proteger seus dados.',
                'pp-h6': '6. Retenção',
                'pp-p6': 'Mantemos dados pessoais apenas pelo tempo necessário para as finalidades acima, incluindo o cumprimento de requisitos legais, fiscais e contábeis, após o que são excluídos ou anonimizados.',
                'pp-h7': '7. Seus direitos',
                'pp-p7': 'Sob a LGPD, você pode solicitar confirmação do tratamento, acesso, correção, anonimização, portabilidade, exclusão e informações sobre compartilhamento de dados, além de revogar o consentimento. Para exercer esses direitos, contate <a href="mailto:info@mancan.digital">info@mancan.digital</a>.',
                'pp-h8': '8. Cookies',
                'pp-p8': 'Nosso site pode usar cookies e tecnologias semelhantes para funcionalidade e analytics. Você pode controlar os cookies nas configurações do navegador; desativá-los pode afetar alguns recursos.',
                'pp-h9': '9. Segurança',
                'pp-p9': 'Adotamos medidas técnicas e organizacionais razoáveis para proteger dados pessoais contra acesso não autorizado, perda ou uso indevido. Nenhum método de transmissão ou armazenamento é completamente seguro.',
                'pp-h10': '10. Crianças',
                'pp-p10': 'Nossos Serviços não são direcionados a menores de 18 anos, e não coletamos conscientemente seus dados pessoais.',
                'pp-h11': '11. Alterações',
                'pp-p11': 'Podemos atualizar esta Política periodicamente. A data de "Última atualização" reflete a versão mais recente.',
                'pp-h12': '12. Contato',
                'pp-p12': 'Controlador de dados: MANCAN DIGITAL ANALISE E DESENVOLVIMENTO LTDA, CNPJ 60.808.509/0001-97. Dúvidas sobre privacidade: <a href="mailto:info@mancan.digital">info@mancan.digital</a>.',
                'rf-title': 'Política de Reembolso',
                'rf-intro': 'Esta Política de Reembolso se aplica às compras feitas junto à <strong>MANCAN DIGITAL ANALISE E DESENVOLVIMENTO LTDA</strong>, CNPJ 60.808.509/0001-97 ("mancan.digital", "nós") e faz parte dos nossos <a href="terms.html">Termos de Serviço</a>.',
                'rf-h1': '1. Garantia de reembolso em 14 dias',
                'rf-p1': 'Oferecemos uma <strong>garantia de reembolso em 14 dias</strong> em nossos produtos de software. Se não ficar satisfeito, você pode solicitar reembolso integral em até 14 dias da data da compra — sem perguntas. Isso é adicional a qualquer direito de arrependimento previsto no Código de Defesa do Consumidor (CDC).',
                'rf-h2': '2. Como solicitar um reembolso',
                'rf-p2': 'Envie um e-mail para <a href="mailto:info@mancan.digital">info@mancan.digital</a> a partir do endereço usado na compra, incluindo seu número de pedido ou comprovante de compra. Buscamos responder em até 2 dias úteis.',
                'rf-h3': '3. Como os reembolsos são feitos',
                'rf-p3': 'Reembolsos aprovados são devolvidos ao meio de pagamento original por meio do nosso provedor de pagamento. O prazo para os valores aparecerem depende do seu provedor, normalmente em 5 a 10 dias úteis.',
                'rf-h4': '4. Serviços de consultoria',
                'rf-p4': 'Projetos de consultoria são trabalhos sob medida e regidos pelos termos de reembolso e cancelamento definidos na proposta ou contrato aplicável. Quando nada for especificado, os honorários por trabalho já realizado não são reembolsáveis, e quaisquer valores pré-pagos não utilizados serão reembolsados mediante solicitação.',
                'rf-h5': '5. Exceções',
                'rf-p5': 'Podemos recusar um reembolso quando houver evidência de fraude, abuso desta política (por exemplo, comportamento repetido de comprar e pedir reembolso) ou violação dos nossos <a href="terms.html">Termos de Serviço</a>. Os direitos do consumidor previstos na legislação brasileira não são afetados por esta cláusula.',
                'rf-h6': '6. Contato',
                'rf-p6': 'Dúvidas sobre reembolsos: <a href="mailto:info@mancan.digital">info@mancan.digital</a>.'
            }
        };

        let currentLang = 'pt';

        function switchLang(lang) {
            currentLang = lang;
            const content = translations[lang];

            Object.keys(content).forEach((key) => {
                document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
                    el.innerHTML = content[key];
                });
            });

            document.querySelectorAll('.lang-btn').forEach((btn) => {
                const isActive = btn.getAttribute('data-lang') === lang;
                btn.classList.toggle('active', isActive);
            });

            document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
            try { localStorage.setItem('lang', lang); } catch (e) {}
        }

        function initMobileNav() {
            const hamburger = document.getElementById('hamburger');
            const mobileNav = document.getElementById('mobile-nav');
            const mobileOverlay = document.getElementById('mobile-overlay');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            if (!hamburger || !mobileNav || !mobileOverlay) return;

            function toggleNav() {
                hamburger.classList.toggle('open');
                mobileNav.classList.toggle('open');
                mobileOverlay.classList.toggle('open');
                document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
            }

            function closeNav() {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
                mobileOverlay.classList.remove('open');
                document.body.style.overflow = '';
            }

            hamburger.addEventListener('click', toggleNav);
            mobileOverlay.addEventListener('click', closeNav);
            mobileLinks.forEach((link) => link.addEventListener('click', closeNav));
        }

        function initScrollAnimations() {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                },
                { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
            );

            document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
        }

        function initSmoothScroll() {
            document.querySelectorAll('a[href^="#"], [data-scroll-to]').forEach((link) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = link.getAttribute('data-scroll-to') || link.getAttribute('href').substring(1);
                    const section = document.getElementById(target);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            document.querySelectorAll('.scroll-top').forEach((el) => {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
        }

        function initActiveNav() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link[data-scroll-to]');

            window.addEventListener(
                'scroll',
                () => {
                    let current = '';

                    sections.forEach((section) => {
                        const sectionTop = section.offsetTop - 110;
                        if (window.scrollY >= sectionTop) {
                            current = section.getAttribute('id');
                        }
                    });

                    // Sub-sections of the Services block keep the Services link lit
                    if (['services', 'process', 'why-us'].includes(current)) current = 'services';

                    navLinks.forEach((link) => {
                        link.classList.toggle('active', link.getAttribute('data-scroll-to') === current);
                    });
                },
                { passive: true }
            );
        }

        function showToast(message) {
            let toast = document.getElementById('copy-toast');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'copy-toast';
                toast.className =
                    'fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] px-4 py-2.5 rounded-lg ' +
                    'bg-slate-900 text-white text-sm shadow-lg opacity-0 transition-opacity duration-200 pointer-events-none';
                document.body.appendChild(toast);
            }
            toast.textContent = message;
            requestAnimationFrame(() => toast.classList.replace('opacity-0', 'opacity-100'));
            clearTimeout(toast._timer);
            toast._timer = setTimeout(() => toast.classList.replace('opacity-100', 'opacity-0'), 2200);
        }

        function initEmailCopy() {
            document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
                link.addEventListener('click', () => {
                    const email = link.getAttribute('href').replace('mailto:', '').split('?')[0];
                    // Copy regardless of mail-client presence — many desktops have no mailto handler.
                    if (navigator.clipboard) {
                        navigator.clipboard
                            .writeText(email)
                            .then(() => showToast((currentLang === 'pt' ? 'E-mail copiado: ' : 'Email copied: ') + email))
                            .catch(() => {});
                    }
                });
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            let savedLang = 'pt';
            try { savedLang = localStorage.getItem('lang') || 'pt'; } catch (e) {}
            switchLang(savedLang);
            initMobileNav();
            initScrollAnimations();
            initSmoothScroll();
            initActiveNav();
            initEmailCopy();
        });
