import HeroSlider from "../../components/HomeComponents/Hero/HeroSlider";
import ReservationSection from "../../components/HomeComponents/ReservationSection/ReservationSection";
import ReserveSection from "../../components/ReservationComponents/ReservztionSection";

export default function ReservationPage() {
    return (
        <>
            <HeroSlider showButton={false} image={"/bg-title-page-02.webp"} subtitle={"RESERVATION"}
                height="60vh" />
            <ReservationSection />
            <ReserveSection />
        </>
    )
}