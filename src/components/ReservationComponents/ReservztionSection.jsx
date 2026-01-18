export default function ReserveSection() {
    return (
        <section className="py-28 bg-[#f5f3ee]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-20">

                    {/* Left */}
                    <div>
                        <h3 className="uppercase tracking-widest text-xl font-semibold mb-6">
                            Reserve by Phone
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            We are happy to take your reservation by phone and help you plan your visit.
                            Our staff is always available to answer your questions and secure your table
                            <span className="text-red-500 font-semibold ml-2">
                                (002) 011 5800 9696
                            </span>
                        </p>
                    </div>

                    {/* Right */}
                    <div>
                        <h3 className="uppercase tracking-widest text-xl font-semibold mb-6">
                            For Event Booking
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            Call us now at
                            <span className="text-red-500 font-semibold mx-1">
                                (002) 010 2945 4138
                            </span>
                            , to book your table and enjoy a wonderful dining experience.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
