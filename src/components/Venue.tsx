import { motion } from "framer-motion";
import Divider from "./Divider";

const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const INFO = [
  {
    Icon: MapPinIcon,
    title: "Venue",
    value: "Grand Royal Palace",
    description:
      "A luxurious destination for weddings, receptions and celebrations.",
  },
  {
    Icon: ClockIcon,
    title: "Reception",
    value: "15th February 2026",
    description: "6:00 PM onwards",
  },
  {
    Icon: ClockIcon,
    title: "Wedding Ceremony",
    value: "15 February 2026",
    description: "10:30 AM onwards",
  },
  {
    Icon: PhoneIcon,
    title: "Custom Website",
    value: "Fully Personalized",
    description:
      "Designed uniquely for your wedding, engagement or special event.",
  },
];

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative bg-dark overflow-hidden py-20 px-5 text-center"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#d4af37_1px,transparent_1px)] bg-[length:24px_24px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <span className="inline-block bg-gold text-maroon-dark text-[11px] tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-5">
          Venue Showcase
        </span>

        <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-gold mb-4">
          Grand Royal Palace
        </h2>

        <p className="font-crimson italic text-gold-muted text-lg max-w-2xl mx-auto leading-relaxed">
          Showcase your venue location, directions, event timings and guest
          information in a beautiful and elegant way.
        </p>
      </motion.div>

      <Divider light />

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl mx-auto mt-8 overflow-hidden rounded-3xl border border-gold/40 shadow-[0_0_40px_rgba(212,175,55,0.12)]"
      >
        <iframe
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          title="Venue Location"
        />
      </motion.div>

      {/* Information Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative z-10 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto mt-10"
      >
        {INFO.map(({ Icon, title, value, description }) => (
          <div
            key={title}
            className="bg-dark-deep border border-gold/20 rounded-3xl p-6 text-left hover:border-gold/60 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                <Icon />
              </div>

              <div>
                <p className="uppercase tracking-[0.25em] text-xs text-gold-muted mb-2">
                  {title}
                </p>

                <h3 className="font-playfair text-xl text-gold-light">
                  {value}
                </h3>

                <p className="font-crimson text-gold-muted mt-2 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto mt-14"
      >
        <p className="font-crimson italic text-xl md:text-2xl text-gold-muted leading-relaxed">
          “Every celebration deserves a beautiful destination, and every
          destination deserves a beautiful website.”
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 mt-10"
      >
        <a
          href="#"
          className="inline-flex items-center justify-center gap-3 bg-gold text-maroon-dark px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
        >
          <MapPinIcon />
          View Directions
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-3 border border-gold/50 text-gold-light px-8 py-3 rounded-full hover:bg-gold/10 transition-all duration-300"
        >
          <PhoneIcon />
          Contact Organizer
        </a>
      </motion.div>
    </section>
  );
}
