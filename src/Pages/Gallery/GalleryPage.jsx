import GallerySection from "../../components/GalleryComponents/GallerySection/GallerySection";
import HeroSlider from "../../components/HomeComponents/Hero/HeroSlider";

export default function GalleryPage() {

    const galleryImages = [
        "/blog-03.webp",
        "/booking-01.webp",
        "/header-menu-02.webp",
        "/intro-04.webp",
        "/photo-gallery-13.webp",
        "/photo-gallery-15.webp",
        "/photo-gallery-16.webp",
        "/photo-gallery-17.webp",
        "/photo-gallery-18.webp",
        "/photo-gallery-19.webp",
        "/photo-gallery-20.webp",
        "/photo-gallery-21.webp",
    ];

    return (
        <>
            <HeroSlider showButton={false} image={"/bg-intro-01.webp"} subtitle={"GALLERY"}
                height="60vh" />
            <GallerySection images={galleryImages} />
        </>
    );
}
