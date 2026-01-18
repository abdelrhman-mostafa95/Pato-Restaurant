export default function DiscoverSection({
    image,
    smallTitle,
    mainTitle,
    height = "400px",
    overlay = "bg-black/60",
}) {
    return (
        <section
            className={`relative bg-fixed bg-center bg-cover flex items-center justify-center`}
            style={{
                backgroundImage: `url(${image})`,
                height: height,
            }}
        >
            {/* Overlay */}
            <div className={`absolute inset-0 ${overlay}`} />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6">

                {/* Small title */}
                <h4 className="text-red-500 italic tracking-widest mb-4 text-xl">
                    {smallTitle}
                </h4>

                {/* Main title */}
                <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-widest">
                    {mainTitle}
                </h2>

            </div>
        </section>
    );
}
