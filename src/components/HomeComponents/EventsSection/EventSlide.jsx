import { motion, AnimatePresence } from "framer-motion";

export default function EventSlide({ event }) {
    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">

            {/* Image */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={event.image}
                        src={event.image}
                        alt=""
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.8 }}
                    />
                </AnimatePresence>

                {/* Date badge */}
                <div className="absolute left-4 top-4 bg-red-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm">
                    {event.date}
                </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-6 md:p-10 text-center flex flex-col justify-center">

                <h3 className="text-lg md:text-xl tracking-widest font-semibold mb-3 md:mb-4">
                    {event.title}
                </h3>

                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                    {event.desc}
                </p>

                {/* Countdown */}
                <div className="flex justify-center gap-4 md:gap-8 mb-4 md:mb-6 text-red-600 font-bold">
                    {event.countdown.map((item, i) => (
                        <div key={i}>
                            <div className="text-2xl md:text-3xl">{item.value}</div>
                            <div className="text-xs uppercase tracking-widest">{item.label}</div>
                        </div>
                    ))}
                </div>

                <button className="uppercase tracking-widest text-xs md:text-sm border-b border-black pb-1 hover:text-red-600 hover:border-red-600 transition">
                    View Details
                </button>
            </div>

        </div>
    );
}
