import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, User, Sparkles, AlertCircle } from 'lucide-react';
import { IslamicStar, FloatingGoldDust, IslamicCorner } from './IslamicPattern';
import { playSoftClick } from '../utils/audio';

interface NameEntryScreenProps {
  initialName?: string;
  onSubmitName: (name: string) => void;
  onBack: () => void;
  soundEnabled: boolean;
}

export const NameEntryScreen: React.FC<NameEntryScreenProps> = ({
  initialName = '',
  onSubmitName,
  onBack,
  soundEnabled,
}) => {
  const [name, setName] = useState(initialName);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto focus the input field gently
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();

    if (!trimmed) {
      setError('Barahe karam apna naam darj karein.');
      inputRef.current?.focus();
      return;
    }

    if (trimmed.length < 2) {
      setError('Naam kam az kam 2 huroof par mushtamil hona chahiye.');
      inputRef.current?.focus();
      return;
    }

    if (soundEnabled) {
      playSoftClick();
    }
    setError(null);
    onSubmitName(trimmed);
  };

  const handleBack = () => {
    if (soundEnabled) playSoftClick();
    onBack();
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-between px-4 py-8 md:py-12 overflow-hidden">
      <FloatingGoldDust />

      {/* Top Navigation */}
      <div className="w-full max-w-xl flex items-center justify-between z-10">
        <button
          onClick={handleBack}
          type="button"
          className="flex items-center gap-2 text-sm text-[#145A45] hover:text-[#0B382D] bg-[#F2EBDD]/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#D6B66C]/40 transition-all hover:border-[#D6B66C] shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#145A45]"
        >
          <ArrowLeft size={16} />
          <span>Wapas Jayen</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-[#24352F]/70 font-medium">
          <IslamicStar size={12} className="text-[#D6B66C]" />
          <span>Marhala 1 / 3</span>
        </div>
      </div>

      {/* Main Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg mx-auto my-auto z-10"
      >
        <div className="relative bg-[#FBF7ED] border border-[#D6B66C]/60 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-xs">
          {/* Decorative Corner Ornaments */}
          <IslamicCorner position="top-left" className="top-2 left-2 text-[#D6B66C]/70" />
          <IslamicCorner position="top-right" className="top-2 right-2 text-[#D6B66C]/70" />
          <IslamicCorner position="bottom-left" className="bottom-2 left-2 text-[#D6B66C]/70" />
          <IslamicCorner position="bottom-right" className="bottom-2 right-2 text-[#D6B66C]/70" />

          {/* Heading */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#145A45]/10 border border-[#D6B66C]/50 flex items-center justify-center text-[#145A45]">
              <User size={24} />
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B382D] font-bold mb-3 tracking-tight">
              Pehle apna naam batayein.
            </h2>
            <p className="text-sm sm:text-base text-[#24352F]/80 leading-relaxed max-w-sm mx-auto">
              Taake hum aap ke liye khaas paighaam tayyar kar sakein.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="visitor-name"
                className="block text-xs uppercase tracking-wider text-[#145A45] font-semibold mb-2"
              >
                Aap Ka Naam / Tashreef Aawari
              </label>

              <div className="relative">
                <input
                  ref={inputRef}
                  id="visitor-name"
                  type="text"
                  maxLength={60}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Misal: Kashif Khan, فاطمہ بیگم..."
                  className={`w-full px-4 py-3.5 sm:py-4 rounded-xl bg-[#F2EBDD]/60 border ${
                    error ? 'border-red-400 focus:ring-red-300' : 'border-[#D6B66C]/60 focus:border-[#145A45]'
                  } text-[#0B382D] placeholder-[#24352F]/40 text-base sm:text-lg focus:outline-hidden focus:ring-2 focus:ring-[#145A45]/30 transition-all font-medium`}
                  aria-invalid={error ? 'true' : 'false'}
                  aria-describedby={error ? 'name-error' : undefined}
                />
              </div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    id="name-error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-1.5 text-xs text-red-600 mt-2 font-medium"
                  >
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#145A45] hover:bg-[#0B382D] text-[#FBF7ED] text-base sm:text-lg font-medium rounded-xl shadow-lg hover:shadow-xl border border-[#D6B66C]/60 flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-[#D6B66C]/40"
            >
              <span>Mera Khat Tayyar Karein</span>
              <Sparkles size={18} className="text-[#D6B66C]" />
            </button>
          </form>

          {/* Reassurance note */}
          <p className="text-center text-xs text-[#24352F]/60 mt-6">
            Ye naam sirf aap ke dawat-name ko sajane ke liye istemaal hoga.
          </p>
        </div>
      </motion.div>

      {/* Footer spacer */}
      <div className="z-10" />
    </div>
  );
};
