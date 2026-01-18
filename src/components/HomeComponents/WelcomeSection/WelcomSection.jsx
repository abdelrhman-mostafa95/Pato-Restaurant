export default function WelcomeSection() {
    return (
        <section className="py-28 bg-gray-200">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Side */}
                    <div className="text-center lg:text-left">

                        {/* Small title */}
                        <h4 className="text-red-600 italic tracking-widest mb-4 text-lg">
                            Egyptian Restaurant
                        </h4>

                        {/* Main title */}
                        <h2 className="text-5xl lg:text-6xl font-heading font-bold mb-8 tracking-wide">
                            WELCOME
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0 mb-10">
                            Experience the authentic taste of Egypt in an elegant and welcoming atmosphere.
                            From traditional recipes to modern flavors, we bring you a unique dining journey inspired by Egyptian heritage.
                        </p>

                        {/* Button */}
                        <button className="uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:text-red-600 hover:border-red-600 transition">
                            Our Story
                        </button>
                    </div>

                    {/* Image Side */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="rounded-2xl overflow-hidden shadow-xl max-w-md">
                            <img
                                src="/our-story-01.webp"
                                alt="Welcome"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
