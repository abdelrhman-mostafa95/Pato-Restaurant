import BlogLayout from "../../components/BlogComopnents/BlogLayout";
import HeroSlider from "../../components/HomeComponents/Hero/HeroSlider";

export default function BlogPage() {
    return (
        <>
            <HeroSlider image={"/bg-title-page-02.webp"} subtitle={"BLOG"} height="60vh" showButton={false} />
            <BlogLayout />
        </>
    );

}
