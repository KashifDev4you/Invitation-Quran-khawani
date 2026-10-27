/**
 * Central event configuration for Quran Khawani surprise website.
 * This is the SINGLE SOURCE OF TRUTH for all event information across the application.
 */

export interface EventConfig {
  title: string;
  date: string; // ISO format
  formattedDate: string; // Display format
  time: string; // Display time
  formattedTime: string; // Formatted with timezone
  venue: string;
  host: string;
  purpose: string;
  timezone: string;
  googleMapsQuery: string;
  googleMapsUrl: string;
  googleCalendarUrl: string;
  getPublicSiteUrl: () => string;
  getWhatsAppShareUrl: (visitorName: string) => string;
}

export const EVENT_CONFIG: EventConfig = {
  title: 'Quran Khawani',
  date: '2026-11-01',
  formattedDate: 'Sunday, 1 November 2026',
  time: '12:30 PM',
  formattedTime: '12:30 PM PKT',
  venue: 'V697+MXX, R-545 Makki Mohalla, Samo Goth, Gadap Town, Karachi, Pakistan',
  host: 'Muhammad Azam',
  purpose: 'General Quran Khawani',
  timezone: 'Asia/Karachi',
  googleMapsQuery: 'V697+MXX, R-545 Makki Mohalla, Samo Goth, Gadap Town, Karachi, Pakistan',
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'V697+MXX, R-545 Makki Mohalla, Samo Goth, Gadap Town, Karachi, Pakistan'
  )}`,
  // 1 November 2026 at 12:30 PM PKT (PKT is UTC+5, so 07:30 UTC to 10:30 UTC)
  googleCalendarUrl: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Quran Khawani — Muhammad Azam'
  )}&dates=20261101T073000Z/20261101T103000Z&details=${encodeURIComponent(
    "Quran Khawani ki barkat bhari mehfil. Host: Muhammad Azam. Purpose: General Quran Khawani."
  )}&location=${encodeURIComponent(
    'V697+MXX, R-545 Makki Mohalla, Samo Goth, Gadap Town, Karachi, Pakistan'
  )}`,
  getPublicSiteUrl: () => {
    // Priority: VITE_PUBLIC_SITE_URL env variable -> window.location.origin -> fallback
    if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_PUBLIC_SITE_URL) {
      return import.meta.env.VITE_PUBLIC_SITE_URL;
    }
    if (typeof window !== 'undefined' && window.location?.origin && window.location.origin !== 'null') {
      return window.location.origin;
    }
    return 'https://ais-pre-oghvqxonjrgrfbscvlt5uh-77903813169.asia-east1.run.app';
  },
  getWhatsAppShareUrl: (visitorName: string) => {
    const siteUrl = EVENT_CONFIG.getPublicSiteUrl();
    const cleanName = visitorName.trim() || 'Azeez Mehmaan';
    
    const message = 
`✨ *Assalamu Alaikum!* ✨

*${cleanName}* ke naam Quran Khawani ka ek pur-khuloos paighaam aur dawat-nama:

📖 *Event:* ${EVENT_CONFIG.title}
🗓 *Tareekh:* ${EVENT_CONFIG.formattedDate}
⏰ *Waqt:* ${EVENT_CONFIG.formattedTime}
📍 *Maqaam:* ${EVENT_CONFIG.venue}
👤 *Mezbaan:* ${EVENT_CONFIG.host}
🤲 *Maqsad:* ${EVENT_CONFIG.purpose}

"Aaiye, mil kar Allah ke paak kalaam ki tilawat karein aur dua karein ke Allah Ta'ala hamari tilawat aur duaein qabool farmaye. Ameen."

✉️ *Aap bhi apna personalized khat kholiye aur dawat dekhiye:*
${siteUrl}`;

    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
};
