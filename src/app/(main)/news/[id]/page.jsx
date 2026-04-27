import { getNewsDetailById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
    const { id } = await params;

    const news = await getNewsDetailById(id);
    return {
        title: news.title,
        description: news.description,
    };
}

const NewsDetailPage = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsDetailById(id);

    if (!news) {
        return notFound();
    }

    return (
        <div className="mt-15">
            <div className="w-8/12 mx-auto space-y-5">
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
                            <p>
                                {news.author.published_date || "January, 2026"}
                            </p>
                        </div>
                    </div>
                    <div className="card-body p-4">
                        <Image
                            src={news.image_url}
                            alt={news.title}
                            width={300}
                            height={200}
                            className="w-full"
                        />
                        <h2 className="card-title font-bold text-xl">
                            {news.title}
                        </h2>
                        <p>{news.details}</p>
                        <Link
                            href={`/category/${news.category_id}`}
                            className="font-semibold text-white bg-[#D72050] max-w-fit px-5 leading-12"
                        >
                            Go back to all news in this category
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailPage;
