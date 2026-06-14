import { motion } from "framer-motion";
import Divider from "./Divider";

const EVENTS = [
  {
    date: "12 February 2026",
    time: "10:00 AM",
    title: "Family Gathering",
    desc: "A warm beginning with family and loved ones",
  },
  {
    date: "12 February 2026",
    time: "6:00 PM",
    title: "Engagement Ceremony",
    desc: "Celebrating the promise of forever",
  },
  {
    date: "13 February 2026",
    time: "11:00 AM",
    title: "Haldi Ceremony",
    desc: "A colorful celebration filled with joy",
  },
  {
    date: "13 February 2026",
    time: "5:00 PM",
    title: "Mehendi Ceremony",
    desc: "Traditional henna festivities with music",
  },
  {
    date: "13 February 2026",
    time: "8:00 PM",
    title: "Sangeet Night",
    desc: "Dance, music and unforgettable memories",
  },
  {
    date: "15th February 2026",
    time: "6:30 PM",
    title: "Grand Reception",
    desc: "Welcoming family and friends",
  },
  {
    date: "15th February 2026",
    time: "8:00 PM",
    title: "Dinner Celebration",
    desc: "A delightful evening feast",
  },
  {
    date: "15 February 2026",
    time: "10:30 AM",
    title: "Wedding Ceremony",
    desc: "The sacred union of two hearts",
    highlight: true,
  },
  {
    date: "15 February 2026",
    time: "12:00 PM",
    title: "Blessings & Lunch",
    desc: "Celebrating together as one family",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-dark py-20 px-5 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block bg-gold text-maroon-dark text-[11px] tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-4">
          Wedding Schedule
        </span>

        <h2 className="font-playfair text-4xl sm:text-5xl text-gold mb-3">
          Celebration Timeline
        </h2>

        <p className="font-crimson italic text-gold-muted text-base">
          Every beautiful moment leading to a lifetime of togetherness
        </p>

        <Divider light />
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent -translate-x-1/2" />

        {EVENTS.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            className={`relative flex items-center mb-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2 md:px-10">
              <div
                className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1
                ${
                  event.highlight
                    ? "bg-gold/10 border-gold shadow-[0_0_35px_rgba(212,175,55,0.25)]"
                    : "bg-dark-deep border-gold/20 hover:border-gold/50"
                }`}
              >
                <span className="block text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  {event.date}
                </span>

                <span className="block text-gold-light text-sm font-semibold mb-3">
                  {event.time}
                </span>

                <h3 className="font-playfair text-white text-xl sm:text-2xl mb-2">
                  {event.title}
                </h3>

                <p className="font-crimson italic text-gold-muted">
                  {event.desc}
                </p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
              <div
                className={`rounded-full border-4 border-dark transition-all
                ${
                  event.highlight
                    ? "w-6 h-6 bg-gold shadow-[0_0_20px_rgba(212,175,55,0.8)]"
                    : "w-4 h-4 bg-gold-light"
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20"
      >
        <div className="max-w-3xl mx-auto bg-dark-deep border border-gold/30 rounded-3xl px-8 py-10 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          <span className="block text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Your Special Day
          </span>

          <h3 className="font-playfair text-white text-3xl sm:text-4xl leading-tight mb-4">
            Beautiful Moments,
            <br />
            Forever Remembered
          </h3>

          <p className="font-crimson italic text-gold-muted max-w-xl mx-auto leading-relaxed">
            This timeline is fully customizable with engagement ceremonies,
            haldi, mehendi, sangeet, reception, wedding rituals, venue details,
            and all the memorable moments that make your celebration unique.
          </p>

          <div className="text-gold text-5xl mt-6">♡</div>
        </div>
      </motion.div>
    </section>
  );
}