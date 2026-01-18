import { motion } from "framer-motion";

export default function HeroSlider({
    image,
    title,
    subtitle,
    button,
    height = "100vh",
    showButton = true,
}) {
    return (
        <div
            className="w-full bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${image})`,
                height: height,
            }}
        >
            {/* Overlays */}
            <div className="absolute inset-0 " />
            <div className="absolute inset-0 " />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">

                {/* Subtitle */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-2xl tracking-widest mb-4"
                >
                    {title}
                </motion.h2>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10"
                >
                    {subtitle}
                </motion.h1>

                {/* Button */}
                {showButton && (
                    <motion.button
                        animate={{
                            boxShadow: [
                                "0 0 0px rgba(246, 14, 14, 0.4)",
                                "0 0 20px rgba(246, 16, 16, 0.8)",
                                "0 0 0px rgba(251, 12, 12, 0.4)",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="px-12 py-4 rounded-full border-2 border-red-500 hover:bg-red-900 hover:text-white transition tracking-widest"
                    >
                        {button}
                    </motion.button>
                )}
            </div>
        </div>
    );
}
