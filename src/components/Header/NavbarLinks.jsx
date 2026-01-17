import { Link } from "react-router-dom";

export default function NavbarLinks({ vertical = false, onClick, scrolled = false, color }) {
    const links = [
        "Home",
        "Menu",
        "Reservation",
        "Gallery",
        "About",
        "Blog",
        "Contact",
    ];

    const textColor = color
        ? (color === "black" ? "text-black hover:text-red-500" : "text-white hover:text-red-500")
        : (scrolled ? "text-black hover:text-red-500" : "text-white hover:text-red-500");
    return (
        <nav
            className={`${vertical ? "flex flex-col gap-6 text-lg" : "hidden lg:flex items-center gap-10 text-sm"} uppercase tracking-widest`}
        >
            {links.map((link) => (
                <Link
                    key={link}
                    to={`/${link.toLowerCase()}`}
                    onClick={onClick}
                    className={`${textColor} transition duration-300`}
                >
                    {link}
                </Link>
            ))}
        </nav>
    )
}
