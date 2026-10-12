import { TeamMember, ServiceItem, SupportedLanguage } from '../types';
import samadPhoto from '../assets/images/team_samad_chaudhry_1791811016532.jpg';
import annalisaPhoto from '../assets/images/team_annalisa_rottola_1791811028229.jpg';
import giovanniPhoto from '../assets/images/team_giovanni_rossetti_1791811039620.jpg';
import elisaPhoto from '../assets/images/team_elisa_bova_1791811050090.jpg';
import ahlamPhoto from '../assets/images/team_ahlam_moutaabbid_1791811061734.jpg';

export const CONTACT_INFO = {
  phone: '+39 353 213 6704',
  phoneClean: '+393532136704',
  whatsappUrl: 'https://wa.me/393532136704',
  email: 'samad@italiaimmigrazione.it',
  address: 'Via Andrea Maria Ampère 126, 20131 Milano, Italia',
  city: 'Milano',
  postalCode: '20131',
  country: 'Italia',
  zone: 'Città Studi / Piola - Lambrate',
  metroLines: 'Metro M2 (Verde) fermate Piola o Lambrate FS',
  hours: 'Su appuntamento: Lunedì – Sabato dalle 09:30 alle 18:30',
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'samad-chaudhry',
    name: 'Samad Chaudhry',
    role: 'Consulente di immigrazione',
    experienceYears: 11,
    experienceLabel: '11 anni di esperienza dichiarata',
    languages: ['Italiano', 'English', 'اردو (Urdu)', 'Hindi', 'Punjabi'],
    bio: 'Consulente esperto con oltre un decennio dedicato all\'orientamento di cittadini stranieri, famiglie e lavoratori nelle complesse dinamiche burocratiche italiane. Coordina l\'ufficio di Milano e le relazioni multilingue con le comunità internazionali.',
    specialties: ['Permessi di soggiorno & conversioni', 'Visti per lavoro e studio', 'Cittadinanza italiana', 'Rapporti con Questura e Prefettura'],
    initials: 'SC',
    image: samadPhoto,
  },
  {
    id: 'annalisa-rottola',
    name: 'Annalisa Rottola',
    role: 'Avvocata specializzata in immigrazione',
    experienceYears: 22,
    experienceLabel: '22 anni di esperienza dichiarata (previa verifica della qualifica)',
    languages: ['Italiano', 'English', 'Français'],
    bio: 'Patrocinante con vasta esperienza nei diritti degli stranieri, ricorsi avverso dinieghi di nulla osta o visti d\'ingresso, e tutela legale nelle istanze di cittadinanza e protezione. La consulenza legale viene erogata nel pieno rispetto delle norme ordinistiche e deontologiche.',
    specialties: ['Diritto dell\'immigrazione', 'Ricorsi TAR e Tribunale Ordinario', 'Cittadinanza per diniego / ritardi', 'Nulla osta al lavoro & coesione'],
    isLegalCounsel: true,
    legalNote: 'Esercizio della consulenza legale e rappresentanza in giudizio previa verifica ordinistica.',
    initials: 'AR',
    image: annalisaPhoto,
  },
  {
    id: 'giovanni-rossetti',
    name: 'Giovanni Rossetti',
    role: 'Consulente per le procedure di immigrazione',
    experienceYears: 15,
    experienceLabel: '15 anni di esperienza dichiarata',
    languages: ['Italiano', 'English'],
    bio: 'Specialista nell\'analisi documentale preventiva e nella gestione delle procedure amministrative complesse per aziende, professionisti e nuclei familiari. Vanta una conoscenza approfondita delle prassi procedurali lombarde.',
    specialties: ['Ricongiungimenti familiari', 'Decreto Flussi & quote lavoro', 'Pratiche Sportello Unico Immigrazione', 'Permessi di lungo periodo UE'],
    initials: 'GR',
    image: giovanniPhoto,
  },
  {
    id: 'elisa-bova',
    name: 'Elisa Bova',
    role: 'Consulente di immigrazione & Digital Marketing Specialist',
    experienceLabel: 'Consulenza & Comunicazione Digitale',
    languages: ['Italiano', 'English', 'Español'],
    bio: 'Unisce la conoscenza delle procedure di accoglienza e regolarizzazione alla gestione della comunicazione digitale per rendere chiare e trasparenti le informazioni normative ai cittadini stranieri e agli expat.',
    specialties: ['Orientamento visti studio & nomad digitali', 'Comunicazione e trasparenza delle prassi', 'Customer care multicanale'],
    initials: 'EB',
    image: elisaPhoto,
  },
  {
    id: 'ahlam-moutaabbid',
    name: 'Ahlam Moutaabbid',
    role: 'Traduttrice e interprete multilingue',
    experienceLabel: 'Interprete e Mediatrice Linguistica',
    languages: ['Arabo', 'Arabo egiziano', 'Français', 'Darija marocchina', 'Italiano'],
    bio: 'Garantisce una comunicazione accurata e senza fraintendimenti per la clientela arabofona e francofona. Fondamentale per l\'adeguamento e la comprensione fedele di atti civili, certificati di nascita e documenti consolari.',
    specialties: ['Traduzione documentale arabo-italiano-francese', 'Interpretariato durante le consulenze', 'Mediazione culturale nei procedimenti'],
    initials: 'AM',
    image: ahlamPhoto,
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'visti-ingresso',
    code: '01',
    title: 'Visti d\'Ingresso',
    subtitle: 'Lavoro subordinato, autonomo, studio, investitori e visti speciali',
    description: 'Orientamento preventivo e preparazione del fascicolo documentale per richiedere il visto presso Ambasciate e Consolati italiani nel Paese d\'origine.',
    features: [
      'Analisi preventiva dei requisiti di reddito e alloggio',
      'Verifica conformità documentazione con le linee guida MAECI',
      'Predisposizione lettere di invito e contratti di soggiorno',
      'Supporto per visti studio, ricongiungimento e motivi d\'affari'
    ],
    requiredDocs: [
      'Passaporto in corso di validità (con validità residua minima)',
      'Documentazione comprovante la disponibilità economica e alloggio',
      'Nulla osta rilasciato dallo Sportello Unico (se previsto)',
      'Certificati anagrafici o accademici legalizzati e tradotti'
    ],
    targetAudience: 'Cittadini non UE che intendono fare ingresso legale sul territorio italiano.',
    iconName: 'Compass'
  },
  {
    id: 'permessi-soggiorno',
    code: '02',
    title: 'Permessi di Soggiorno',
    subtitle: 'Rilasci, rinnovi, duplicati e conversioni di titolo',
    description: 'Accompagnamento in tutte le fasi di richiesta e rinnovo del permesso di soggiorno, dall\'invio telematico del kit postale alla convocazione in Questura per il fotosegnalamento.',
    features: [
      'Compilazione corretta del modulo 1 e 2 del kit postale',
      'Conversioni da studio a lavoro subordinato o autonomo',
      'Permesso UE per soggiornanti di lungo periodo (ex carta di soggiorno)',
      'Monitoraggio dello stato di avanzamento pratica su Polizia di Stato / Poste'
    ],
    requiredDocs: [
      'Permesso di soggiorno attuale in scadenza o scaduto da meno di 60 gg',
      'Contratto di lavoro, modello UNILAV e ultime buste paga (o CUD/730)',
      'Certificato di residenza e idoneità alloggiativa',
      'Ricevuta postale di spedizione assicurata del kit'
    ],
    targetAudience: 'Stranieri già regolarmente soggiornanti in Italia che devono rinnovare o convertire il titolo.',
    iconName: 'FileCheck'
  },
  {
    id: 'ricongiungimento-familiare',
    code: '03',
    title: 'Ricongiungimento Familiare',
    subtitle: 'Nulla osta prefettizio e coesione familiare con cittadini UE o extra-UE',
    description: 'Assistenza per riunire la tua famiglia in Italia nel rispetto delle soglie di reddito minime e dei parametri di idoneità alloggiativa stabiliti dalla legge.',
    features: [
      'Calcolo preciso della capienza reddituale annua richiesta per ogni familiare',
      'Supporto per la perizia di idoneità alloggiativa comunale',
      'Invio telematico della richiesta Nulla Osta sul portale del Ministero dell\'Interno',
      'Accompagnamento al ritiro e rilascio del visto per i familiari'
    ],
    requiredDocs: [
      'Documenti di identità e permesso di soggiorno del richiedente',
      'Certificazione Unica (CU) o dichiarazione dei redditi sufficiente',
      'Contratto di locazione registrato e certificato igienico-sanitario/idoneità',
      'Atti di matrimonio o nascita attestanti il legame familiare, apostillati e tradotti'
    ],
    targetAudience: 'Lavoratori residenti in Italia che desiderano portare legalmente coniuge, figli minori o genitori.',
    iconName: 'Users'
  },
  {
    id: 'cittadinanza-italiana',
    code: '04',
    title: 'Cittadinanza Italiana',
    subtitle: 'Per residenza decennale, matrimonio, ius sanguinis o discendenza',
    description: 'Valutazione meticolosa dei dieci anni di residenza continuativa, dei redditi degli ultimi tre anni, dell\'attestato di lingua italiana B1 e della regolarità dei certificati penali esteri.',
    features: [
      'Audit preliminare di ammissibilità (redditi, residenza anagrafica continua)',
      'Guida al conseguimento della certificazione linguistica B1',
      'Invio dell\'istanza telematica su portale CIVES del Ministero dell\'Interno',
      'Monitoraggio delle 4 fasi del procedimento e diffide per superamento termini'
    ],
    requiredDocs: [
      'Estratto dell\'atto di nascita tradotto e legalizzato/apostillato dal Paese d\'origine',
      'Certificato penale generale del Paese d\'origine e di eventuali altri Paesi terzi',
      'Certificazione di conoscenza della lingua italiana (livello B1 QCER)',
      'Certificazioni dei redditi degli ultimi tre anni fiscali'
    ],
    targetAudience: 'Cittadini residenti in Italia da almeno 10 anni (o 4 anni per comunitari) o coniugati con cittadino italiano.',
    iconName: 'Award'
  },
  {
    id: 'decreto-flussi-lavoro',
    code: '05',
    title: 'Decreto Flussi & Procedure Aziendali',
    subtitle: 'Assunzione lavoratori stranieri, click day e quote annuali',
    description: 'Consulenza dedicata a datori di lavoro, aziende edili, della ristorazione e del settore sociosanitario per l\'assunzione di manodopera estera nell\'ambito delle quote stabilite dai decreti flussi.',
    features: [
      'Predisposizione delle precompilazioni telematiche prima dei Click Day',
      'Verifica preventiva di indisponibilità al Centro per l\'Impiego (CPI)',
      'Asseverazione dei requisiti economici da parte di professionisti abilitati',
      'Ritiro del Nulla Osta e firma del contratto di soggiorno allo Sportello Unico'
    ],
    requiredDocs: [
      'Visura camerale aziendale e bilancio / dichiarazione dei redditi d\'impresa',
      'Documento del legale rappresentante dell\'azienda o datore di lavoro privato',
      'Copia passaporto del lavoratore da assumere',
      'Dati contrattuali del CCNL applicato e mansione lavorativa'
    ],
    targetAudience: 'Imprese, cooperative, famiglie (badanti/colf) e datori di lavoro che intendono assumere personale estero.',
    iconName: 'Building2'
  },
  {
    id: 'assistenza-prefettura-questura',
    code: '06',
    title: 'Risoluzione Anomalie & Assistenza Pratiche',
    subtitle: 'Monitoraggio fascicoli, preavvisi di rigetto e solleciti motivati',
    description: 'Intervento tempestivo in caso di pratiche bloccate, richieste di integrazione documentale da parte della Prefettura o della Questura di Milano e comunicazioni ai sensi dell\'art. 10-bis L. 241/90.',
    features: [
      'Esame delle notifiche di preavviso di rigetto (Art. 10-bis)',
      'Redazione di memorie difensive e osservazioni scritte con professionisti legali',
      'Prenotazione e supporto accessi per appuntamenti straordinari',
      'Solleciti formali per pratiche oltre i termini di legge previsti'
    ],
    requiredDocs: [
      'Lettera o notifica ricevuta da Questura, Prefettura o Ministero',
      'Copia di tutta la documentazione precedentemente inoltrata',
      'Codice assicurata postale o numero identificativo della pratica',
      'Permesso di soggiorno o ricevuta in possesso'
    ],
    targetAudience: 'Cittadini e aziende con procedimenti amministrativi sospesi, contestati o bloccati.',
    iconName: 'ShieldAlert'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Primo Contatto & Analisi Preliminare',
    description: 'Ascoltiamo la tua situazione in sede a Milano o da remoto. Analizziamo i presupposti oggettivi della pratica verificando la fattibilità reale prima di qualsiasi spesa.',
    details: 'Valutazione dei tempi, delle probabilità di accoglimento e della normativa applicabile.'
  },
  {
    step: '02',
    title: 'Raccolta Documenti & Checklist Guidata',
    description: 'Ti forniamo una lista dettagliata e chiara di tutti i documenti necessari, coordinando eventuali traduzioni giurate, legalizzazioni consolari e attestati di idoneità alloggiativa.',
    details: 'Supporto linguistico in arabo, urdu, francese o inglese per i documenti rilasciati all\'estero.'
  },
  {
    step: '03',
    title: 'Presentazione Istanza & Consegna Formale',
    description: 'Predisponiamo e trasmettiamo l\'istanza telematica attraverso i canali ufficiali (Ministero dell\'Interno, Sportello Unico, Poste Italiane) senza errori formali.',
    details: 'Ricevuta ufficiale con data certa e codice identificativo per tracciare ogni passaggio.'
  },
  {
    step: '04',
    title: 'Monitoraggio Costante & Fino all\'Esito',
    description: 'Seguiamo l\'evoluzione del fascicolo fino al ritiro del documento. Rispondiamo con tempestività a eventuali richieste di integrazione delle autorità.',
    details: 'Assistenza continua e collaborazione legale abilitata per ogni necessità o imprevisto.'
  }
];

export const ETHICS_POINTS = [
  {
    title: 'Trasparenza Assoluta sui Requisiti',
    description: 'Non facciamo promesse illusorie né scorciatoie. Se una pratica non ha i requisiti di legge, lo diciamo subito in modo chiaro ed etico.'
  },
  {
    title: 'Collaborazione con Legali Abilitati',
    description: 'Tutte le attività di consulenza legale e difesa giudiziale sono svolte in sinergia e sotto la responsabilità di avvocati regolarmente iscritti all\'Ordine.'
  },
  {
    title: 'Riservatezza e Protezione Dati GDPR',
    description: 'I tuoi dati anagrafici, i documenti di famiglia e le informazioni fiscali sono custoditi con la massima riservatezza e conformità normativa europea.'
  },
  {
    title: 'Supporto Multilingue Senza Barriere',
    description: 'Nessun malinteso burocratico: parliamo la tua lingua madre per garantirti la piena comprensione di ogni atto che firmi.'
  }
];

export const LANGUAGES_SUPPORTED = [
  { name: 'Italiano', code: 'it', flag: '🇮🇹', nativeName: 'Italiano', note: 'Lingua ufficiale e per le istituzioni' },
  { name: 'Inglese', code: 'en', flag: '🇬🇧', nativeName: 'English', note: 'International communications & Expat support' },
  { name: 'Arabo', code: 'ar', flag: '🇸🇦', nativeName: 'العربية', note: 'لغة رسمية ودعم كامل لجميع الجاليات العربية', rtl: true },
  { name: 'Francese', code: 'fr', flag: '🇫🇷', nativeName: 'Français', note: 'Pour les résidents et dossiers francophones' },
  { name: 'Urdu', code: 'ur', flag: '🇵🇰', nativeName: 'اردو', note: 'پاکستانی اور جنوبی ایشیائی شہریوں کے لیے رہنمائی', rtl: true },
  { name: 'Darija Marocchina', code: 'ma', flag: '🇲🇦', nativeName: 'الدارجة المغربية', note: 'محادثة وتواصل مباشر وموثوق' },
  { name: 'Arabo Egiziano', code: 'eg', flag: '🇪🇬', nativeName: 'العامية المصرية', note: 'تواصل مباشر مع المستشارين' }
];

export const TRANSLATIONS: Record<SupportedLanguage, {
  nav: {
    home: string;
    services: string;
    howItWorks: string;
    team: string;
    languages: string;
    office: string;
    contact: string;
    cta: string;
  };
  hero: {
    kicker: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badgeCity: string;
  };
  about: {
    kicker: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
  };
  servicesHeading: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  teamHeading: {
    kicker: string;
    title: string;
    subtitle: string;
    disclaimer: string;
  };
  officeHeading: {
    kicker: string;
    title: string;
    subtitle: string;
    howToReach: string;
    transportTitle: string;
  };
  contactHeading: {
    kicker: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    serviceLabel: string;
    languageLabel: string;
    messageLabel: string;
    urgencyLabel: string;
    privacyLabel: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMessage: string;
  };
}> = {
  it: {
    nav: {
      home: 'Home',
      services: 'Servizi',
      howItWorks: 'Come funziona',
      team: 'Team',
      languages: 'Lingue',
      office: 'Ufficio',
      contact: 'Contatti',
      cta: 'Consulenza gratuita'
    },
    hero: {
      kicker: 'ASSISTENZA, ORIENTAMENTO, OPPORTUNITÀ',
      title: 'Il tuo futuro in Italia. Il giusto supporto, al tuo fianco.',
      description: 'Ti accompagniamo nella comprensione delle procedure di immigrazione in Italia, con orientamento personalizzato, supporto multilingue e collaborazione con professionisti legali qualificati.',
      ctaPrimary: 'Richiedi una consulenza',
      ctaSecondary: 'Scopri i servizi',
      badgeCity: 'MILANO'
    },
    about: {
      kicker: 'CHI SIAMO & MISSIONE',
      title: 'Un punto di riferimento autorevole e umano per le procedure di immigrazione a Milano',
      lead: 'La burocrazia dell\'immigrazione in Italia è complessa, in continua evoluzione e richiede rigore, precisione e rispetto deontologico.',
      p1: 'Italia Immigrazione nasce per colmare la distanza tra cittadini stranieri, famiglie, professionisti e le istituzioni pubbliche (Questura, Prefettura, Sportello Unico per l\'Immigrazione). Offriamo orientamento strategico e gestione documentale affidabile.',
      p2: 'Operiamo con un team multidisciplinare che integra competenze consulenziali, traduttori madrelingua e la stretta collaborazione con avvocati specializzati del Foro per ogni atto che richieda assistenza legale.'
    },
    servicesHeading: {
      kicker: 'I NOSTRI SERVIZI',
      title: 'Orientamento burocratico e assistenza procedurale completa',
      subtitle: 'Ogni situazione è unica. Seleziona l\'area di intervento per comprendere iter, documenti necessari e modalità di supporto.'
    },
    teamHeading: {
      kicker: 'I PROFESSIONISTI',
      title: 'Cinque profili dedicati a guidarti con competenza ed etica',
      subtitle: 'Esperienza sul campo, sensibilità culturale e rigore normativo per la tua serenità.',
      disclaimer: 'Nota deontologica: l\'attività di consulenza legale e patrocinio è svolta in collaborazione con avvocati regolarmente abilitati.'
    },
    officeHeading: {
      kicker: 'LA NOSTRA SEDE',
      title: 'Ufficio di Milano — Nel cuore di Città Studi',
      subtitle: 'Riceviamo su appuntamento per riservarti il tempo e l\'attenzione che la tua pratica merita.',
      howToReach: 'Come raggiungerci',
      transportTitle: 'Collegamenti e trasporti'
    },
    contactHeading: {
      kicker: 'PARLA CON NOI',
      title: 'Inizia oggi il tuo percorso in modo chiaro e sicuro',
      subtitle: 'Compila il modulo o contattaci direttamente tramite telefono, email o WhatsApp.',
      formTitle: 'Richiesta di contatto e orientamento preliminare',
      nameLabel: 'Nome e Cognome',
      emailLabel: 'Indirizzo Email',
      phoneLabel: 'Numero di Telefono (con prefisso)',
      serviceLabel: 'Ambito di interesse',
      languageLabel: 'Lingua preferita per il colloquio',
      messageLabel: 'Descrivi brevemente la tua situazione o domanda',
      urgencyLabel: 'Livello di urgenza',
      privacyLabel: 'Acconsento al trattamento dei dati personali secondo la normativa privacy GDPR.',
      submitBtn: 'Invia richiesta di consulenza',
      submittingBtn: 'Invio in corso...',
      successTitle: 'Richiesta ricevuta con successo',
      successMessage: 'Grazie per averci contattato. Uno dei nostri consulenti esaminerà la tua richiesta e ti risponderà entro 24 ore lavorative.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      howItWorks: 'How It Works',
      team: 'Team',
      languages: 'Languages',
      office: 'Milan Office',
      contact: 'Contact',
      cta: 'Free Consultation'
    },
    hero: {
      kicker: 'ASSISTANCE, GUIDANCE, OPPORTUNITY',
      title: 'Your future in Italy. The right guidance, by your side.',
      description: 'We guide you through the intricacies of Italian immigration procedures with tailored consulting, multilingual support, and collaboration with qualified legal professionals.',
      ctaPrimary: 'Request Consultation',
      ctaSecondary: 'Explore Services',
      badgeCity: 'MILAN'
    },
    about: {
      kicker: 'ABOUT US & MISSION',
      title: 'An authoritative and human reference point for immigration procedures in Milan',
      lead: 'Immigration bureaucracy in Italy is nuanced, constantly changing, and requires thorough legal precision and ethical integrity.',
      p1: 'Italia Immigrazione was founded to bridge the gap between foreign nationals, international families, employers, and public authorities (Questura, Prefettura, Sportello Unico).',
      p2: 'We operate with a multidisciplinary team combining consulting specialists, native translators, and close cooperation with qualified Italian immigration attorneys.'
    },
    servicesHeading: {
      kicker: 'OUR SERVICES',
      title: 'Bureaucratic guidance and procedural assistance',
      subtitle: 'Every case is unique. Select an area below to explore requirements, documents, and workflows.'
    },
    teamHeading: {
      kicker: 'THE PROFESSIONALS',
      title: 'Five dedicated specialists guiding you with expertise and ethics',
      subtitle: 'Hands-on experience, cultural understanding, and strict compliance.',
      disclaimer: 'Regulatory notice: Legal defense and statutory advice are carried out in partnership with certified attorneys.'
    },
    officeHeading: {
      kicker: 'OUR LOCATION',
      title: 'Milan Office — In the heart of Città Studi',
      subtitle: 'We welcome you by appointment to dedicate the time and focus your case deserves.',
      howToReach: 'Directions & Location',
      transportTitle: 'Public Transit & Access'
    },
    contactHeading: {
      kicker: 'GET IN TOUCH',
      title: 'Begin your journey with clarity and confidence',
      subtitle: 'Fill out the form or reach out directly via phone, email, or WhatsApp.',
      formTitle: 'Preliminary Assessment & Consultation Request',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number (with country code)',
      serviceLabel: 'Service Area',
      languageLabel: 'Preferred Consultation Language',
      messageLabel: 'Describe your case or question briefly',
      urgencyLabel: 'Urgency Level',
      privacyLabel: 'I consent to the processing of personal data under GDPR regulations.',
      submitBtn: 'Submit Consultation Request',
      submittingBtn: 'Sending...',
      successTitle: 'Request Received Successfully',
      successMessage: 'Thank you for reaching out. One of our consultants will review your inquiry and reply within 24 working hours.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      howItWorks: 'Comment ça marche',
      team: 'Équipe',
      languages: 'Langues',
      office: 'Bureau à Milan',
      contact: 'Contact',
      cta: 'Consultation Gratuite'
    },
    hero: {
      kicker: 'ASSISTANCE, ORIENTATION, OPPORTUNITÉ',
      title: 'Votre avenir en Italie. Le bon accompagnement à vos côtés.',
      description: 'Nous vous guidons dans la compréhension des démarches d\'immigration en Italie, avec un conseil personnalisé, un soutien multilingue et une collaboration avec des juristes qualifiés.',
      ctaPrimary: 'Demander un conseil',
      ctaSecondary: 'Découvrir les services',
      badgeCity: 'MILAN'
    },
    about: {
      kicker: 'QUI SOMMES-NOUS',
      title: 'Un point de référence fiable et humain pour vos démarches en Italie',
      lead: 'La bureaucratie italienne de l\'immigration est complexe et exige rigueur, précision et respect déontologique.',
      p1: 'Italia Immigrazione a été créée pour faire le lien entre les ressortissants étrangers, les familles, les entreprises et les administrations publiques italiennes.',
      p2: 'Notre équipe réunit des conseillers spécialisés, des interprètes assermentés et travaille en synergie étroite avec des avocats inscrits au barreau.'
    },
    servicesHeading: {
      kicker: 'NOS SERVICES',
      title: 'Orientation administrative et accompagnement procédural complet',
      subtitle: 'Chaque situation est unique. Découvrez les conditions, documents et étapes nécessaires.'
    },
    teamHeading: {
      kicker: 'LES PROFESSIONNELS',
      title: 'Cinq profils dévoués pour vous guider avec rigueur et bienveillance',
      subtitle: 'Expérience reconnue, maîtrise multilingue et déontologie exemplaire.',
      disclaimer: 'Note légale : Les actes de conseil juridique et recours sont assurés en collaboration avec des avocats habilités.'
    },
    officeHeading: {
      kicker: 'NOTRE CABINET',
      title: 'Bureau de Milan — Au cœur de Città Studi',
      subtitle: 'Nous vous recevons sur rendez-vous pour une étude approfondie de votre dossier.',
      howToReach: 'Accès et localisation',
      transportTitle: 'Transports en commun'
    },
    contactHeading: {
      kicker: 'CONTACTEZ-NOUS',
      title: 'Commencez vos démarches en toute sécurité',
      subtitle: 'Remplissez le formulaire ou contactez-nous par téléphone, e-mail ou WhatsApp.',
      formTitle: 'Demande de consultation préliminaire',
      nameLabel: 'Nom et Prénom',
      emailLabel: 'Adresse E-mail',
      phoneLabel: 'Numéro de téléphone',
      serviceLabel: 'Type de démarche',
      languageLabel: 'Langue souhaitée pour l\'entretien',
      messageLabel: 'Détaillez brièvement votre situation',
      urgencyLabel: 'Degré d\'urgence',
      privacyLabel: 'J\'accepte le traitement de mes données conformément au RGPD.',
      submitBtn: 'Envoyer la demande',
      submittingBtn: 'Envoi en cours...',
      successTitle: 'Demande reçue avec succès',
      successMessage: 'Merci de votre message. Notre équipe vous répondra sous 24 heures ouvrées.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      howItWorks: 'كيف نعمل',
      team: 'فريق العمل',
      languages: 'اللغات',
      office: 'مكتب ميلانو',
      contact: 'اتصل بنا',
      cta: 'استشارة أولية'
    },
    hero: {
      kicker: 'مساعدة، توجيه، وفرص حقيقية',
      title: 'مستقبلك في إيطاليا. الدعم الصحيح، خطوة بخطوة بجانبك.',
      description: 'نرافقك في فهم إجراءات الهجرة والإقامة في إيطاليا، مع توجيه مخصص، دعم متعدد اللغات، وتعاون وثيق مع محامين قانونيين مؤهلين.',
      ctaPrimary: 'طلب استشارة قانونية',
      ctaSecondary: 'استكشف الخدمات',
      badgeCity: 'ميلانو'
    },
    about: {
      kicker: 'من نحن ورسالتنا',
      title: 'مرجع قانوني وإنساني موثوق لإجراءات الهجرة والإقامة في ميلانو',
      lead: 'الإجراءات الإدارية للهجرة في إيطاليا معقدة وتتطلب دقة متناهية ومعرفة دقيقة بالقوانين والممارسات الرسمية.',
      p1: 'تأسست إيطاليا إيمغراتسيوني لتكون الجسر الموثوق بين المواطنين الأجانب والعائلات والشركات وبين المؤسسات الإيطالية (الشرطة، المحافظة، ومكتب الهجرة الموحد).',
      p2: 'نعمل بفريق متعدد التخصصات يشمل مستشاري هجرة ومترجمين باللغات العربية والمغربية والمصرية بالتعاون مع محامين معتمدين لدى نقابة المحامين.'
    },
    servicesHeading: {
      kicker: 'خدماتنا الرسمية',
      title: 'توجيه إداري ومتابعة شاملة لجميع معاملات الإقامة والتأشيرات',
      subtitle: 'كل حالة لها خصوصيتها. اختر الخدمة للتعرف على الشروط والوثائق المطلوبة.'
    },
    teamHeading: {
      kicker: 'فريق العمل',
      title: 'خمسة متخصصين لخدمتكم بخبرة ومصداقية كاملة',
      subtitle: 'سنوات من الخبرة العملية، تواصل بلغتك الأم، واحترام كامل للمعايير القانونية.',
      disclaimer: 'تنبيه قانوني: تتم الاستشارات القضائية والطعون بالتعاون المباشر مع محامين مقيدين رسمياً بالنقابة.'
    },
    officeHeading: {
      kicker: 'موقعنا في ميلانو',
      title: 'مكتب ميلانو — في قلب تشيتا ستودي',
      subtitle: 'نستقبلكم بموعد مسبق لضمان الوقت والتركيز الكامل لملفكم.',
      howToReach: 'كيفية الوصول للمكتب',
      transportTitle: 'المواصلات العامة'
    },
    contactHeading: {
      kicker: 'تواصل معنا',
      title: 'ابدأ مسارك في إيطاليا بثقة ووضوح',
      subtitle: 'املأ النموذج أو تواصل معنا مباشرة عبر الهاتف أو البريد أو واتساب.',
      formTitle: 'طلب تقييم أولي واستشارة',
      nameLabel: 'الاسم الكامل',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'رقم الهاتف مع رمز الدولة',
      serviceLabel: 'نوع المعاملة المطلوبة',
      languageLabel: 'اللغة المفضلة للتواصل',
      messageLabel: 'اشرح باختصار حالتك أو سؤالك',
      urgencyLabel: 'درجة الاستعجال',
      privacyLabel: 'أوافق على معالجة البيانات الشخصية وفقاً للقانون الأوروبي لحماية البيانات.',
      submitBtn: 'إرسال طلب الاستشارة',
      submittingBtn: 'جاري الإرسال...',
      successTitle: 'تم استلام طلبك بنجاح',
      successMessage: 'شكراً لتواصلك معنا. سيقوم أحد مستشارينا بمراجعة طلبك والتواصل معك خلال 24 ساعة عمل.'
    }
  },
  ur: {
    nav: {
      home: 'ہوم',
      services: 'خدمات',
      howItWorks: 'طریقہ کار',
      team: 'ٹیم',
      languages: 'زبانیں',
      office: 'میلان دفتر',
      contact: 'رابطہ کریں',
      cta: 'مفت رہنمائی'
    },
    hero: {
      kicker: 'مدد، رہنمائی اور مواقع',
      title: 'اٹلی میں آپ کا مستقبل۔ صحیح رہنمائی، آپ کے ساتھ۔',
      description: 'ہم اٹلی کے امیگریشن قوانین اور طریقہ کار کو سمجھنے میں آپ کی مدد کرتے ہیں، ذاتی رہنمائی، کثیر لسانی سپورٹ اور قانونی ماہرین کے اشتراک کے ساتھ۔',
      ctaPrimary: 'مشاورت حاصل کریں',
      ctaSecondary: 'تمام خدمات دیکھیں',
      badgeCity: 'میلان'
    },
    about: {
      kicker: 'ہمارا تعارف اور مشن',
      title: 'میلان میں امیگریشن امور کے لیے ایک مستند اور مخلص ادارہ',
      lead: 'اٹلی میں امیگریشن کا دفتری نظام پیچیدہ ہے اور اس میں قانونی باریکیوں کی درست سمجھ بوجھ کی ضرورت ہوتی ہے۔',
      p1: 'اٹلیہ امیگراسیونے کا مقصد تارکین وطن، خاندانوں اور کمپنیوں کو اطالوی اداروں (کویستورا، پریفیتورا) کے ساتھ قانونی معاملات میں سہولت فراہم کرنا ہے۔',
      p2: 'ہماری ٹیم میں تجربہ کار کنسلٹنٹس، اردو اور دیگر زبانوں کے ماہرین اور تسلیم شدہ اطالوی وکلاء شامل ہیں۔'
    },
    servicesHeading: {
      kicker: 'ہماری خدمات',
      title: 'قانونی امیگریشن اور دفتری کارروائی میں مکمل معاونت',
      subtitle: 'ہر کیس منفرد ہے۔ ضروری کاغذات اور طریقہ کار جاننے کے لیے متعلقہ خدمت کا انتخاب کریں۔'
    },
    teamHeading: {
      kicker: 'ہمارے ماہرین',
      title: 'آپ کی رہنمائی کے لیے پانچ وقف ماہرین',
      subtitle: 'برسوں کا تجربہ، ثقافتی فہم اور اطالوی قوانین کی پاسداری۔',
      disclaimer: 'قانونی نوٹ: عدالتی کارروائی اور وکالت کے معاملات بار ایسوسی ایشن کے رجسٹرڈ وکلاء کے ذریعے کیے جاتے ہیں۔'
    },
    officeHeading: {
      kicker: 'ہمارا دفتر',
      title: 'میلان آفس — چیتا ستودی',
      subtitle: 'ہم وقت مقرر کر کے ملاقات کرتے ہیں تاکہ آپ کے کیس کو مکمل توجہ دی جا سکے۔',
      howToReach: 'پتہ اور راستہ',
      transportTitle: 'پبلک ٹرانسپورٹ'
    },
    contactHeading: {
      kicker: 'ہم سے رابطہ کریں',
      title: 'آج ہی اپنے قانونی سفر کا آغاز اعتماد کے ساتھ کریں',
      subtitle: 'فارم پر کریں یا فون، ای میل اور واٹس ایپ کے ذریعے براہ راست رابطہ کریں۔',
      formTitle: 'ابتدائی جائزے اور مشاورت کی درخواست',
      nameLabel: 'پورا نام',
      emailLabel: 'ای میل ایڈریس',
      phoneLabel: 'فون نمبر (ملکی کوڈ کے ساتھ)',
      serviceLabel: 'مطلوبہ سروس',
      languageLabel: 'گفتگو کے لیے پسندیدہ زبان',
      messageLabel: 'اپنے کیس یا سوال کی مختصر وضاحت',
      urgencyLabel: 'ضرورت کی نوعیت',
      privacyLabel: 'میں پرائیویسی پالیسی اور ذاتی ڈیٹا کے استعمال کی منظوری دیتا ہوں۔',
      submitBtn: 'درخواست جمع کروائیں',
      submittingBtn: 'بھیجا جا رہا ہے...',
      successTitle: 'درخواست موصول ہو گئی ہے',
      successMessage: 'رابطہ کرنے کا شکریہ۔ ہمارے کنسلٹنٹس 24 دفتری گھنٹوں کے اندر آپ سے رابطہ کریں گے۔'
    }
  }
};
