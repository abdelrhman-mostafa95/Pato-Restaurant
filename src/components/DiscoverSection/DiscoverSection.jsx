export default function DiscoverSection() {
    return (
        <section
            className="relative h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: "url('/bg-intro-01.webp')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6">

                {/* Small title */}
                <h4 className="text-red-500 italic tracking-widest mb-4 text-xl">
                    Discover
                </h4>

                {/* Main title */}
                <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-widest">
                    PATO PLACE
                </h2>

            </div>
        </section>
    );
}
