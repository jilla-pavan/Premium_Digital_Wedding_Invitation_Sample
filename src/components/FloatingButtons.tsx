import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WAIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.804a.5.5 0 0 0 .61.637l6.157-1.616A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.046-1.394l-.361-.214-3.741.981.999-3.648-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

function WaveRings({ color }: { color: string }) {
  return (
    <>
      {[0, 0.8, 1.6].map((delay) => (
        <motion.span
          key={delay}
          animate={{ scale: [1, 1.5], opacity: [0, 0.5, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeOut",
            delay,
            repeatDelay: 0,
          }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ backgroundColor: color }}
        />
      ))}
    </>
  );
}

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Call — bottom left */}
      <div className="fixed bottom-6 left-5 z-50">
        <div className="relative">
          <WaveRings color="#7B1C1C" />
          <a
            href="tel:+919123456789"
            className="relative flex items-center gap-2 bg-maroon border border-gold/60 text-gold-light pl-3 pr-4 py-2.5 rounded-full shadow-[0_4px_20px_rgba(123,28,28,0.5)]"
            aria-label="Call us"
          >
            <PhoneIcon />
            <span className="font-crimson text-sm font-semibold hidden sm:inline whitespace-nowrap">
              Call Now
            </span>
          </a>
        </div>
      </div>

      {/* WhatsApp + scroll-to-top stacked — bottom right */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {visible && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 rounded-full bg-dark-deep border border-gold/60 text-gold flex items-center justify-center shadow-lg hover:bg-maroon transition-colors"
              aria-label="Scroll to top"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        <div className="relative">
          <WaveRings color="#25D366" />
          <a
            href="https://wa.me/919123456789?text=Congratulations%20on%20aarav%20%26%20ananya%20wedding!%20We%20will%20definitely%20attend!"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-2.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)]"
            aria-label="WhatsApp Wishes"
          >
            <WAIcon />
            <span className="font-crimson text-sm font-semibold hidden sm:inline whitespace-nowrap">
              WhatsApp Wishes
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
