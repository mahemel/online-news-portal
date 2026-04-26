import { getCategoryList } from "@/lib/data";
import Link from "next/link";

const Categories = async ({ activeId }) => {
    const category = await getCategoryList();

    return (
        <div className="col-span-3 space-y-3">
            <h2 className="font-bold text-2xl">All Categories</h2>
            <ul>
                {category.map((category) => (
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
