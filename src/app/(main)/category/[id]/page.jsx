import Categories from "@/components/homepage/news/Categories";
import Social from "@/components/homepage/Social";
import { getNewsByCategory } from "@/lib/data";

const NewsDetailPage = async ({ params }) => {
    const { id } = await params;

    const categorizedNews = await getNewsByCategory(id);
    const activeId = id;

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-15">
            <Categories activeId={activeId}></Categories>

            <div className="col-span-6 space-y-3">
                <h2 className="font-bold text-2xl">All News</h2>

                {categorizedNews.length > 0 ? (
                    categorizedNews.map((news) => (
                        <p key={news._id}>{news.title}</p>
                    ))
                ) : (
                    <h2>No news found.</h2>
                )}
            </div>

            <Social></Social>
        </div>
    );
};

export default NewsDetailPage;
