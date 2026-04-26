import Categories from "@/components/homepage/news/Categories";
import NesSection from "@/components/homepage/news/NesSection";
import Social from "@/components/homepage/Social";
import { getNewsByCategory } from "@/lib/data";

const HomePage = async () => {
  const activeId = '08';
  const categorizedNews = await getNewsByCategory(activeId);

  return (

    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-15">

      <Categories activeId={activeId}></Categories>

      <NesSection categorizedNews={categorizedNews}></NesSection>

      <Social></Social>
    </div>
  );
};

export default HomePage;