import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-anna702.onrender.com/api",
});

export const getArticles = (searchKeys) => {
  return articlesApi
    .get(`/articles`, { params: searchKeys })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return articlesApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const voteForArticle = (article_id) => {
  return articlesApi
    .patch(`/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const postComment = (article_id, newComment) => {
  return articlesApi
    .post(`/articles/${article_id}/comments`, {
      username: newComment.username,
      body: newComment.body,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const getTopics = () => {
  return articlesApi.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};
