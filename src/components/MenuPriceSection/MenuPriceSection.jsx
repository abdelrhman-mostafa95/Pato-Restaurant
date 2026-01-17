export default function MenuPriceSection() {
    const leftMenu = {
        title: "Starters",
        items: [
            { name: "Pine Nut Sbrisalona", desc: "Sed fermentum eros vitae eros", price: "$29.79" },
            { name: "Aenean Eu", desc: "Feugiat maximus neque pharetra", price: "$19.35" },
            { name: "Sed Feugiat", desc: "Proin lacinia nisl ut ultrices posuere nulla", price: "$12.19" },
            { name: "Consectetur", desc: "Etiam cursus facilisis tortor", price: "$21.89" },
        ],
    };

    const drinksMenu = {
        title: "Drinks",
        items: [
            { name: "Vivamus Pretium", desc: "Sed fermentum eros vitae eros", price: "$29.79" },
            { name: "Duis Pharetra Ligula", desc: "Feugiat maximus neque pharetra", price: "$19.35" },
            { name: "In Eu Dolor", desc: "Proin lacinia nisl ut ultrices posuere nulla", price: "$53.34" },
            { name: "Feugiat Maximus", desc: "Sed fermentum eros vitae eros", price: "$62.45" },
        ],
    };

    const rightMenu = {
        title: "Main",
        items: [
            { name: "Duis Sed Aliquet", desc: "Proin lacinia nisl ut ultrices posuere nulla", price: "$31.18" },
            { name: "Suspendisse", desc: "Feugiat maximus neque pharetra", price: "$70.25" },
            { name: "Scelerisque Sed", desc: "Etiam cursus facilisis tortor", price: "$36.19" },
            { name: "Mollis Nulla", desc: "Proin lacinia nisl ut ultrices posuere nulla", price: "$19.50" },
            { name: "Convallis Augue", desc: "Sed fermentum eros vitae eros", price: "$29.15" },
            { name: "Maecenas Tristique", desc: "Feugiat maximus neque pharetra", price: "$29.79" },
            { name: "Duis Tincidunt", desc: "Proin lacinia nisl ut ultrices posuere nulla", price: "$19.35" },
        ],
    };

    const dessertMenu = {
        title: "Dessert",
        items: [
            { name: "Tempus Aliquet", desc: "Proin lacinia nisl ut ultrices posuere nulla", price: "$9.79" },
            { name: "Scelerisque", desc: "Sed fermentum eros vitae eros", price: "$19.35" },
            { name: "Cras Maximus", desc: "Duis pharetra ligula ut urna dignissim", price: "$5.79" },
        ],
    };

    return (
        <section className="py-28 bg-[#f5f3ee]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left Column */}
                    <div>
                        <MenuBlock title={leftMenu.title} items={leftMenu.items} />
                        <div className="mt-20">
                            <MenuBlock title={drinksMenu.title} items={drinksMenu.items} />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <MenuBlock title={rightMenu.title} items={rightMenu.items} />
                        <div className="mt-20">
                            <MenuBlock title={dessertMenu.title} items={dessertMenu.items} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* ===== Menu Item Block ===== */

function MenuBlock({ title, items }) {
    return (
        <div>
            <h3 className="uppercase tracking-widest text-xl font-semibold mb-10">
                {title}
            </h3>

            <div className="space-y-8">
                {items.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

/* ===== Menu Item ===== */

function MenuItem({ name, desc, price }) {
    return (
        <div>
            <div className="flex items-center gap-4">

                <h4 className="uppercase tracking-widest text-sm font-semibold whitespace-nowrap">
                    {name}
                </h4>

                {/* dotted line */}
                <div className="flex-1 border-b border-dotted border-gray-400 opacity-60" />

                <span className="font-semibold">{price}</span>
            </div>

            <p className="text-gray-600 text-sm mt-2">
                {desc}
            </p>
        </div>
    );
}
