import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import HeroSlider from "./HeroSlider";

export default function Hero() {
    const slides = [
        {
            image: "/slide1-01.webp",
            title: "Welcome to",
            subtitle: "Pato Place",
        },
        {
            image: "/master-slides-01.webp",
            title: "Welcome to",
            subtitle: "Pato Place",
        },
        {
            image: "/master-slides-02.webp",
            title: "Welcome to",
            subtitle: "Pato Place",
        },
    ];

    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3000 }}
            loop
            className="h-screen w-full"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <HeroSlider {...slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}