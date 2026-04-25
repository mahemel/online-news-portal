import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    const latesNews = [
        { id: 1, title: "Global Markets Show Signs of Recovery" },
        { id: 2, title: "AI Technology Continues to Evolve Rapidly" },
        { id: 3, title: "Extreme Weather Events Raise Climate Concerns" },
    ];
    return (
        <div className="p-4 bg-[#F3F3F3] flex items-center gap-4 my-7.5">
            <h2 className="leading-12 px-3 bg-[#D72050] text-xl font-semibold text-white">
                LATEST
            </h2>
            <Marquee pauseOnHover={true}>
                {latesNews.map((latest) => (
                    <p key={latest.id} className="font-semibold mr-8">
                        {latest.title}
                    </p>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;
