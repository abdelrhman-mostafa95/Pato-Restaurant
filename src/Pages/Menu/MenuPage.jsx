import HeroSlider from "../../components/Hero/HeroSlider";
import MenuPriceSection from "../../components/MenuPriceSection/MenuPriceSection";

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
        </>
    )
}