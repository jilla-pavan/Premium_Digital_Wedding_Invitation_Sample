import { motion } from "framer-motion";
import Divider from "./Divider";

import groomPortrait from "../assets/groom-demo.png";
import bridePortrait from "../assets/bride-demo.png";
import coupleTogether from "../assets/couple-demo.png";

export default function Couple() {
  return (
    <section id="couple" className="bg-dark py-20 px-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-gold text-maroon-dark text-[11px] tracking-[0.2em] uppercase px-5 py-1.5 rounded-full mb-4">
          The Couple
        </span>

        <h2 className="font-playfair text-3xl sm:text-5xl text-gold mb-2">
          Aarav & Ananya
        </h2>

        <p className="font-crimson italic text-gold-muted text-base">
          A Journey Of Love Begins
        </p>
      </motion.div>

      <Divider light />

      {/* Portraits */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mt-8">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="relative w-52 h-72 mx-auto">
            <div className="absolute inset-0 rounded-[50%_50%_44%_44%] shadow-[0_0_40px_rgba(201,153,42,0.35)]" />

            <div className="w-full h-full rounded-[50%_50%_44%_44%] overflow-hidden border-[3px] border-gold">
              <img
                src={groomPortrait}
                alt="Groom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="font-dancing text-gold text-3xl mt-5">
            Aarav Sharma
          </p>

          <p className="font-crimson italic text-gold-muted text-sm mt-1">
            The Groom
          </p>

          <p className="font-crimson italic text-gold-muted text-sm">
            Son of Rajesh Sharma & Sunita Sharma
          </p>
        </motion.div>

        {/* Heart */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-gold text-6xl"
        >
          ♡
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="relative w-52 h-72 mx-auto">
            <div className="absolute inset-0 rounded-[50%_50%_44%_44%] shadow-[0_0_40px_rgba(201,153,42,0.35)]" />

            <div className="w-full h-full rounded-[50%_50%_44%_44%] overflow-hidden border-[3px] border-gold">
              <img
                src={bridePortrait}
                alt="Bride"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="font-dancing text-gold text-3xl mt-5">
            Ananya Reddy
          </p>

          <p className="font-crimson italic text-gold-muted text-sm mt-1">
            The Bride
          </p>

          <p className="font-crimson italic text-gold-muted text-sm">
            Daughter of Ramesh Reddy & Lakshmi Reddy
          </p>
        </motion.div>
      </div>

      {/* Couple Photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <div className="relative rounded-3xl overflow-hidden border-2 border-gold/50 shadow-[0_0_60px_rgba(201,153,42,0.18)]">
          <img
            src={coupleTogether}
            alt="Couple"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="font-dancing text-gold text-5xl drop-shadow-lg">
              Forever Starts Here
            </p>

            <p className="font-crimson italic text-gold-light mt-2">
              15 February 2026 • Wedding Celebration
            </p>
          </div>
        </div>
      </motion.div>

      {/* Story Box */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-12"
      >
        <div className="bg-dark-deep border border-gold/30 rounded-3xl p-8 sm:p-12">
          <h3 className="font-playfair text-3xl text-white mb-5">
            Crafted For Your Story
          </h3>

          <p className="font-crimson text-gold-muted leading-relaxed text-base sm:text-lg">
            Every wedding has a unique story. This website can be customized
            with your photos, couple story, family details, wedding events,
            RSVP system, venue directions, gallery, countdown timer, live
            streaming links, and much more.
          </p>

          <div className="w-20 h-px bg-gold mx-auto my-6" />

          <p className="font-crimson italic text-gold text-lg">
            "Elegant • Personalized • Memorable"
          </p>
        </div>
      </motion.div>
    </section>
  );
}