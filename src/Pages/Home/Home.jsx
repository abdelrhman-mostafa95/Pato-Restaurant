import BlogSection from "../../components/HomeComponents/BlogSection/BlogSection";
import DiscoverSection from "../../components/HomeComponents/DiscoverSection/DiscoverSection";
import EventsSection from "../../components/HomeComponents/EventsSection/EventsSection";
import FeaturesSection from "../../components/HomeComponents/FeaturesSection/FeaturesSection";
import Hero from "../../components/HomeComponents/Hero/Hero";
import MenuSection from "../../components/HomeComponents/MenuSection/MenuSection";
import ReservationSection from "../../components/HomeComponents/ReservationSection/ReservationSection";
import WelcomeSection from "../../components/HomeComponents/WelcomeSection/WelcomSection";

export default function Home() {
    return (
        <>
            <Hero />
            <WelcomeSection />
            <DiscoverSection />
            <FeaturesSection />
            <MenuSection />
            <EventsSection />
            <ReservationSection />
            <BlogSection />
        </>
    )
}