import { motion } from "framer-motion";
import Divider from "./Divider";

const FAMILY_MEMBERS = [
  {
    name: "Rajesh Sharma",
    role: "Groom's Father",
  },
  {
    name: "Sunita Sharma",
    role: "Groom's Mother",
  },
  {
    name: "Ramesh Reddy",
    role: "Bride's Father",
  },
  {
    name: "Lakshmi Reddy",
    role: "Bride's Mother",
  },

  // Duplicate for seamless marquee
  {
    name: "Rajesh Sharma",
    role: "Groom's Father",
  },
  {
    name: "Sunita Sharma",
    role: "Groom's Mother",
  },
  {
    name: "Ramesh Reddy",
    role: "Bride's Father",
  },
  {
    name: "Lakshmi Reddy",
    role: "Bride's Mother",
  },
];

export default function Welcome() {
  return (
    <section className="bg-cream py-20 px-5 text-center" id="family">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-maroon text-gold-light text-[11px] tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-4">
          Welcome To Our Celebration
        </span>

        <h2 className="font-playfair text-3xl sm:text-5xl text-maroon-dark mb-3">
          A Beautiful Beginning
        </h2>

        <p className="font-crimson italic text-[#7a5030] text-base sm:text-lg">
          Together with our families, we invite you to share in our joy
        </p>
      </motion.div>

      <Divider />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <p className="font-crimson text-[#5a3a1a] text-lg sm:text-xl leading-loose">
          With hearts full of love and gratitude,
          <span className="text-maroon font-semibold"> Aarav Sharma </span>
          and
          <span className="text-maroon font-semibold"> Ananya Reddy </span>
          invite you to celebrate the beginning of their forever journey.
        </p>

        <p className="font-crimson text-[#7a5030] text-base sm:text-lg mt-6 leading-relaxed">
          Your presence will make this special day even more memorable as we
          gather with family and friends to share laughter, blessings, and
          happiness.
        </p>

        <div className="w-24 h-px bg-gold mx-auto my-8" />

        <p className="font-crimson italic text-[#9a6a3a] text-lg max-w-2xl mx-auto">
          "Two families become one, two hearts become one, and a beautiful
          journey begins."
        </p>
      </motion.div>

      {/* Family Members */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="font-playfair text-2xl md:text-4xl text-maroon-dark text-center mb-3">
          Our Families
        </h3>

        <p className="font-crimson text-[#9a6a3a] text-center italic mb-10">
          Celebrating together with love, blessings and happiness
        </p>

        <div className="overflow-hidden max-w-5xl mx-auto relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-r from-cream to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-l from-cream to-transparent" />

          <div className="family-marquee flex gap-5 w-max pb-4">
            {FAMILY_MEMBERS.map(({ name, role }, index) => (
              <div
                key={index}
                className="min-w-[240px] bg-white border border-[#e8d5b0] rounded-2xl px-6 py-7 text-center flex-shrink-0 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="font-playfair text-maroon-dark text-lg font-semibold leading-snug">
                  {name}
                </p>

                <div className="w-12 h-px bg-gold mx-auto my-4" />

                <p className="font-crimson text-[#9a6a3a] text-sm italic">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
