export default function FeaturesSection() {
    const features = [
        {
            image: "/intro-01.webp",
            title: "Romantic Restaurant",
            desc: "Experience unforgettable moments in a warm and elegant atmosphere designed for romance.",
        },
        {
            image: "/intro-02.webp",
            title: "Delicious Food",
            desc: "Enjoy carefully crafted dishes made from the finest ingredients and served with passion.",
        },
        {
            image: "/intro-04.webp",
            title: "Red Wines You Love",
            desc: "Discover a premium selection of red wines perfectly paired with our signature meals.",
        },
    ];

    return (
        <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {features.map((item, index) => (
                        <div key={index} className="group">

                            {/* Image */}
                            <div className="overflow-hidden rounded-2xl mb-8">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="uppercase tracking-widest text-xl font-semibold mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-7 mb-6">
                                {item.desc}
                            </p>

                            {/* Link */}
                            <button className="uppercase tracking-widest text-sm border-b border-black pb-1 hover:text-red-600 hover:border-red-600 transition">
                                Learn More
                            </button>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
