export default function OurStorySection() {
    return (
        <section className="py-32 bg-[#f5f3ee]">
            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Small Title */}
                <h4 className="text-red-600 italic tracking-widest text-lg mb-4">
                    Italian Restaurant
                </h4>

                {/* Main Title */}
                <h2 className="text-5xl font-heading font-bold tracking-widest mb-10">
                    OUR STORY
                </h2>

                {/* Text */}
                <p className="text-gray-600 leading-8 text-lg">
                    Founded with a passion for authentic flavors and warm hospitality,
                    our restaurant brings the heart of Italy to your table. Every dish
                    is carefully crafted using the finest ingredients, inspired by
                    traditional recipes passed down through generations.
                    <br /><br />
                    From handmade pasta to perfectly grilled specialties, we believe
                    that great food tells a story — a story of culture, love, and
                    unforgettable moments shared around the table.
                </p>

            </div>
        </section>
    );
}
