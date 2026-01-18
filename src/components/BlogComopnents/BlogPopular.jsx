export default function BlogPopular() {
    const popular = [
        "Best Places For Wine",
        "Eggs And Cheese",
        "Style The Wedding Party",
    ];

    return (
        <div>
            <h4 className="font-bold tracking-widest mb-6">MOST POPULAR</h4>

            <ul className="space-y-4 text-gray-600">
                {popular.map((item, i) => (
                    <li key={i} className="hover:text-red-600 cursor-pointer transition">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
