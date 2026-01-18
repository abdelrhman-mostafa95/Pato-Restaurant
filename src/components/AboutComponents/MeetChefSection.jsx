export default function MeetChefSection() {
    const chefs = [
        {
            image: "/avatar-05.webp",
            name: "Peter Hart",
            role: "Head Chef",
            desc: "Peter brings over 15 years of experience in fine dining, blending classic techniques with modern flavors."
        },
        {
            image: "/avatar-02.webp",
            name: "Joyce Bowman",
            role: "Pastry Chef",
            desc: "Joyce is passionate about creating elegant desserts that delight both the eyes and the taste buds."
        },
        {
            image: "/avatar-03.webp",
            name: "Michael Stone",
            role: "Sous Chef",
            desc: "Michael specializes in international cuisine and ensures every dish meets our highest standards."
        },
    ];

    return (
        <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-20">
                    <h4 className="text-red-600 italic tracking-widest mb-3 text-lg">
                        Meet Our
                    </h4>
                    <h2 className="text-5xl font-heading font-bold tracking-widest">
                        CHEF
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {chefs.map((chef, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border rounded-2xl shadow-md p-10 text-center 
               transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
                        >

                            {/* Avatar */}
                            <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                                <div className="w-28 h-28 rounded-full border-4 border-red-600 overflow-hidden bg-white
                      transition-all duration-500 group-hover:border-black">

                                    <img
                                        src={chef.image}
                                        alt={chef.name}
                                        className="w-full h-full object-cover transition-all duration-700
                     group-hover:scale-110 group-hover:rotate-2"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pt-20">
                                <h3 className="text-xl font-semibold tracking-widest uppercase mb-1 
                     transition group-hover:text-red-600">
                                    {chef.name}
                                </h3>

                                <span className="text-gray-500 uppercase text-sm tracking-widest">
                                    {chef.role}
                                </span>

                                <p className="mt-6 text-gray-600 leading-relaxed">
                                    {chef.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
