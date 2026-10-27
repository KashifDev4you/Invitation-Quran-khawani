import React from 'react';
import { Calendar, Clock, MapPin, User, Bookmark, ExternalLink } from 'lucide-react';
import { EVENT_CONFIG } from '../config/eventConfig';
import { IslamicStar } from './IslamicPattern';

export const EventDetails: React.FC = () => {
  return (
    <div className="w-full my-6 bg-[#F2EBDD]/70 border border-[#D6B66C]/60 rounded-2xl p-5 sm:p-7 shadow-xs">
      <div className="flex items-center justify-between border-b border-[#D6B66C]/40 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <IslamicStar size={16} className="text-[#145A45]" />
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B382D]">
            Tafseelat-e-Taqreeb
          </h3>
        </div>
        <span className="text-[11px] uppercase tracking-wider text-[#145A45] font-semibold bg-[#145A45]/10 px-2.5 py-0.5 rounded-full">
          Event Details
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-left">
        {/* Event Title */}
        <div className="flex items-start gap-3 bg-[#FBF7ED]/90 p-3.5 rounded-xl border border-[#D6B66C]/30">
          <div className="w-9 h-9 rounded-lg bg-[#145A45]/10 flex items-center justify-center text-[#145A45] shrink-0 mt-0.5">
            <Bookmark size={18} />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#145A45] font-semibold">
              Event
            </span>
            <span className="text-base font-semibold text-[#0B382D]">
              {EVENT_CONFIG.title}
            </span>
          </div>
        </div>

        {/* Purpose */}
        <div className="flex items-start gap-3 bg-[#FBF7ED]/90 p-3.5 rounded-xl border border-[#D6B66C]/30">
          <div className="w-9 h-9 rounded-lg bg-[#145A45]/10 flex items-center justify-center text-[#145A45] shrink-0 mt-0.5">
            <IslamicStar size={18} className="text-[#145A45]" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#145A45] font-semibold">
              Purpose
            </span>
            <span className="text-base font-semibold text-[#0B382D]">
              {EVENT_CONFIG.purpose}
            </span>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start gap-3 bg-[#FBF7ED]/90 p-3.5 rounded-xl border border-[#D6B66C]/30">
          <div className="w-9 h-9 rounded-lg bg-[#145A45]/10 flex items-center justify-center text-[#145A45] shrink-0 mt-0.5">
            <Calendar size={18} />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#145A45] font-semibold">
              Date
            </span>
            <span className="text-base font-semibold text-[#0B382D]">
              {EVENT_CONFIG.formattedDate}
            </span>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-start gap-3 bg-[#FBF7ED]/90 p-3.5 rounded-xl border border-[#D6B66C]/30">
          <div className="w-9 h-9 rounded-lg bg-[#145A45]/10 flex items-center justify-center text-[#145A45] shrink-0 mt-0.5">
            <Clock size={18} />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#145A45] font-semibold">
              Time
            </span>
            <span className="text-base font-semibold text-[#0B382D]">
              {EVENT_CONFIG.formattedTime}
            </span>
          </div>
        </div>

        {/* Host */}
        <div className="flex items-start gap-3 bg-[#FBF7ED]/90 p-3.5 rounded-xl border border-[#D6B66C]/30 md:col-span-2">
          <div className="w-9 h-9 rounded-lg bg-[#145A45]/10 flex items-center justify-center text-[#145A45] shrink-0 mt-0.5">
            <User size={18} />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#145A45] font-semibold">
              Host / Mezbaan
            </span>
            <span className="text-base font-semibold text-[#0B382D]">
              {EVENT_CONFIG.host}
            </span>
          </div>
        </div>

        {/* Venue (with mobile-friendly wrapping and Google Maps Link) */}
        <div className="flex flex-col gap-2 bg-[#FBF7ED]/90 p-3.5 sm:p-4 rounded-xl border border-[#D6B66C]/30 md:col-span-2">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#145A45]/10 flex items-center justify-center text-[#145A45] shrink-0 mt-0.5">
              <MapPin size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-xs uppercase tracking-wider text-[#145A45] font-semibold">
                Venue / Maqaam
              </span>
              <p className="text-sm sm:text-base font-medium text-[#0B382D] break-words leading-relaxed mt-0.5">
                {EVENT_CONFIG.venue}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#D6B66C]/20 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] text-[#24352F]/60 italic">
              Google Maps search based on the provided address
            </span>
            <a
              href={EVENT_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#145A45] hover:text-[#0B382D] underline underline-offset-4 decoration-[#D6B66C] hover:decoration-[#145A45] transition-colors"
            >
              <span>Google Maps par Rasta Dekhein</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
