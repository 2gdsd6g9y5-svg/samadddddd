# Italia Immigrazione — Milano

Sito web istituzionale premium per **Italia Immigrazione**, servizio di orientamento e assistenza nelle procedure di immigrazione con sede a Milano (Via Andrea Maria Ampère 126).

---

## 🏛️ Direzione Artistica & Identità

- **Stile**: Studio legale internazionale premium, fotografia panoramica cinematografica, tipografia serif editoriale (*Cormorant Garamond*) abbinata a caratteri sans-serif moderni (*Plus Jakarta Sans* e *Tajawal* per il supporto arabo/urdu).
- **Palette colori**:
  - Blu notte: `#10263D`
  - Blu profondo: `#173650`
  - Bianco: `#FFFFFF`
  - Avorio: `#FCFAF6`
  - Terracotta: `#B45F42`
  - Beige sabbia: `#E7DED4`
  - Blu-grigio: `#536176`

---

## 🚀 Architettura Tecnica

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4 con import nativo `@theme`
- **Icone**: Lucide React
- **Internazionalizzazione (i18n)**: Supporto completo con selezione dinamica per Italiano, Inglese, Francese, Arabo (العربية) e Urdu (اردو), con gestione automatica di `dir="rtl"` per i layout da destra a sinistra.
- **Accessibilità & SEO**: Marcatori Semantici HTML5, Schema.org JSON-LD per LocalBusiness / ProfessionalService a Milano, OpenGraph e Twitter Cards.

---

## 👥 Il Team (5 Professionisti & Foto Originali)

1. **Samad Chaudhry** (`IMG_1335.jpg`) — Consulente di immigrazione (11 anni di esperienza dichiarata).
2. **Annalisa Rottola** (`IMG_1342.jpg`) — Avvocata specializzata in immigrazione (22 anni di esperienza dichiarata).
3. **Giovanni Rossetti** (`IMG_1344.jpg`) — Consulente per le procedure di immigrazione (15 anni di esperienza dichiarata).
4. **Elisa Bova** (`IMG_1334.jpg`) — Consulente di immigrazione & Digital Marketing Specialist.
5. **Ahlam Moutaabbid** (`fcdcca9c-6e6c-4923-8bff-b2f9e93353e7.jpg`) — Traduttrice e interprete multilingue.

> **Gestione Foto per Vercel**: 
> - Nell'anteprima web puoi cliccare direttamente sul pulsante **"Carica foto originale"** presente su ciascuna scheda profilo per selezionare all'istante il file originale dal tuo dispositivo senza alcuna compressione o modifica.
> - Per la pubblicazione permanente su GitHub e Vercel, copia i tuoi 5 file originali nella cartella `public/team/` (nominandoli `samad.jpg`, `annalisa.jpg`, `giovanni.jpg`, `elisa.jpg`, `ahlam.jpg` oppure con i loro nomi originali `IMG_1335.jpg`, ecc.). Vercel li distribuirà direttamente in CDN alla massima qualità originale.

---

## 📍 Recapiti Ufficiali dello Studio

- **Telefono**: `+39 353 213 6704`
- **WhatsApp**: `https://wa.me/393532136704`
- **Email**: `samad@italiaimmigrazione.it`
- **Sede**: `Via Andrea Maria Ampère 126, 20131 Milano, Italia` (Fermate Metro M2 Piola / Lambrate FS)

---

## 💻 Avvio e Sviluppo Locale

```bash
# 1. Installazione dipendenze
npm install

# 2. Avvio del server di sviluppo locale
npm run dev

# 3. Compilazione e verifica di produzione
npm run build

# 4. Anteprima locale del build di produzione
npm run preview
```

---

## 📦 Guida alla Pubblicazione: GitHub, Vercel e Dominio Personalizzato

### FASE 1: Creazione e caricamento su GitHub

1. Crea un nuovo repository su GitHub (es. `italia-immigrazione-web`), impostandolo come *Public* o *Private*.
2. Nel tuo terminale locale o shell del progetto, esegui:

```bash
# Inizializza il repository locale (se non già inizializzato)
git init

# Aggiungi tutti i file
git add .

# Esegui il commit iniziale
git commit -m "feat: initial commit premium website Italia Immigrazione Milano"

# Rinomina il ramo principale in main
git branch -M main

# Collega il repository remoto di GitHub (sostituisci con il tuo username e repo)
git remote add origin https://github.com/TUO-USERNAME/italia-immigrazione-web.git

# Esegui il push
git push -u origin main
```

---

### FASE 2: Distribuzione su Vercel

1. Accedi a [Vercel](https://vercel.com/) con il tuo account (collegato al tuo profilo GitHub).
2. Clicca su **Add New...** -> **Project**.
3. Seleziona il repository `italia-immigrazione-web` appena caricato e clicca su **Import**.
4. Nelle impostazioni di configurazione:
   - **Framework Preset**: `Vite` (rilevato automaticamente).
   - **Root Directory**: `./` (predefinito).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Clicca su **Deploy**.
6. Vercel completerà il build in meno di un minuto e ti assegnerà un URL pubblico istantaneo (es. `italia-immigrazione.vercel.app`).

---

### FASE 3: Configurazione del Dominio Personalizzato

Per collegare il tuo dominio ufficiale (es. `italiaimmigrazione.it`):

1. Nella dashboard del progetto su Vercel, vai in **Settings** -> **Domains**.
2. Inserisci il tuo nome di dominio:
   - Inserisci sia `italiaimmigrazione.it` che `www.italiaimmigrazione.it`.
3. Vercel mostrerà i record DNS esatti da inserire nel pannello del tuo registrar (Aruba, Register.it, Namecheap, GoDaddy, Cloudflare, ecc.):

| Tipo | Nome / Host | Valore / Destinazione | Note |
|---|---|---|---|
| **A** | `@` (o vuoto) | `76.76.21.21` | Indirizza il dominio principale a Vercel |
| **CNAME** | `www` | `cname.vercel-dns.com` | Indirizza il sottodominio www |

4. Dopo aver salvato i record DNS presso il provider del dominio:
   - La propagazione DNS richiede solitamente da 15 minuti a poche ore.
   - Vercel genererà automaticamente e gratuitamente il certificato di sicurezza **SSL/HTTPS** (Let's Encrypt).
   - Nel pannello di Vercel lo stato passerà a spunta verde **Valid Configuration**.

---

## ⚖️ Conformità Deontologica e Note Legali

Il sito incorpora disclaimer legali chiari e conformi alla normativa:
- Distinzione tra attività di orientamento e assistenza burocratica e gli atti di patrocinio o rappresentanza giudiziale, riservati agli avvocati abilitati del Foro.
- Rispetto del Regolamento Generale sulla Protezione dei Dati (GDPR EU 2016/679).
- Nessuna promessa o garanzia di esito ingannevole.
