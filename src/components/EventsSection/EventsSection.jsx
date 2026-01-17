import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import EventSlide from "./EventSlide";

export default function EventsSection() {

    const events = [
        {
            image: "/event-01.webp",
            date: "08 PM | Tuesday",
            title: "Wines During Specific Nights",
            desc: "Enjoy premium wines every Tuesday night.",
            countdown: [
                { value: 25, label: "Days" },
                { value: 12, label: "Hours" },
                { value: 59, label: "Minutes" },
                { value: 56, label: "Seconds" },
            ],
        },
        {
            image: "/event-02.webp",
            date: "09 PM | Friday",
            title: "Live Music & Dinner",
            desc: "Enjoy live music with delicious meals every Friday.",
            countdown: [
                { value: 10, label: "Days" },
                { value: 5, label: "Hours" },
                { value: 22, label: "Minutes" },
                { value: 40, label: "Seconds" },
            ],
        },
        {
            image: "/event-06.webp",
            date: "07 PM | Sunday",
            title: "Family Dinner Night",
            desc: "Special dinner night for families and friends.",
            countdown: [
                { value: 5, label: "Days" },
                { value: 18, label: "Hours" },
                { value: 10, label: "Minutes" },
                { value: 12, label: "Seconds" },
            ],
        },
    ];

    return (
        <section
            className="relative py-16 md:py-32 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-event-01.webp')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

                {/* Title */}
                <div className="text-center mb-12 md:mb-16 text-white">
                    <h4 className="text-red-500 italic tracking-widest mb-3 md:mb-4 text-base md:text-lg">
                        Upcoming
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-widest">
                        EVENTS
                    </h2>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 5000 }}
                    loop
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <EventSlide event={event} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
