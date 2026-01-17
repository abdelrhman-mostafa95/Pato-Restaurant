import { Facebook, Instagram, Twitter, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#222222] text-gray-400 pt-24">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-16 pb-20">

                {/* Contact Us */}
                <div>
                    <h3 className="text-white tracking-widest mb-8">CONTACT US</h3>

                    <ul className="space-y-4 text-sm">
                        <li>📍 Cairo, Egypt</li>
                        <li>📞 (+20) 10 2945 4138</li>
                        <li>✉ abdelrhman.mostafa95@gmail.com</li>
                    </ul>

                    <div className="mt-12">
                        <h3 className="text-white tracking-widest mb-6">OPENING TIMES</h3>
                        <p className="text-sm">09:30 AM – 11:00 PM</p>
                        <p className="text-sm">Every Day</p>
                    </div>
                </div>

                {/* Latest Posts */}
                <div>
                    <h3 className="text-white tracking-widest mb-8">LATEST POSTS</h3>

                    <div className="space-y-10 text-sm">

                        <div>
                            <p className="text-red-500 mb-2">@Abdelrahman</p>
                            <p>
                                Activello is a good option. It has a slider built into that
                                displays the featured image in the slider.
                            </p>
                            <a href="#" className="text-red-500">https://github.com/abdelrhman-mostafa95</a>
                            <p className="mt-2 text-xs">20 Jan 2026</p>
                        </div>



                    </div>
                </div>

                {/* Gallery */}
                <div>
                    <h3 className="text-white tracking-widest mb-8">GALLERY</h3>

                    <div className="grid grid-cols-4 gap-3">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <img
                                key={i}
                                src={`/photo-gallery-thumb-0${i + 1}.webp`}
                                alt="Gallery"
                                className="rounded-lg hover:opacity-70 transition cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Social Icons */}
                    <div className="flex gap-6 text-white">
                        <Globe className="cursor-pointer hover:text-red-500 transition" />
                        <Instagram className="cursor-pointer hover:text-red-500 transition" />
                        <Facebook className="cursor-pointer hover:text-red-500 transition" />
                        <Twitter className="cursor-pointer hover:text-red-500 transition" />
                    </div>

                    {/* Copyright */}
                    <p className="text-sm">
<<<<<<< HEAD
                        © 2026 Abdelrahman Mostafa. All rights reserved
=======
                        © 2026 Abdelrahman Mostafa. Get The Theme
>>>>>>> b139557479d125ef08395c28d2c439299d3f10e9
                    </p>

                    {/* Scroll To Top */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="bg-black p-3 rounded-lg hover:bg-red-600 transition"
                    >
                        <ArrowUp className="text-white" size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
