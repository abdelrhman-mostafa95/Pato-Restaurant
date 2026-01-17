import { motion, AnimatePresence } from "framer-motion";

export default function EventSlide({ event }) {
    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto flex">

            {/* Image */}
            <div className="w-1/2 relative">
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
                <div className="absolute left-4 top-4 bg-red-600 text-white px-4 py-2 rounded-xl text-sm">
                    {event.date}
                </div>
            </div>

            {/* Content */}
            <div className="w-1/2 p-10 text-center flex flex-col justify-center">

                <h3 className="text-xl tracking-widest font-semibold mb-4">
                    {event.title}
                </h3>

                <p className="text-gray-600 mb-6">
                    {event.desc}
                </p>

                {/* Countdown */}
                <div className="flex justify-center gap-8 mb-6 text-red-600 font-bold">
                    {event.countdown.map((item, i) => (
                        <div key={i}>
                            <div className="text-3xl">{item.value}</div>
                            <div className="text-xs uppercase tracking-widest">{item.label}</div>
                        </div>
                    ))}
                </div>

                <button className="uppercase tracking-widest text-sm border-b border-black pb-1 hover:text-red-600 hover:border-red-600 transition">
                    View Details
                </button>
            </div>

        </div>
    );
}
