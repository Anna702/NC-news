import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./api";
import PostAComment from "./PostAComment";
import Comments from "./Comments";
import { voteForArticle } from "./api";

const ArticleCard = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [userVoted, setUserVoted] = useState(false);

  const onClick = () => {
    setUserVoted(true);
    voteForArticle(article.article_id).then((updatedArticle) => {
      setArticle(updatedArticle);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="card_article">
            <h2 id="card_article_title">{article.title}</h2>
            <h4 id="card_article_card_topic">
              Topic: &nbsp;
              {article.topic}
            </h4>
            <h4 id="card_article_card_author">
              Created by:&nbsp;
              {article.author}
            </h4>
            <img
              id="card_article_card_img"
              alt="article_cover"
              src={article.article_img_url}
            />
            <p id="card_article_body">{article.body}</p>
            <h3 id="article_votes">
              votes:&nbsp;
              {article.votes}
            </h3>
            {userVoted === false ? (
              <button id="article_vote_button" onClick={onClick}>
                Vote
              </button>
            ) : (
              <p>thanks for voting!</p>
            )}
          </div>
          <PostAComment article_id={article.article_id} />
          <Comments article_id={article.article_id} />
        </div>
      )}
    </main>
  );
};

export default ArticleCard;
