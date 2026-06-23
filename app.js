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
                'sl-download-note': 'Free · MIT license · macOS 13+',
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
                'sl-install-2-desc': 'The app is unsigned. Right-click it and choose Open twice, or clear the quarantine flag from Terminal:',
                'sl-build-label': 'Build from source',
                'sl-build-desc': 'Requires macOS 13+ and Xcode Command Line Tools. Clone the repo and run:',
                'sl-cta-github': 'Source on GitHub',
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
                'footer-copy': '© 2026 mancan.digital — brazil-based, available worldwide.'
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
                'sl-download-note': 'Grátis · Licença MIT · macOS 13+',
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
                'sl-install-2-desc': 'O app não é assinado. Clique com o botão direito e escolha Abrir duas vezes, ou remova a flag de quarentena pelo Terminal:',
                'sl-build-label': 'Compilar do código-fonte',
                'sl-build-desc': 'Requer macOS 13+ e as Xcode Command Line Tools. Clone o repositório e execute:',
                'sl-cta-github': 'Código no GitHub',
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
                'footer-copy': '© 2026 mancan.digital — sede no brasil, disponível no mundo todo.'
            }
        };

        let currentLang = 'pt';

        function switchLang(lang) {
            currentLang = lang;
            const content = translations[lang];

            Object.keys(content).forEach((key) => {
                document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
                    el.textContent = content[key];
                });
            });

            document.querySelectorAll('.lang-btn').forEach((btn) => {
                const isActive = btn.getAttribute('data-lang') === lang;
                btn.classList.toggle('active', isActive);
            });

            document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
        }

        function initMobileNav() {
            const hamburger = document.getElementById('hamburger');
            const mobileNav = document.getElementById('mobile-nav');
            const mobileOverlay = document.getElementById('mobile-overlay');
            const mobileLinks = document.querySelectorAll('.mobile-link');

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
            switchLang('pt');
            initMobileNav();
            initScrollAnimations();
            initSmoothScroll();
            initActiveNav();
            initEmailCopy();
        });
