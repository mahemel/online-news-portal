
export const getNewsByCategory = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const categoryNews = await response.json();

    return categoryNews.data;
}