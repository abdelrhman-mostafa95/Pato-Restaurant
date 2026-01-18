import MeetChefSection from "../../components/AboutComponents/MeetChefSection";
import OurStorySection from "../../components/AboutComponents/OurStorySection";
import DiscoverSection from "../../components/HomeComponents/DiscoverSection/DiscoverSection";
import HeroSlider from "../../components/HomeComponents/Hero/HeroSlider";
import WelcomeSection from "../../components/HomeComponents/WelcomeSection/WelcomSection";
import SpecialSignupSection from "../../components/MenuComponents/SpecialSignupSection/SpecialSignupSection";

export default function AboutPage() {
    return (
        <>
            <HeroSlider showButton={false} image={"/bg-title-page-03.webp"} subtitle={"ABOUT"}
                height="60vh" />
            <OurStorySection />
            <WelcomeSection
                smallTitle="Delicious"
                title="RECIPES"
                description="We believe in delivering an exceptional dining experience through carefully selected ingredients, refined recipes, and a warm, welcoming atmosphere."

                image="/our-story-01.webp"
            />
            <DiscoverSection image={"bg-cover-video-02.webp"} height="80vh" mainTitle={"PATO PLACE"} />
            <WelcomeSection
                smallTitle="Romantic"
                title="Restaurant"
                description="Our restaurant blends passion, flavor, and elegance to create an unforgettable dining experience. Every detail is carefully crafted to deliver exceptional quality and comfort."
                image="/blog-03.webp"
            />
            <MeetChefSection />
            <SpecialSignupSection />
        </>
    )
}