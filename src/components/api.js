import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-anna702.onrender.com/api",
});

export const getArticles = () => {
  return articlesApi.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
