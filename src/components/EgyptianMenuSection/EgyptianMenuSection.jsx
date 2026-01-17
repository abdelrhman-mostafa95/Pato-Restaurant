export default function EgyptianMenuSection({ menu = [] }) {
    return (
        <section className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-16">
                    {menu.map((item, index) => (
                        <MenuItem key={index} {...item} />
                    ))}
                </div>

            </div>
        </section>
    );
}


/* ===== Item ===== */

function MenuItem({ image, name, desc, price }) {
    return (
        <div className="flex items-center gap-6">

            {/* Image */}
            <img
                src={image}
                alt={name}
                className="w-28 h-28 rounded-xl object-cover shadow-md"
            />

            {/* Content */}
            <div>
                <h4 className="uppercase tracking-widest text-sm font-semibold mb-2">
                    {name}
                </h4>

                <p className="text-gray-500 text-sm mb-2">
                    {desc}
                </p>

                <span className="text-black font-semibold">
                    {price}
                </span>
            </div>
        </div>
    );
}
