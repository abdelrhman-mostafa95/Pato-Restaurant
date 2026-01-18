import BlogSection from "../../components/HomeComponents/BlogSection/BlogSection";
import DiscoverSection from "../../components/HomeComponents/DiscoverSection/DiscoverSection";
import EventsSection from "../../components/HomeComponents/EventsSection/EventsSection";
import FeaturesSection from "../../components/HomeComponents/FeaturesSection/FeaturesSection";
import Hero from "../../components/HomeComponents/Hero/Hero";
import MenuSection from "../../components/MenuComponents/MenuSection/MenuSection";
import ReservationSection from "../../components/HomeComponents/ReservationSection/ReservationSection";
import WelcomeSection from "../../components/HomeComponents/WelcomeSection/WelcomSection";


export default function HomePage() {
    return (
        <>
            <Hero />
            <WelcomeSection
                smallTitle="Egyptian Restaurant"
                title="WELCOME"
                description="Experience the authentic taste of Egypt in an elegant and welcoming atmosphere. From traditional recipes to modern flavors, we bring you a unique dining journey inspired by Egyptian heritage."
                buttonText="Our Story"
                image="/our-story-01.webp"
            />
            <DiscoverSection
                image="/bg-intro-01.webp"
                smallTitle="Discover"
                mainTitle="PATO PLACE"
            />
            <FeaturesSection />
            <MenuSection />
            <EventsSection />
            <ReservationSection />
            <BlogSection />
        </>
    )
}