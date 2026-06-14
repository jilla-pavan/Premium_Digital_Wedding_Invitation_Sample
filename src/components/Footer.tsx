import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark-footer border-t border-gold/30 py-14 px-5 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Couple Names */}
        <h2 className="font-dancing text-gold text-5xl md:text-6xl mb-4">
          Aarav ♡ Ananya
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-20 bg-gold/30" />
          <span className="text-gold text-xl">❦</span>
          <div className="h-px w-20 bg-gold/30" />
        </div>

        {/* Blessing Text */}
        <p className="font-crimson italic text-gold-muted text-base max-w-xl mx-auto leading-relaxed">
          With the blessings of our beloved families,
          <br />
          we invite you to celebrate love, happiness, and a beautiful new
          beginning.
        </p>

        {/* Quote */}
        <div className="mt-8">
          <p className="font-crimson italic text-gold-light text-lg">
            "Together is a beautiful place to be."
          </p>
        </div>

        {/* Wedding Date */}
        <div className="mt-8">
          <p className="font-playfair text-gold text-xl">15th February 2026</p>

          <p className="font-crimson text-gold-muted mt-1">
            Grand Royal Palace • Hyderabad
          </p>
        </div>

        {/* Decorative Symbol */}
        <div className="mt-8 text-gold text-3xl">✦ ❦ ✦</div>

        {/* Copyright */}
        <p className="font-crimson text-gold-muted/60 text-xs mt-8 tracking-[0.2em] uppercase">
          © 2026 Aarav & Ananya
        </p>

        <div className="mt-5 flex flex-col max-w-fit p-4 mx-auto items-center gap-4 border border-white">
          <p className="text-gold-muted/70">
            Designed & Developed by{" "}
            <a
              href="https://www.instagram.com/creativity_digital_sol/"
              target="_blank"
              className="text-gold font-medium"
            >
              CreativITy Digital Solutions
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919923214340"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-maroon-dark transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/creativity_digital_sol/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-maroon-dark transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </a>

            {/* Call */}
            <a
              href="tel:+919923214340"
              className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-maroon-dark transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="text-base text-gold-muted/80 flex flex-col">
            <a href="https://wa.me/919923214340">+91 99232 14340</a>
            <a href="https://wa.me/918978979640">+91 89789 79640</a>
          </div>

          <p className="text-md text-gold-muted/50 tracking-wide">
            Need a Website? Let's Talk
          </p>
        </div>

        {/* Small Tagline */}
        <p className="mt-2 text-xs text-gold-muted/50 tracking-wide">
          Premium Wedding Invitation Websites
        </p>
      </motion.div>
    </footer>
  );
}
