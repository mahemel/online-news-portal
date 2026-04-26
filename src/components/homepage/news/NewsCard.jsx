import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 border border-[#E7E7E7] rounded-md">
            <div className="flex items-center gap-3 p-4 bg-gray-200">
                <Image
                    className="w-10 h-10 rounded-full"
                    src={news.author.img}
                    alt={news.author?.name || "System"}
                    width={40}
                    height={40}
                />

                <div>
                    <h2 className="font-bold">
                        {news.author?.name || "System"}
                    </h2>
                    <p>{news.author.published_date || "January, 2026"}</p>
                </div>
            </div>
            <div className="card-body p-4">
                <h2 className="card-title font-bold text-xl">{news.title}</h2>
                <Image
                    src={news.image_url}
                    alt={news.title}
                    width={300}
                    height={200}
                    className="w-full"
                />
                <p className="line-clamp-3">{news.details}</p>
                <Link
                    href={`/news/${news._id}`}
                    className="font-semibold text-amber-600"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;
