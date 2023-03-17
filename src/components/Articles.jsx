import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "./api";
import { Link } from "react-router-dom";
import ArticlesFilter from "./ArticlesFilter";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = {};
    if (!!searchParams.get(`topic`)) {
      params.topic = searchParams.get(`topic`);
    }
    setIsLoading(true);
    getArticles(params).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [searchParams]);

  return (
    <main>
      <h2 id="articles_header">Articles</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ArticlesFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <ul className="articlesList">
            {articles.map((article) => {
              return (
                <li key={article.article_id} className="article">
                  <div>
                    <Link to={"/articles/" + article.article_id}>
                      <h2 id="article_title">{article.title}</h2>
                    </Link>
                    <img
                      id="article_card_img"
                      alt="Article cover"
                      src={article.article_img_url}
                    />

                    <h4 id="article_card_author">
                      Created by:&nbsp;
                      <Link to={"/articles?author=" + article.author}>
                        {article.author}
                      </Link>
                    </h4>
                    <h4 id="article_card_topic">
                      Topic:&nbsp;
                      <Link to={"/articles?topic=" + article.topic}>
                        {article.topic}
                      </Link>
                    </h4>
                    <h3 id="article_card_comments">
                      <Link
                        to={"/articles/" + article.article_id + "#comments"}
                      >
                        Comments: {article.comment_count}
                      </Link>
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Articles;
