import BlogSearch from "./BlogSearch";
import BlogCategories from "./BlogCategories";
import BlogPopular from "./BlogPopular";
import BlogArchive from "./BlogArchive";

export default function BlogSidebar() {
    return (
        <div className="space-y-14">

            <BlogSearch />
            <BlogCategories />
            <BlogPopular />
            <BlogArchive />

        </div>
    );
}
