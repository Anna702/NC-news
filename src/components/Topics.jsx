import { useEffect, useState } from "react";
import { getTopics } from "./api";
import Footer from "./Footer";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="topics">
      <h2 id="topics_header">Topics</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="topics_list">
          {topics.map((topic) => {
            return (
              <li key={topic.topic_id} className="li_topics">
                <div className="single_topic">
                  <h2 id="topic_slug">Theme:&nbsp;{topic.slug}</h2>
                  <h3 id="topic_description">
                    Feeling:&nbsp;{topic.description}
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Topics;
