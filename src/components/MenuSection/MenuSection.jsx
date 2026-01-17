export default function MenuSection() {
    return (
        <section className="py-28 bg-[#f5f3ee]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-16">
                    <h4 className="text-red-600 italic tracking-widest mb-4 text-lg">
                        Discover
                    </h4>
                    <h2 className="text-5xl font-heading font-bold tracking-widest">
                        OUR MENU
                    </h2>
                </div>

                {/* Grid Layout - 3 columns exactly like the reference image */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* LUNCH - Tall card on the left (spans 2 rows) */}
                    <MenuCard
                        title="Lunch"
                        image="/our-menu-01.webp"
                        className="md:row-span-2 h-[250px] md:h-[520px]"
                    />

                    {/* DINNER - Top middle */}
                    <MenuCard
                        title="Dinner"
                        image="/our-menu-05.webp"
                        className="h-[250px]"
                    />

                    {/* DRINK - Top right */}
                    <MenuCard
                        title="Drink"
                        image="/our-menu-08.webp"
                        className="h-[250px]"
                    />

                    {/* STARTERS - Middle right (col-start-3 to position it correctly) */}
                    <MenuCard
                        title="Starters"
                        image="/our-menu-10.webp"
                        className="h-[250px] md:col-start-2 md:col-span-2"
                    />

                    {/* HAPPY HOUR - Bottom wide (spans 2 columns, starts at col 1) */}
                    <MenuCard
                        title="Happy Hour"
                        image="/our-menu-13.webp"
                        className="h-[250px] md:col-span-2 md:col-start-1"
                    />

                    {/* DESSERT - Bottom right */}
                    <MenuCard
                        title="Dessert"
                        image="/our-menu-16.webp"
                        className="h-[250px]"
                    />

                </div>
            </div>
        </section>
    );
}


/* Card Component */
function MenuCard({ title, image, className }) {
    return (
        <div
            className={`relative group overflow-hidden rounded-2xl shadow-lg ${className}`}
        >
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

            {/* Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white text-black px-8 py-3 rounded-full uppercase tracking-widest text-sm font-semibold group-hover:bg-red-600 group-hover:text-white transition">
                    {title}
                </span>
            </div>
        </div>
    );
}
