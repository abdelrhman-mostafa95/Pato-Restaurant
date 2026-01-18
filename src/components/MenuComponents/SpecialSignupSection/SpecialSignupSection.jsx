export default function SpecialSignupSection() {
    return (
        <section className="py-28 bg-[#f5f3ee]">
            <div className="max-w-5xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">

                    {/* Title */}
                    <h3 className="uppercase tracking-[0.3em] text-lg font-semibold text-gray-800">
                        Specials Sign Up
                    </h3>

                    {/* Input */}
                    <div className="relative w-full max-w-sm bg-white  border border-gray-300">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full py-4 px-6 pr-12  transition"
                        />


                    </div>

                    {/* Button */}
                    <button className="bg-black text-white px-12 py-4 rounded-xl uppercase tracking-widest hover:bg-gray-500 transition">
                        Sign-Up
                    </button>

                </div>

            </div>
        </section >
    );
}
