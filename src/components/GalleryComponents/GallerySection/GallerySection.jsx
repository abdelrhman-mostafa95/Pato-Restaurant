import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GallerySection({ images = [] }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const nextImage = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="py-28 bg-[#f5f3ee]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-16">
                    <h4 className="text-red-600 italic tracking-widest mb-4 text-lg">
                        Discover
                    </h4>
                    <h2 className="text-5xl font-heading font-bold tracking-widest">
                        OUR GALLERY
                    </h2>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-2xl cursor-pointer group"
                            onClick={() => setActiveIndex(index)}
                        >
                            <img
                                src={img}
                                alt="gallery"
                                className="w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/70 transition" />

                            {/* Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition duration-300 text-red-600 font-semibold">
                                    View
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Slider */}
                <AnimatePresence>
                    {activeIndex !== null && (
                        <motion.div
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Close */}
                            <button
                                onClick={() => setActiveIndex(null)}
                                className="absolute top-6 right-6 text-white hover:text-red-500 transition"
                            >
                                <X size={40} />
                            </button>

                            {/* Prev */}
                            <button
                                onClick={prevImage}
                                className="absolute left-6 text-white hover:text-red-500 transition"
                            >
                                <ChevronLeft size={50} />
                            </button>

                            {/* Image */}
                            <motion.img
                                key={activeIndex}
                                src={images[activeIndex]}
                                className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.7, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />

                            {/* Next */}
                            <button
                                onClick={nextImage}
                                className="absolute right-6 text-white hover:text-red-500 transition"
                            >
                                <ChevronRight size={50} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
