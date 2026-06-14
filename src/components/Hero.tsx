import { motion } from "framer-motion";
import CornerDecor from "./CornerDecor";
import Divider from "./Divider";
import Countdown from "./Countdown";
import coupleHeroBg from "../assets/coupleHeroBg.png";
import GaneshPhoto from "../assets/ganesh.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);
const WAIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.804a.5.5 0 0 0 .61.637l6.157-1.616A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.046-1.394l-.361-.214-3.741.981.999-3.648-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 py-20 overflow-hidden text-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26,8,0,0.88) 0%, rgba(26,8,0,0.70) 50%, rgba(26,8,0,0.88) 100%), url(${coupleHeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Inset gold border */}
      <div className="absolute inset-4 border border-gold/70 pointer-events-none" />
      <div className="absolute inset-7 border border-gold/20 pointer-events-none" />

      {/* Corner decorations */}
      <CornerDecor pos="tl" />
      <CornerDecor pos="tr" />
      <CornerDecor pos="bl" />
      <CornerDecor pos="br" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        <div className="rounded-full bg-maroon/50 p-1 mb-6">
          <img
            src={GaneshPhoto}
            alt="Ganesha"
            decoding="async"
            className="w-24 h-24 sm:w-24 sm:h-24 mx-auto rounded-full border-4 border-gold/80 object-cover shadow-lg animate-glowPulse"
          />
        </div>

        <motion.p
          {...fade(0)}
          className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4"
        >
          ✦ Srirasthu · Avighnunamashu · Shubhamastu ✦
        </motion.p>

        <motion.p
          {...fade(0.25)}
          className="font-playfair text-[11px] tracking-[0.35em] text-gold-muted uppercase mt-3 mb-1"
        >
          Wedding Invitation
        </motion.p>

        <motion.h1
          {...fade(0.35)}
          className="font-dancing text-white text-5xl sm:text-7xl leading-tight mb-1 drop-shadow-lg"
        >
          The Sharma Family
        </motion.h1>

        <motion.p
          {...fade(0.45)}
          className="font-crimson italic text-gold-muted text-sm sm:text-lg mb-4 max-w-xl"
        >
          Together with their families, invite you to celebrate their wedding
          and share in their joy.
        </motion.p>

        <Divider />

        {/* Names */}
        <motion.div
          {...fade(0.55)}
          className="flex flex-col items-center justify-center my-5"
        >
          <p className="font-crimson uppercase tracking-[0.3em] text-gold-muted text-xs mb-3">
            The Bride & Groom
          </p>

          <p className="font-dancing text-white text-6xl sm:text-8xl leading-none drop-shadow-lg">
            Aarav Sharma
          </p>

          <motion.span
            className="font-dancing text-gold text-5xl my-3 drop-shadow-lg"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ♡
          </motion.span>

          <p className="font-dancing text-white text-6xl sm:text-8xl leading-none drop-shadow-lg">
            Ananya Reddy
          </p>
        </motion.div>

        <Divider />

        <motion.div {...fade(0.65)} className="mt-5">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/40 rounded-full px-5 py-2 mb-4">
            <span className="text-gold text-lg">💍</span>
            <span className="font-crimson text-gold-light text-sm tracking-wide">
              Save The Date
            </span>
          </div>

          <p className="font-playfair text-gold-light text-2xl sm:text-3xl tracking-wide">
            Sunday, 115th February 2026
          </p>

          <p className="font-playfair text-white text-4xl sm:text-5xl font-bold mt-2 drop-shadow-lg">
            10:30 AM
          </p>

          <p className="font-crimson italic text-gold text-base mt-2">
            ✨ Followed by Lunch ✨
          </p>
        </motion.div>

        <motion.p
          {...fade(0.7)}
          className="font-crimson italic text-gold-muted text-sm sm:text-base mt-4"
        >
          Uttara Phalguni Nakshatram • Mithuna Lagnam
        </motion.p>

        <motion.p
          {...fade(0.75)}
          className="font-crimson italic text-gold-muted text-lg max-w-xl mx-auto mt-6 leading-relaxed"
        >
          “Two hearts, one journey, and a lifetime of beautiful memories waiting
          to begin.”
        </motion.p>

        {/* Countdown */}
        <motion.div {...fade(0.8)}>
          <Countdown />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fade(0.9)}
          className="flex gap-4 flex-wrap justify-center mt-8"
        >
          <a
            href="https://wa.me/919876543210?text=Congratulations%20on%20your%20wedding!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-full font-crimson text-base hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            <WAIcon /> Send Wishes
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 border border-gold text-gold-light px-7 py-3 rounded-full font-crimson text-base hover:bg-maroon/40 active:scale-95 transition-all backdrop-blur-sm"
          >
            <PhoneIcon /> Contact Family
          </a>
        </motion.div>
      </div>
    </section>
  );
}
