import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, CheckCircle2, X } from 'lucide-react';
import { IslamicStar, IslamicCorner } from './IslamicPattern';

interface AcceptModalProps {
  isOpen: boolean;
  onClose: () => void;
  visitorName: string;
}

export const AcceptModal: React.FC<AcceptModalProps> = ({
  isOpen,
  onClose,
  visitorName,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B382D]/75 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-md bg-[#FBF7ED] border-2 border-[#D6B66C] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-center"
          >
            {/* Decorative Corner Ornaments */}
            <IslamicCorner position="top-left" className="top-2 left-2 text-[#D6B66C]/60" />
            <IslamicCorner position="top-right" className="top-2 right-2 text-[#D6B66C]/60" />
            <IslamicCorner position="bottom-left" className="bottom-2 left-2 text-[#D6B66C]/60" />
            <IslamicCorner position="bottom-right" className="bottom-2 right-2 text-[#D6B66C]/60" />

            {/* Close button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-4 right-4 text-[#24352F]/60 hover:text-[#0B382D] p-1.5 rounded-full hover:bg-[#F2EBDD] transition-colors cursor-pointer"
              aria-label="Band karein"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#145A45]/15 border-2 border-[#D6B66C] flex items-center justify-center text-[#145A45] shadow-inner">
              <Heart size={30} className="fill-[#145A45] text-[#145A45] animate-pulse" />
            </div>

            {/* Islamic Heading */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#145A45] font-semibold mb-1">
              <IslamicStar size={13} className="text-[#D6B66C]" />
              <span>Khush Aamdeed</span>
              <IslamicStar size={13} className="text-[#D6B66C]" />
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0B382D] mb-4">
              {visitorName ? `${visitorName}, JazakAllah Khair!` : 'JazakAllah Khair!'}
            </h3>

            {/* Exact Required Confirmation Message */}
            <div className="bg-[#F2EBDD]/80 rounded-2xl p-4 sm:p-5 border border-[#D6B66C]/50 mb-5">
              <p className="text-base sm:text-lg text-[#0B382D] font-medium leading-relaxed">
                &ldquo;JazakAllah Khair! Aap ki shirkat ka intezar rahega. Allah aap ko ajr ata farmaye. Ameen.&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-[#145A45] bg-[#145A45]/10 py-2 px-3 rounded-lg mb-6">
              <CheckCircle2 size={15} />
              <span>Aap ki shirkat ki niyyat is screen par mehfooz kar li gayi hai.</span>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="w-full py-3.5 px-6 bg-[#145A45] hover:bg-[#0B382D] text-[#FBF7ED] text-base font-semibold rounded-xl shadow-md border border-[#D6B66C]/60 transition-all cursor-pointer"
            >
              Shukriya (Ameen)
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
