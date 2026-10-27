import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Mail, Volume2, VolumeX } from 'lucide-react';
import { HangingLantern, IslamicStar, FloatingGoldDust } from './IslamicPattern';
import { playSoftClick } from '../utils/audio';

interface WelcomeScreenProps {
  onStart: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStart,
  soundEnabled,
  onToggleSound,
}) => {
  const handleStart = () => {
    if (soundEnabled) playSoftClick();
    onStart();
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-between px-4 py-8 md:py-12 overflow-hidden">
      <FloatingGoldDust />

      {/* Top Bar with Sound Toggle and Bismillah Calligraphy */}
      <div className="w-full max-w-2xl flex items-center justify-between z-10">
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#145A45] bg-[#F2EBDD]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#D6B66C]/40 shadow-xs">
          <IslamicStar size={14} className="text-[#D6B66C]" />
          <span>Dawat-e-Khair</span>
        </div>

        <button
          onClick={onToggleSound}
          type="button"
          aria-label={soundEnabled ? 'Mute sound' : 'Unmute sound'}
          className="flex items-center gap-1.5 text-xs text-[#24352F]/80 hover:text-[#0B382D] bg-[#F2EBDD]/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#D6B66C]/30 transition-all hover:border-[#D6B66C] shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#145A45]"
        >
          {soundEnabled ? (
            <>
              <Volume2 size={15} className="text-[#145A45]" />
              <span className="hidden sm:inline">Awaaz On</span>
            </>
          ) : (
            <>
              <VolumeX size={15} className="text-stone-400" />
              <span className="hidden sm:inline">Awaaz Muted</span>
            </>
          )}
        </button>
      </div>

      {/* Decorative Hanging Lanterns on left and right */}
      <div className="absolute top-0 left-3 md:left-12 pointer-events-none hidden xs:block">
        <div className="animate-float-slow">
          <HangingLantern delay={0} />
        </div>
      </div>
      <div className="absolute top-0 right-3 md:right-12 pointer-events-none hidden xs:block">
        <div className="animate-float-reverse">
          <HangingLantern delay={1.5} />
        </div>
      </div>

      {/* Main Content Card / Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-xl mx-auto flex flex-col items-center text-center my-auto z-10 px-2"
      >
        {/* Subtle Ornamental Badge */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#145A45]/10 border border-[#D6B66C]/50"
        >
          <IslamicStar size={16} className="text-[#D6B66C]" />
          <span className="text-xs uppercase tracking-widest text-[#145A45] font-semibold">
            Bismillahir Rahmanir Raheem
          </span>
          <IslamicStar size={16} className="text-[#D6B66C]" />
        </motion.div>

        {/* Traditional Arabic Calligraphy for Bismillah */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-arabic text-2xl md:text-3xl text-[#0B382D] mb-5 tracking-wide select-none"
          dir="rtl"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        {/* Greeting Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#0B382D] font-bold tracking-tight mb-4"
        >
          Assalamu Alaikum!
        </motion.h1>

        {/* Intrigued Subheading / Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-[#24352F]/90 max-w-md mx-auto leading-relaxed mb-8 font-normal"
        >
          Aap ke liye kuch khaas hai. Ek chhota sa paighaam aap ka intezar kar raha hai.
        </motion.p>

        {/* Visual Teaser: Floating Envelope Illustration */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative mb-8 cursor-pointer group"
          onClick={handleStart}
        >
          {/* Ambient Glow behind envelope */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D6B66C]/20 via-[#145A45]/15 to-[#D6B66C]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

          {/* Envelope Graphic */}
          <div className="relative w-64 h-40 sm:w-72 sm:h-44 bg-gradient-to-br from-[#145A45] to-[#0B382D] rounded-2xl shadow-xl border border-[#D6B66C]/50 flex flex-col items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
            {/* Geometric Top Flap lines */}
            <div className="absolute inset-x-0 top-0 h-24 overflow-hidden rounded-t-2xl pointer-events-none">
              <svg viewBox="0 0 288 96" fill="none" className="w-full h-full">
                <path d="M0 0 L144 80 L288 0 Z" fill="#0E4434" stroke="#D6B66C" strokeWidth="1" strokeOpacity="0.5" />
              </svg>
            </div>

            {/* Gold Wax Seal on Envelope */}
            <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-tr from-[#B38F46] via-[#E4CA88] to-[#99732B] shadow-lg border-2 border-[#FFE8AA] flex items-center justify-center animate-seal-glow">
              <IslamicStar size={24} className="text-[#0B382D]" />
            </div>

            <div className="relative z-10 mt-3 flex items-center gap-1.5 text-xs font-serif-display tracking-widest text-[#E8D4A2] uppercase">
              <Mail size={12} className="text-[#D6B66C]" />
              <span>Khaas Paighaam</span>
            </div>
          </div>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="w-full flex justify-center"
        >
          <button
            onClick={handleStart}
            type="button"
            className="w-full max-w-xs sm:w-auto px-8 py-4 bg-[#145A45] hover:bg-[#0B382D] text-[#FBF7ED] text-base md:text-lg font-medium rounded-xl shadow-lg hover:shadow-xl border border-[#D6B66C]/60 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-[#D6B66C]/40"
          >
            <span>Surprise Dekhein ✨</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle Footer Note */}
      <div className="text-center text-xs text-[#24352F]/60 mt-6 z-10">
        <p className="font-serif-display tracking-wider">
          Quran Khawani • Mehfil-e-Tilawat-o-Dua
        </p>
      </div>
    </div>
  );
};
