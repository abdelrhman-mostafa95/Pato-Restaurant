export default function WelcomeSection({
    smallTitle,
    title,
    description,
    buttonText,
    image,
    reverse = false,
}) {
    return (
        <section className="py-28 bg-gray-200">
            <div className="max-w-7xl mx-auto px-6">

                <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>

                    {/* Text Side */}
                    <div className={`text-center ${reverse ? "lg:text-right" : "lg:text-left"}`}>

                        {/* Small title */}
                        <h4 className="text-red-600 italic tracking-widest mb-4 text-lg">
                            {smallTitle}
                        </h4>

                        {/* Main title */}
                        <h2 className="text-5xl lg:text-6xl font-heading font-bold mb-8 tracking-wide">
                            {title}
                        </h2>

                        {/* Description */}
                        <p className={`text-gray-600 leading-8 max-w-xl mb-10 ${reverse ? "lg:ml-auto" : "lg:mr-auto"} mx-auto lg:mx-0`}>
                            {description}
                        </p>

                        {/* Button */}
                        <button className="uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:text-red-600 hover:border-red-600 transition">
                            {buttonText}
                        </button>
                    </div>

                    {/* Image Side */}
                    <div className={`flex ${reverse ? "lg:justify-start" : "lg:justify-end"} justify-center`}>
                        <div className="rounded-2xl overflow-hidden shadow-xl max-w-md">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
