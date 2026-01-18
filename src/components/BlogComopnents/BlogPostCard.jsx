export default function BlogPostCard({ post }) {
    return (
        <div className="space-y-6">

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                />

                {/* Date */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-xl text-sm">
                    {post.date}
                </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold tracking-widest uppercase">
                {post.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-400 mt-2 mb-4">
                <span>by Admin</span>
                <span>|</span>
                <span>{post.date}</span>
                <span>|</span>
                <span>Cooking, Food</span>
                <span>|</span>
                <span>8 Comments</span>
            </div>

            <p className="text-gray-600 leading-7 max-w-3xl">
                {post.desc}
            </p>

            <button className="uppercase tracking-widest text-sm border-b border-black pb-1 hover:text-red-600 hover:border-red-600 transition">
                Continue Reading →
            </button>

        </div>
    );
}
