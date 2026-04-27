import Categories from "@/components/homepage/news/Categories";
import NesSection from "@/components/homepage/news/NesSection";
import Social from "@/components/homepage/Social";
import { getNewsByCategory } from "@/lib/data";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Online News Portal | Category",
    description: "",
};

const CategoryPage = async ({ params }) => {
    const { id } = await params;

    const categorizedNews = await getNewsByCategory(id);
    const activeId = id;

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-15">
            <Categories activeId={activeId}></Categories>

            <NesSection categorizedNews={categorizedNews}></NesSection>

            <Social></Social>
        </div>
    );
};

export default CategoryPage;
