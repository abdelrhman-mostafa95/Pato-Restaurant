export default function BlogSection() {
    const posts = [
        {
            image: "/blog-01.webp",
            date: "20 Jan 2026",
            title: "Best Places For Wine",
            desc: "Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.",
        },
        {
            image: "/blog-02.webp",
            date: "25 Jan 2026",
            title: "Eggs And Cheese",
            desc: "Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat.",
        },
        {
            image: "/blog-03.webp",
            date: "30 Jan 2026",
            title: "Style The Wedding Party",
            desc: "Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
        },
    ];

    return (
        <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-16">
                    <h4 className="text-red-600 italic tracking-widest mb-4 text-lg">
                        Latest News
                    </h4>
                    <h2 className="text-5xl font-heading font-bold tracking-widest">
                        THE BLOG
                    </h2>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {posts.map((post, index) => (
                        <div key={index} className="group">

                            {/* Image */}
                            <div className="relative overflow-hidden rounded-2xl mb-8">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                                />

                                {/* Date Badge */}
                                <span className="absolute bottom-4 left-4 bg-black text-white text-xs px-4 py-1 rounded-full">
                                    {post.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="uppercase tracking-widest text-xl font-semibold mb-4 hover:text-red-600 transition cursor-pointer">
                                {post.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-7 mb-6">
                                {post.desc}
                            </p>

                            {/* Link */}
                            <button className="uppercase tracking-widest text-sm flex items-center gap-2 border-b border-black pb-1 hover:text-red-600 hover:border-red-600 transition">
                                Continue Reading
                                <span>→</span>
                            </button>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
