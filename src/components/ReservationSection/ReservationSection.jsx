export default function ReservationSection() {
    return (
        <section className="py-28 bg-[#f5f3ee]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-16">
                    <h4 className="text-red-600 italic tracking-widest mb-4 text-lg">
                        Reservation
                    </h4>
                    <h2 className="text-5xl font-heading font-bold tracking-widest">
                        BOOK TABLE
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Date */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm">Date</label>
                            <input
                                type="date"
                                className="border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* Time */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm">Time</label>
                            <select className="border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500">
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                                <option>14:00</option>
                            </select>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm">Phone</label>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* People */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm">People</label>
                            <select className="border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500">
                                <option>1 Person</option>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5 People</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* Button */}
                        <div className="md:col-span-2 flex justify-center mt-6">
                            <button className="bg-black text-white px-12 py-4 rounded-full tracking-widest hover:bg-red-600 transition">
                                BOOK TABLE
                            </button>
                        </div>
                    </form>

                    {/* Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="rounded-2xl overflow-hidden shadow-xl max-w-md">
                            <img
                                src="/booking-01.webp"
                                alt="Reservation"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
