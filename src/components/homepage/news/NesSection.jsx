import NewsCard from "./NewsCard";

const NesSection = ({ categorizedNews }) => {
    return (
        <div className="col-span-6 space-y-5">
            <h2 className="font-bold text-2xl">News</h2>

            {categorizedNews.length > 0 ? (
                categorizedNews.map((news) => (
                    <NewsCard key={news._id} news={news}></NewsCard>
                ))
            ) : (
                <h2>No news found.</h2>
            )}
        </div>
    );
};

export default NesSection;
