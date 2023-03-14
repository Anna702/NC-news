import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-anna702.onrender.com/api",
});

export const getArticles = (article_id) => {
  let path = `/articles`;
  return articlesApi
    .get(path, {
      params: {
        article_id: article_id,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};
