import DiscoverSection from "../../components/HomeComponents/DiscoverSection/DiscoverSection";
import HeroSlider from "../../components/HomeComponents/Hero/HeroSlider";
import EgyptianMenuSection from "../../components/MenuComponents/EgyptianMenuSection/EgyptianMenuSection";
import MenuPriceSection from "../../components/MenuComponents/MenuPriceSection/MenuPriceSection";
import SpecialSignupSection from "../../components/MenuComponents/SpecialSignupSection/SpecialSignupSection";
import { lunchMenu, dinnerMenu } from "../../components/MenuComponents/EgyptianMenuSection/data/menuData";


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