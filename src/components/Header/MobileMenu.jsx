import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaGoogle } from "react-icons/fa6";
import NavbarLinks from "./NavbarLinks";

export default function MobileMenu({ isOpen, onClose }) {
    const images = [
        "/photo-gallery-thumb-01.webp",
        "/photo-gallery-thumb-02.webp",
        "/photo-gallery-thumb-03.webp",
        "/photo-gallery-thumb-04.webp",
        "/photo-gallery-thumb-05.webp",
        "/photo-gallery-thumb-06.webp",
        "/photo-gallery-thumb-07.webp",
        "/photo-gallery-thumb-08.webp",
        "/photo-gallery-thumb-09.webp",
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.div
                        className="fixed right-0 top-0 h-full w-[380px] bg-white z-50 p-10 overflow-y-auto"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 80 }}
                    >
                        <button onClick={onClose} className="absolute top-6 right-6">
                            <X size={28} />
                        </button>

                        <NavbarLinks vertical onClick={onClose} color="black" />

                        <div className="flex justify-center mt-8">
                            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-red-500 transition">
                                RESERVATION
                            </button>
                        </div>

                        <div className="flex justify-center gap-6 mt-10 text-xl">
                            <FaGoogle className="hover:text-red-500 cursor-pointer" />
                            <FaInstagram className="hover:text-red-500 cursor-pointer" />
                            <FaFacebookF className="hover:text-red-500 cursor-pointer" />
                            <FaXTwitter className="hover:text-red-500 cursor-pointer" />
                        </div>

                        <div className="mt-12">
                            <h3 className="text-center tracking-widest mb-6">GALLERY</h3>

                            <div className="grid grid-cols-3 gap-3">
                                {images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        className="w-full h-20 object-cover rounded-lg hover:scale-110 transition"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
