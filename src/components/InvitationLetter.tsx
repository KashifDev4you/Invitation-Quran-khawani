import React from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, ArrowLeft } from 'lucide-react';
import { MihrabArch, IslamicStar, IslamicCorner, FloatingGoldDust } from './IslamicPattern';
import { EventDetails } from './EventDetails';
import { InvitationActions } from './InvitationActions';
import { playSoftClick } from '../utils/audio';

interface InvitationLetterProps {
  visitorName: string;
  onReplay: () => void;
  onBackToEnvelope: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const InvitationLetter: React.FC<InvitationLetterProps> = ({
  visitorName,
  onReplay,
  onBackToEnvelope,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start px-3 py-6 sm:py-10 md:py-14 overflow-hidden bg-gradient-to-b from-[#FBF7ED] via-[#F5EFE1] to-[#FBF7ED]">
      <FloatingGoldDust />

      {/* Top Header Bar */}
      <header className="w-full max-w-2xl flex items-center justify-between mb-4 sm:mb-6 z-10 px-2">
        <button
          onClick={() => {
            if (soundEnabled) playSoftClick();
            onBackToEnvelope();
          }}
          type="button"
          className="flex items-center gap-1.5 text-xs text-[#145A45] hover:text-[#0B382D] bg-[#F2EBDD]/90 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#D6B66C]/40 transition-all hover:border-[#D6B66C] shadow-2xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#145A45]"
        >
          <ArrowLeft size={14} />
          <span>Lifafa Dekhein</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSound}
            type="button"
            aria-label={soundEnabled ? 'Awaaz band karein' : 'Awaaz shuru karein'}
            className="flex items-center gap-1 text-xs text-[#24352F]/80 hover:text-[#0B382D] bg-[#F2EBDD]/90 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-[#D6B66C]/30 shadow-2xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#145A45]"
          >
            {soundEnabled ? (
              <Volume2 size={14} className="text-[#145A45]" />
            ) : (
              <VolumeX size={14} className="text-stone-400" />
            )}
            <span className="hidden xs:inline">{soundEnabled ? 'Awaaz On' : 'Mute'}</span>
          </button>
        </div>
      </header>

      {/* Main Parchment Letter Card */}
      <motion.article
        initial={{ opacity: 0, scale: 0.96, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#FBF7ED] border-2 border-[#D6B66C] rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl z-10 text-center"
      >
        {/* Subtle Ornamental Frame Corners */}
        <IslamicCorner position="top-left" className="top-2 left-2 text-[#D6B66C]/80" />
        <IslamicCorner position="top-right" className="top-2 right-2 text-[#D6B66C]/80" />
        <IslamicCorner position="bottom-left" className="bottom-2 left-2 text-[#D6B66C]/80" />
        <IslamicCorner position="bottom-right" className="bottom-2 right-2 text-[#D6B66C]/80" />

        {/* Inner Decorative Border */}
        <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#D6B66C]/30 pointer-events-none" />

        {/* Architectural Mihrab Arch */}
        <div className="mb-4">
          <MihrabArch />
        </div>

        {/* Bismillah Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <p
            className="font-arabic text-3xl sm:text-4xl md:text-5xl text-[#0B382D] mb-2 leading-relaxed select-none"
            dir="rtl"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-xs sm:text-sm font-serif-display uppercase tracking-widest text-[#145A45] font-semibold">
            Bismillahir Rahmanir Raheem
          </p>
        </motion.div>

        {/* Golden Divider */}
        <div className="flex items-center justify-center gap-3 my-5">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D6B66C]" />
          <IslamicStar size={18} className="text-[#D6B66C]" />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D6B66C]" />
        </div>

        {/* Personalized Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#0B382D] font-bold tracking-tight">
            Assalamu Alaikum,{' '}
            <span className="text-[#145A45] underline decoration-[#D6B66C]/60 underline-offset-8">
              {visitorName}
            </span>
            !
          </h2>
        </motion.div>

        {/* Exact Roman Urdu Invitation Message from Specification */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4 text-base sm:text-lg text-[#24352F] leading-relaxed max-w-xl mx-auto font-normal text-center sm:text-justify px-2"
        >
          <p>
            Aap ko nihayat mohabbat aur ehtram ke saath Quran Khawani ki is barkat bhari mehfil mein shirkat ki dawat di jati hai.
          </p>
          <p>
            Aaiye, mil kar Allah ke paak kalaam ki tilawat karein aur dua karein ke Allah Ta&apos;ala hamari tilawat aur duaein qabool farmaye.
          </p>
          <p>
            Aap ki shirkat hamare liye khushi aur izzat ka sabab hogi.
          </p>
          <p className="font-medium text-[#0B382D]">
            Allah Ta&apos;ala hum sab par apni rehmat aur barkatein nazil farmaye. Ameen.
          </p>
        </motion.div>

        {/* Fixed Event Information Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <EventDetails />
        </motion.div>

        {/* Closing Greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="my-6 text-center"
        >
          <p className="font-serif-display text-xl sm:text-2xl text-[#0B382D] italic font-semibold">
            &ldquo;Hum aap ki shirkat ke muntazir rahenge.&rdquo;
          </p>
          <div className="mt-2 text-xs uppercase tracking-widest text-[#145A45] font-semibold">
            — Minjanib Muhammad Azam o Ahl-e-Khana
          </div>
        </motion.div>

        {/* Interactive Actions (Accept, WhatsApp Share, Replay, Calendar) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <InvitationActions
            visitorName={visitorName}
            onReplay={onReplay}
            soundEnabled={soundEnabled}
          />
        </motion.div>
      </motion.article>

      {/* Gentle Footer */}
      <footer className="mt-8 mb-4 text-center text-xs text-[#24352F]/60 z-10">
        <p>Quran Khawani • Sunday, 1 November 2026 • 12:30 PM PKT</p>
      </footer>
    </div>
  );
};
