
export const getNewsByCategory = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const categoryNews = await response.json();

    return categoryNews.data;
}

export const getNewsDetailById = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const news = await response.json();

    return news.data[0];
}

export const getCategoryList = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    const category = await response.json();

    return category.data.news_category;
}