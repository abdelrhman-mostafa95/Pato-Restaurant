import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLinks from "./NavbarLinks";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-t-4 border-red-500
        ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
            >
                <div className="w-full px-10">
                    <div className="max-w-7xl mx-auto flex items-center justify-between h-20">

                        {/* Logo with Animation */}
                        <div className="relative h-10 w-32">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={scrolled ? "logo2" : "logo1"}
                                    src={scrolled ? "/logo2.png" : "/logo.png"}
                                    alt="Pato"
                                    className="h-10 absolute"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            </AnimatePresence>
                        </div>

                        {/* Desktop Nav */}
                        <NavbarLinks scrolled={scrolled} />

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
                        >
                            <Menu size={28} />
                        </button>

                    </div>
                </div>
            </header>

            <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
