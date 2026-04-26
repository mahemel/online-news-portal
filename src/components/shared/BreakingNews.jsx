import { getNewsByCategory } from "@/lib/data";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const BreakingNews = async () => {
    const latesNews = await getNewsByCategory("01");
    return (
        <div className="p-4 bg-[#F3F3F3] flex items-center gap-4 mt-7.5">
            <h2 className="leading-12 px-3 bg-[#D72050] text-xl font-semibold text-white">
                LATEST
            </h2>
            <Marquee pauseOnHover={true}>
                {latesNews.map((latest) => (
                    <p key={latest.id} className="font-semibold mr-8">
                        <Link
                            href={`/news/${latest._id}`}
                            className="font-semibold"
                        >
                            {latest.title}
                        </Link>
                    </p>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;
