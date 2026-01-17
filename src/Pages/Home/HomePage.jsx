import BlogSection from "../../components/BlogSection/BlogSection";
import DiscoverSection from "../../components/DiscoverSection/DiscoverSection";
import EventsSection from "../../components/EventsSection/EventsSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import Hero from "../../components/Hero/Hero";
import MenuSection from "../../components/MenuSection/MenuSection";
import ReservationSection from "../../components/ReservationSection/ReservationSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomSection";

export default function HomePage() {
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