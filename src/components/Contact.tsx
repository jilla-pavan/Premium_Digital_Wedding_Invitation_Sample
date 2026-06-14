import { motion } from "framer-motion";
import Divider from "./Divider";

const CONTACTS = [
  {
    title: "Bride's Family",
    name1: "Mr. Rajesh Sharma",
    name2: "Mrs. Sunita Sharma",
    phone: "+91 98765 43210",
  },
  {
    title: "Groom's Family",
    name1: "Mr. Amit Verma",
    name2: "Mrs. Neha Verma",
    phone: "+91 91234 56789",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-cream py-20 px-5 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#8b5e3c_1px,transparent_1px)] bg-[length:28px_28px]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center relative z-10"
      >
        <span className="inline-block bg-maroon text-gold-light text-[11px] tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-4">
          Contact & RSVP
        </span>

        <h2 className="font-playfair text-4xl sm:text-5xl text-maroon-dark mb-3">
          We'd Love To Celebrate With You
        </h2>

        <p className="font-crimson italic text-[#8b5e3c] text-lg max-w-2xl mx-auto">
          Kindly confirm your presence and join us in celebrating this beautiful
          beginning.
        </p>
      </motion.div>

      <Divider />

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-10 relative z-10">
        {CONTACTS.map((contact, index) => (
          <motion.div
            key={contact.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-white rounded-3xl border border-[#e5d0b0] p-8 shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <p className="uppercase tracking-[0.25em] text-xs text-[#a07a4a] mb-3">
              {contact.title}
            </p>

            <h3 className="font-playfair text-2xl text-maroon-dark mb-2">
              {contact.name1}
            </h3>

            <p className="font-playfair text-xl text-maroon-dark mb-4">
              {contact.name2}
            </p>

            <div className="w-16 h-px bg-gold mx-auto mb-5" />

            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="font-playfair text-2xl text-maroon font-bold hover:text-[#7b1c1c] transition-colors"
            >
              {contact.phone}
            </a>

            <div className="mt-6">
              <a
                href={`https://wa.me/${contact.phone
                  .replace(/\D/g, "")
                  .replace(/^91/, "91")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:scale-105 transition-all"
              >
                WhatsApp RSVP
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto text-center mt-14 relative z-10"
      >
        <p className="font-crimson italic text-[#8b5e3c] text-xl leading-relaxed">
          "The greatest gift in life is the presence of family and friends. Your
          blessings and warm wishes will make our special day truly
          unforgettable."
        </p>
      </motion.div>

      {/* RSVP CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-10 relative z-10"
      >
        <a
          href="#"
          className="inline-flex items-center gap-3 bg-maroon text-gold-light px-8 py-4 rounded-full hover:bg-maroon-dark transition-all shadow-lg"
        >
          Confirm Your Presence
        </a>
      </motion.div>
    </section>
  );
}
