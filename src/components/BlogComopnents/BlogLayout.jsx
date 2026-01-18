import BlogList from "./BlogList";
import BlogSidebar from "./BlogSidebar";


export default function BlogLayout() {
    return (
        <section className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-4 gap-16">

                    {/* Left: Blog Posts */}
                    <div className="lg:col-span-3">
                        <BlogList />
                    </div>

                    {/* Right: Sidebar */}
                    <div>
                        <BlogSidebar />
                    </div>

                </div>
            </div>
        </section>
    );
}
