import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "./api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(
    (article_id) => {
      setIsLoading(true);
      getArticles(article_id).then((articles) => {
        setArticles(articles);

        setIsLoading(false);
      });
    },
    [article_id]
  );

  return (
    <main>
      <h2 id="articles_header">Articles</h2>
      {/* <select
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
      >
        {articles.map((article) => {
          return <option key={article.article_id}>{article.title}</option>;
        })}
      </select> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="articlesList">
          {articles.map((article) => {
            return (
              <li key={article.article_id} className="article">
                <div>
                  <Link to="/articles/:article_id">
                    <h2 id="article_title">{article.title}</h2>
                  </Link>
                  <img id="article_card_img" src={article.article_img_url} />
                  <h4 id="article_card_author">Created by: {article.author}</h4>
                  <h4 id="article_card_topic">Topic: {article.topic}</h4>
                  <h3 id="article_card_comments">
                    Comments: {article.comments}
                  </h3>
                </div>
              </li>
            );
            // return <ArticleCard article={article} />;
          })}
        </ul>
      )}
    </main>
  );
};

export default Articles;
