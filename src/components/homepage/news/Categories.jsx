import Link from "next/link";

const Categories = async ({ activeId }) => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    const category = await response.json();

    return (
        <div className="col-span-3 space-y-3">
            <h2 className="font-bold text-2xl">All Categories</h2>
            <ul>
                {category?.data?.news_category.map((category) => (
                    <li key={category.category_id}>
                        <Link
                            className={`${activeId === category.category_id ? "bg-gray-200" : ""} px-5 py-3 block text-lg font-semibold`}
                            href={`/category/${category.category_id}`}
                        >
                            {category.category_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
