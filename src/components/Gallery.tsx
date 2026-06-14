import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Photo1 from "../assets/photo-1.png";
import Photo2 from "../assets/photo-2.png";
import Photo3 from "../assets/photo-3.png";
import Photo4 from "../assets/photo-4.png";
import Photo5 from "../assets/photo-5.png";
import Photo6 from "../assets/photo-6.png";
import Photo7 from "../assets/photo-7.png";
import Photo8 from "../assets/bride-demo.png";
import Photo9 from "../assets/groom-demo.png";
import Photo10 from "../assets/coupleHeroBg.png";

const PHOTOS = [
  { src: Photo2, caption: "Photo 2" },
  { src: Photo3, caption: "Photo 3" },
  { src: Photo4, caption: "Photo 4" },
  { src: Photo5, caption: "Photo 5" },
  { src: Photo6, caption: "Photo 6" },
  { src: Photo7, caption: "Photo 7" },
  { src: Photo8, caption: "Photo 8" },
  { src: Photo9, caption: "Photo 9" },
  { src: Photo10, caption: "Photo 10" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-24 px-5 bg-gradient-to-b from-[#fdfaf5] via-[#faf5ec] to-[#fdfaf5]"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#d4af37_1px,transparent_1px)] bg-[length:28px_28px]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <span className="inline-block bg-maroon text-gold-light text-[11px] tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-5">
          Gallery
        </span>

        <h2 className="font-playfair text-4xl md:text-5xl text-maroon-dark mb-3">
          Moments & Memories
        </h2>

        <p className="font-crimson italic text-[#8a5e33] max-w-xl mx-auto">
          A collection of beautiful memories and cherished moments.
        </p>
      </motion.div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto mt-14"
      >
        <div
          onClick={() => setLightbox(Photo1)}
          className="group cursor-pointer overflow-hidden rounded-3xl border border-[#e8d5b0] shadow-xl"
        >
          <img
            src={Photo1}
            alt="Featured Photo"
            className="w-full h-[450px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
            <p className="text-white p-6 font-crimson italic text-lg">
              Featured Photo
            </p>
          </div>
        </div>
      </motion.div>

      {/* Masonry Grid */}
      <div className="relative z-10 max-w-6xl mx-auto mt-6 columns-2 md:columns-3 gap-5">
        {PHOTOS.map(({ src, caption }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="break-inside-avoid mb-5"
          >
            <div
              onClick={() => setLightbox(src)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-[#e8d5b0] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={caption}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img
                src={lightbox}
                alt="Gallery"
                className="w-full max-h-[90vh] object-contain rounded-2xl"
              />

              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white text-2xl flex items-center justify-center"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
