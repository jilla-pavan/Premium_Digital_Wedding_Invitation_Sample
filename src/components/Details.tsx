import { motion } from "framer-motion";
import Divider from "./Divider";

const ROWS = [
  {
    label: "Date",
    value: "Saturday, 4th July 2026",
    sub: "",
    highlight: true,
  },
  {
    label: "Muhurtham",
    value: "1:48 AM",
    sub: "Auspicious Wedding Ceremony",
    highlight: true,
  },
  {
    label: "Bride",
    value: "ananya",
    sub: "D/o Sri Chittala Srinivasa Rao & Smt. Padmavathi",
    highlight: false,
  },
  {
    label: "Groom",
    value: "Naga Venkata Krishna Sai aarav",
    sub: "S/o Sri Dasari Adinarayana Rao & Smt. Sarada Devi",
    highlight: false,
  },
  {
    label: "Location",
    value: "Tadepalligudem",
    sub: "West Godavari District, Andhra Pradesh",
    highlight: false,
  },
];

export default function Details() {
  return (
    <section id="invite" className="bg-cream-soft py-16 px-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-maroon text-gold-light text-[11px] tracking-[0.2em] uppercase px-5 py-1.5 rounded-full mb-4">
          Wedding Details
        </span>

        <h2 className="font-playfair text-3xl sm:text-4xl text-maroon-dark mb-2">
          Sumuhurtham
        </h2>

        <p className="font-crimson italic text-[#7a5030] text-base">
          We cordially invite you to join us on our special day
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto mt-8 bg-white border border-gold/60 rounded-3xl p-8 shadow-[0_8px_40px_rgba(123,28,28,0.12)]"
      >
        <p className="font-dancing text-maroon text-2xl mb-2">
          Srirasthu · Shubhamastu
        </p>

        <p className="font-crimson italic text-[#9a6a3a] text-sm mb-5">
          With the blessings of our beloved families
        </p>

        <Divider />

        {ROWS.map(({ label, value, sub, highlight }) => (
          <div
            key={label}
            className="flex justify-between items-start border-t border-[#f1dfbb] py-4 gap-4"
          >
            <span className="font-crimson text-[#9a6a3a] text-xs tracking-[0.2em] uppercase min-w-[110px]">
              {label}
            </span>

            <div className="text-right flex-1">
              <p
                className={`font-playfair text-lg leading-snug ${
                  highlight ? "text-maroon font-bold" : "text-maroon-dark"
                }`}
              >
                {value}
              </p>

              {sub && (
                <p className="font-crimson italic text-[#9a6a3a] text-sm mt-1">
                  {sub}
                </p>
              )}
            </div>
          </div>
        ))}

        <div className="mt-6 pt-6 border-t border-[#f1dfbb]">
          <p className="font-crimson italic text-[#7a5030] leading-relaxed">
            We request the honor of your presence and blessings as we begin our
            new journey together. Your gracious company will make this
            celebration truly memorable.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
