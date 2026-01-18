import BlogPostCard from "./BlogPostCard";

export default function BlogList() {
    const posts = [
        {
            id: 1,
            image: "/blog-05.webp",
            date: "28 Dec 2025",
            title: "Cooking Recipe Delicious",
            desc: "Discover delicious recipes made with passion and fresh ingredients.",
        },
        {
            id: 2,
            image: "/blog-06.webp",
            date: "20 Dec 2025",
            title: "Pizza is Prepared Fresh",
            desc: "Experience the taste of freshly baked pizza with premium toppings.",
        },
        {
            id: 3,
            image: "/blog-07.webp",
            date: "29 Aug 2025",
            title: "Style the Wedding Party",
            desc: "Built on strong partnerships and shared traditions, we believe in creating memorable experiences. Our dedication to quality and innovation defines everything we do.",
        },
        {
            id: 4,
            image: "/blog-04.webp",
            date: "15 Oct 2025",
            title: "Best Places for Wine",
            desc: "Where tradition meets innovation, we create unforgettable moments through exceptional taste and timeless hospitality.",
        },
    ];

    return (
        <div className="space-y-20">
            {posts.map(post => (
                <BlogPostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
