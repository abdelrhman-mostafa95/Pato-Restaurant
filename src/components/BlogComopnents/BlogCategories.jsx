export default function BlogCategories() {
    const categories = [
        "Cooking Recipe",
        "Delicious Foods",
        "Events Design",
        "Restaurant Place",
        "Wordpress",
    ];

    return (
        <div>
            <h4 className="font-bold tracking-widest mb-6">CATEGORIES</h4>

            <ul className="space-y-3 text-gray-600">
                {categories.map((cat, i) => (
                    <li key={i} className="hover:text-red-600 cursor-pointer transition">
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
}
