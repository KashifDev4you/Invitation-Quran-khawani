# Personalized Quran Khawani Surprise Website

An interactive, responsive, animated surprise website for a **Quran Khawani** invitation. Visitors enter their names first, then experience an elegant envelope-opening animation that reveals a personalized Islamic invitation card with fixed event details, WhatsApp sharing, acceptance confirmation, and replay capabilities.

---

## 📖 Fixed Event Information

All event data is centrally maintained in `src/config/eventConfig.ts`:

- **Event Title:** Quran Khawani
- **Date:** Sunday, 1 November 2026
- **Time:** 12:30 PM PKT
- **Timezone:** Asia/Karachi
- **Venue:** V697+MXX, R-545 Makki Mohalla, Samo Goth, Gadap Town, Karachi, Pakistan
- **Host:** Muhammad Azam
- **Purpose:** General Quran Khawani

---

## ✨ Features & User Journey

1. **Welcome Screen:**
   - Spiritual opening with Arabic Bismillah calligraphy, ornamental arch, and glowing lantern motifs.
   - Intriguing invitation prompt: *"Assalamu Alaikum! Aap ke liye kuch khaas hai. Ek chhota sa paighaam aap ka intezar kar raha hai."*
   - Sound toggle button for peaceful ambient chimes.
   - CTA button: *"Surprise Dekhein ✨"*.

2. **Name Entry Screen:**
   - Prompts the visitor: *"Pehle apna naam batayein. Taake hum aap ke liye khaas paighaam tayyar kar sakein."*
   - Unicode & Urdu script validation (supports Arabic, Urdu, Latin names).
   - Graceful handling of whitespace, length, and back navigation.
   - Button: *"Mera Khat Tayyar Karein"*.

3. **Personalized Envelope Screen:**
   - 3D-styled emerald & warm ivory envelope with a gold wax seal.
   - Personalized recipient badge: *"[Visitor Name], aap ke liye ek khaas paighaam hai."*
   - Floating animation and gold ambient lighting.
   - Button: *"Khat Kholein 💌"*.

4. **Smooth Envelope Opening Animation:**
   - Wax seal glows and breaks.
   - Envelope top flap rotates open in 3D perspective.
   - The parchment letter slides up smoothly accompanied by a subtle gold sparkle burst and optional crystal chime.
   - Staggered entrance into the full invitation view.

5. **Personalized Invitation Letter:**
   - Islamic architectural mihrab arch & corner arabesques.
   - Arabic Bismillah calligraphy and personalized greeting: *"Assalamu Alaikum, [Visitor Name]!"*
   - Authentic Roman Urdu invitation text.
   - Dedicated event information box with Date, Time, Venue, Host, and Purpose.
   - Direct Google Maps directions link for the Karachi venue.
   - Closing: *"Hum aap ki shirkat ke muntazir rahenge."*

6. **Interactive Actions:**
   - **Accept Invitation:** *"Main Shirkat Karunga ❤️"* — reveals an earnest confirmation modal: *"JazakAllah Khair! Aap ki shirkat ka intezar rahega. Allah aap ko ajr ata farmaye. Ameen."*
   - **WhatsApp Sharing:** *"WhatsApp Par Share Karein"* — generates a pre-formatted, properly URL-encoded WhatsApp message with event details and the website link.
   - **Replay Surprise:** *"Dobara Dekhein"* — resets state cleanly to welcome screen.
   - **Google Calendar / ICS:** Add to calendar with pre-filled event time and location.

---

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Motion for React
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **Audio:** Web Audio API (synthesized peaceful crystal chords, zero external asset dependencies)

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 3. Build for Production

```bash
npm run build
```

This compiles optimized assets into the `dist` directory.

### 4. Preview Production Build

```bash
npm run preview
```

---

## 🌐 Configuring the Public Website URL for WhatsApp Sharing

When guests click **"WhatsApp Par Share Karein"**, the website link included in the message automatically uses:
1. `VITE_PUBLIC_SITE_URL` from your environment variables, OR
2. The current browser origin `window.location.origin` (e.g. `https://your-domain.com`).

To explicitly configure your public domain for production:

1. Create or edit `.env`:
   ```bash
   VITE_PUBLIC_SITE_URL="https://your-domain.vercel.app"
   ```
2. Re-run `npm run build`.

---

## 📦 Deploying to Static Hosting

### Deploying to Vercel

1. Push the code to a GitHub/GitLab repository.
2. In Vercel, click **"Add New Project"** and import the repository.
3. Set Framework Preset: **Vite**.
4. Set Build Command: `npm run build`.
5. Set Output Directory: `dist`.
6. (Optional) Add Environment Variable:
   - `VITE_PUBLIC_SITE_URL` = `https://your-project.vercel.app`
7. Click **Deploy**.

### Deploying to Netlify

1. In Netlify, select **"Import an existing project"**.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add environment variable `VITE_PUBLIC_SITE_URL` with your domain.
5. Click **Deploy Site**.

---

## 📱 Responsive & Accessibility Support

- Mobile-first layout optimized for small screens (320px+) to 4K displays.
- Natural text wrapping for long venue addresses and recipient names.
- Touch-friendly button sizes (min 44px height).
- Respects `prefers-reduced-motion` for users who prefer minimal or instant transitions.
- High color contrast meeting WCAG AA requirements with deep emerald green `#0B382D`, warm ivory `#FBF7ED`, and gold accents `#D6B66C`.
