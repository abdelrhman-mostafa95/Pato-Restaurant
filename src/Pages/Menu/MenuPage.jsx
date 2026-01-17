import DiscoverSection from "../../components/DiscoverSection/DiscoverSection";
import EgyptianMenuSection from "../../components/EgyptianMenuSection/EgyptianMenuSection";
import HeroSlider from "../../components/Hero/HeroSlider";
import MenuPriceSection from "../../components/MenuPriceSection/MenuPriceSection";
import { lunchMenu, dinnerMenu } from "../../components/EgyptianMenuSection/data/menuData";
import SpecialSignupSection from "../../components/SpecialSignupSection/SpecialSignupSection";

export default function MenuPage() {
    return (
        <>
            <HeroSlider
                image="/bg-title-page-01.webp"
                subtitle="PATO MENU"
                height="60vh"
                showButton={false}
            />
            <MenuPriceSection />
            <DiscoverSection
                image="/header-menu-01.webp"
                smallTitle="Discover"
                mainTitle="LUNCH"
            />
            <EgyptianMenuSection menu={lunchMenu} />
            <DiscoverSection
                image="/header-menu-02.webp"
                smallTitle="Discover"
                mainTitle="DINNER"
            />
            <EgyptianMenuSection menu={dinnerMenu} />
            <SpecialSignupSection />
        </>
    )
}