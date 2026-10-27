import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Share2, RotateCcw, Calendar, Check, Copy } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { AcceptModal } from './AcceptModal';
import { playChimeSound, playSoftClick } from '../utils/audio';

interface InvitationActionsProps {
  visitorName: string;
  onReplay: () => void;
  soundEnabled: boolean;
}

export const InvitationActions: React.FC<InvitationActionsProps> = ({
  visitorName,
  onReplay,
  soundEnabled,
}) => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleAccept = () => {
    if (soundEnabled) {
      playChimeSound();
    }
    setHasAccepted(true);
    setShowModal(true);

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#D6B66C', '#145A45', '#F2EBDD', '#FBF7ED'],
      });
    } catch {
      // Ignore
    }
  };

  const handleCopyLink = () => {
    if (soundEnabled) playSoftClick();
    const url = EVENT_CONFIG.getPublicSiteUrl();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const whatsAppShareUrl = EVENT_CONFIG.getWhatsAppShareUrl(visitorName);

  return (
    <div className="w-full mt-8 pt-6 border-t border-[#D6B66C]/40 flex flex-col items-center">
      {/* Three Primary Actions */}
      <div className="w-full max-w-md flex flex-col gap-3.5">
        
        {/* Action A: Accept Invitation */}
        <button
          onClick={handleAccept}
          type="button"
          className={`w-full py-4 px-6 text-base sm:text-lg font-medium rounded-xl shadow-lg border transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 ${
            hasAccepted
              ? 'bg-[#145A45]/15 text-[#0B382D] border-[#145A45]/40 hover:bg-[#145A45]/25'
              : 'bg-[#145A45] hover:bg-[#0B382D] text-[#FBF7ED] border-[#D6B66C]/70 shadow-[#145A45]/20 hover:shadow-xl'
          }`}
        >
          {hasAccepted ? (
            <>
              <Check size={20} className="text-[#145A45]" />
              <span>Shirkat Qabool Ki Gayi ❤️</span>
            </>
          ) : (
            <>
              <span>Main Shirkat Karunga ❤️</span>
            </>
          )}
        </button>

        {/* Action B: WhatsApp Sharing */}
        <a
          href={whatsAppShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (soundEnabled) playSoftClick();
          }}
          className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white text-base sm:text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
        >
          <Share2 size={20} />
          <span>WhatsApp Par Share Karein</span>
        </a>

        {/* Action C: Replay Surprise */}
        <button
          onClick={() => {
            if (soundEnabled) playSoftClick();
            onReplay();
          }}
          type="button"
          className="w-full py-3.5 px-6 bg-[#F2EBDD] hover:bg-[#EADBCA] text-[#0B382D] text-sm sm:text-base font-semibold rounded-xl border border-[#D6B66C]/60 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:border-[#145A45]/40"
        >
          <RotateCcw size={17} className="text-[#145A45]" />
          <span>Dobara Dekhein</span>
        </button>
      </div>

      {/* Secondary Helpful Actions: Google Calendar & Copy Link */}
      <div className="w-full max-w-md mt-5 pt-4 border-t border-[#D6B66C]/25 flex flex-wrap items-center justify-center gap-3 text-xs">
        <a
          href={EVENT_CONFIG.googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FBF7ED] hover:bg-[#F2EBDD] text-[#145A45] font-medium border border-[#D6B66C]/40 transition-colors shadow-2xs"
        >
          <Calendar size={14} className="text-[#D6B66C]" />
          <span>Google Calendar mein Shamil Karein</span>
        </a>

        <button
          onClick={handleCopyLink}
          type="button"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FBF7ED] hover:bg-[#F2EBDD] text-[#145A45] font-medium border border-[#D6B66C]/40 transition-colors shadow-2xs cursor-pointer"
        >
          {copied ? (
            <>
              <Check size={14} className="text-emerald-700" />
              <span>Link Copy Ho Gaya!</span>
            </>
          ) : (
            <>
              <Copy size={14} className="text-[#D6B66C]" />
              <span>Dawat Ka Link Copy Karein</span>
            </>
          )}
        </button>
      </div>

      {/* Confirmation Modal */}
      <AcceptModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        visitorName={visitorName}
      />
    </div>
  );
};
