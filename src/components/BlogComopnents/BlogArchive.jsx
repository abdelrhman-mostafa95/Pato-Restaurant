export default function BlogArchive() {
    const archive = [
        "July 2026",
        "June 2026",
        "May 2026",
        "April 2026",
    ];

    return (
        <div>
            <h4 className="font-bold tracking-widest mb-6">ARCHIVE</h4>

            <ul className="space-y-3 text-gray-600">
                {archive.map((item, i) => (
                    <li key={i} className="hover:text-red-600 cursor-pointer transition">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
