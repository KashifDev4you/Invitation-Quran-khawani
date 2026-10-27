import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowLeft, MailOpen } from 'lucide-react';
import { IslamicStar, FloatingGoldDust, IslamicCorner } from './IslamicPattern';
import { playChimeSound, playPaperSound, playSoftClick } from '../utils/audio';

interface EnvelopeRevealProps {
  visitorName: string;
  onOpenComplete: () => void;
  onEditName: () => void;
  soundEnabled: boolean;
}

export const EnvelopeReveal: React.FC<EnvelopeRevealProps> = ({
  visitorName,
  onOpenComplete,
  onEditName,
  soundEnabled,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [animationStep, setAnimationStep] = useState<0 | 1 | 2 | 3>(0);
  const prefersReducedMotion = useReducedMotion();

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    if (soundEnabled) {
      playSoftClick();
    }

    if (prefersReducedMotion) {
      // Immediate transition for accessibility
      if (soundEnabled) playChimeSound();
      onOpenComplete();
      return;
    }

    // Step 1: Seal glow & break
    setAnimationStep(1);
    if (soundEnabled) playPaperSound();

    // Trigger subtle gold confetti sparkles
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#D6B66C', '#F2EBDD', '#145A45', '#E5C578'],
        disableForReducedMotion: true,
      });
    } catch {
      // Ignore if confetti not supported
    }

    // Step 2: Flap unfolds
    setTimeout(() => {
      setAnimationStep(2);
    }, 450);

    // Step 3: Letter slides out & chime plays
    setTimeout(() => {
      setAnimationStep(3);
      if (soundEnabled) playChimeSound();
    }, 950);

    // Step 4: Finish transition to letter
    setTimeout(() => {
      onOpenComplete();
    }, 1800);
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-between px-4 py-8 md:py-12 overflow-hidden">
      <FloatingGoldDust />

      {/* Top Bar with back/edit name button */}
      <div className="w-full max-w-xl flex items-center justify-between z-10">
        <button
          onClick={() => {
            if (soundEnabled) playSoftClick();
            onEditName();
          }}
          disabled={isOpening}
          type="button"
          className="flex items-center gap-1.5 text-xs sm:text-sm text-[#145A45] hover:text-[#0B382D] bg-[#F2EBDD]/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#D6B66C]/40 transition-all hover:border-[#D6B66C] shadow-xs cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
        >
          <ArrowLeft size={15} />
          <span>Naam Badlein</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-[#145A45] font-semibold bg-[#145A45]/10 px-3 py-1 rounded-full border border-[#D6B66C]/40">
          <IslamicStar size={12} className="text-[#D6B66C]" />
          <span>Khaas Lifafa</span>
        </div>
      </div>

      {/* Header text with personalized greeting */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg text-center my-4 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-[#145A45] font-semibold">
          Dawat-nama Baraye
        </span>
        <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-[#0B382D] font-bold mt-1 mb-2 tracking-tight">
          <span className="text-[#145A45] break-words">{visitorName}</span>, aap ke liye ek khaas paighaam hai.
        </h2>
        <p className="text-xs sm:text-sm text-[#24352F]/75 max-w-md mx-auto">
          Neeche diye gaye button par click karein aur apna dawat-nama kholiye.
        </p>
      </motion.div>

      {/* Interactive 3D Envelope Container */}
      <div className="relative my-auto w-full max-w-md flex flex-col items-center justify-center z-20 py-6">
        <motion.div
          animate={
            isOpening
              ? { scale: 1.02, y: -10 }
              : { y: [0, -8, 0] }
          }
          transition={
            isOpening
              ? { duration: 0.5 }
              : { repeat: Infinity, duration: 4.5, ease: 'easeInOut' }
          }
          className="relative w-[320px] sm:w-[380px] h-[220px] sm:h-[250px] select-none"
          style={{ perspective: 1000 }}
        >
          {/* Outer Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D6B66C]/25 via-[#145A45]/20 to-[#D6B66C]/25 rounded-3xl blur-xl" />

          {/* Envelope Main Shell */}
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#145A45] to-[#0B382D] shadow-2xl border-2 border-[#D6B66C]/60 overflow-visible flex items-center justify-center">
            
            {/* Letter Paper Emerging from Inside */}
            <motion.div
              initial={false}
              animate={
                animationStep >= 3
                  ? { y: -140, scale: 1.08, opacity: 1 }
                  : animationStep === 2
                  ? { y: -45, scale: 0.98, opacity: 0.95 }
                  : { y: 0, scale: 0.95, opacity: 0 }
              }
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-4 top-4 bottom-4 bg-[#FBF7ED] rounded-xl shadow-2xl border border-[#D6B66C] p-4 flex flex-col items-center justify-center text-center z-10 pointer-events-none"
            >
              <IslamicStar size={16} className="text-[#D6B66C] mb-1" />
              <p className="font-arabic text-sm text-[#0B382D]">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <h4 className="font-serif-display text-lg font-bold text-[#0B382D] mt-1">
                Quran Khawani
              </h4>
              <p className="text-[11px] text-[#145A45] font-semibold mt-1">
                Baraye: {visitorName}
              </p>
              <div className="mt-2 w-16 h-0.5 bg-[#D6B66C]/50 rounded-full" />
            </motion.div>

            {/* Back Pocket Texture / Interior Accent */}
            <div className="absolute inset-2 rounded-xl bg-[#092B23] border border-[#D6B66C]/20 pointer-events-none" />

            {/* Lower Front Flaps (V-Shape Pocket) */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden">
              <svg viewBox="0 0 380 250" fill="none" className="w-full h-full">
                {/* Left side triangle fold */}
                <path d="M0 0 L190 145 L0 250 Z" fill="#114C3B" opacity="0.95" />
                {/* Right side triangle fold */}
                <path d="M380 0 L190 145 L380 250 Z" fill="#0D4132" opacity="0.95" />
                {/* Bottom flap triangle */}
                <path
                  d="M0 250 L190 135 L380 250 Z"
                  fill="#0B382D"
                  stroke="#D6B66C"
                  strokeWidth="0.8"
                  strokeOpacity="0.4"
                />
              </svg>
            </div>

            {/* Recipient Calligraphy Display on Front of Envelope */}
            <div
              className={`absolute bottom-6 inset-x-8 z-30 text-center pointer-events-none transition-opacity duration-300 ${
                animationStep >= 2 ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <p className="text-[11px] tracking-widest uppercase text-[#D6B66C] font-semibold">
                Janab / Mohtaram
              </p>
              <p className="font-serif-display text-xl sm:text-2xl text-[#FBF7ED] font-bold drop-shadow-md truncate px-2">
                {visitorName}
              </p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="w-8 h-[1px] bg-[#D6B66C]/60" />
                <IslamicStar size={10} className="text-[#D6B66C]" />
                <span className="w-8 h-[1px] bg-[#D6B66C]/60" />
              </div>
            </div>

            {/* Top Triangular Flap with 3D Rotate */}
            <motion.div
              initial={false}
              animate={
                animationStep >= 2
                  ? { rotateX: 180, zIndex: 0 }
                  : { rotateX: 0, zIndex: 40 }
              }
              transition={{ duration: 0.65, ease: 'easeInOut' }}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
              }}
              className="absolute inset-x-0 top-0 h-[140px] pointer-events-none"
            >
              <svg viewBox="0 0 380 140" fill="none" className="w-full h-full drop-shadow-md">
                <path
                  d="M0 0 L190 130 L380 0 Z"
                  fill="#145A45"
                  stroke="#D6B66C"
                  strokeWidth="1.2"
                  strokeOpacity="0.7"
                />
              </svg>

              {/* Gold Wax Seal attached to the flap tip */}
              <motion.div
                animate={
                  animationStep === 1
                    ? { scale: [1, 1.25, 0.95], rotate: [0, 10, -10, 0] }
                    : animationStep >= 2
                    ? { opacity: 0 }
                    : {}
                }
                transition={{ duration: 0.4 }}
                className="absolute top-[96px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#99732B] via-[#E4CA88] to-[#99732B] shadow-xl border-2 border-[#FFE8AA] flex items-center justify-center animate-seal-glow cursor-pointer pointer-events-auto"
                onClick={handleOpenEnvelope}
                title="Khat Kholein"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#7A5B1E] flex items-center justify-center bg-gradient-to-br from-[#C49E4A] to-[#8C6420]">
                  <IslamicStar size={20} className="text-[#FBF7ED]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Button: Khat Kholein */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 w-full flex flex-col items-center gap-3 z-30"
        >
          <button
            onClick={handleOpenEnvelope}
            disabled={isOpening}
            type="button"
            className="w-full max-w-xs py-4 px-8 bg-[#145A45] hover:bg-[#0B382D] text-[#FBF7ED] text-base sm:text-lg font-medium rounded-xl shadow-xl hover:shadow-2xl border border-[#D6B66C]/70 flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed focus:outline-hidden focus:ring-4 focus:ring-[#D6B66C]/40"
          >
            {isOpening ? (
              <>
                <Sparkles size={18} className="animate-spin text-[#D6B66C]" />
                <span>Khat Khul Raha Hai...</span>
              </>
            ) : (
              <>
                <span>Khat Kholein 💌</span>
                <Sparkles size={18} className="text-[#D6B66C]" />
              </>
            )}
          </button>

          <p className="text-xs text-[#24352F]/70">
            {isOpening ? 'Ek lamha...' : 'Lifafa kholne ke liye button par click karein'}
          </p>
        </motion.div>
      </div>

      {/* Footer info */}
      <div className="z-10" />
    </div>
  );
};
