import { useEffect, useState } from "react";
import { getComments } from "./api";

const Comments = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const article_id = props.article_id;

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <main className="Comments">
      <h2 id="comments_header">Comments</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : comments.length === 0 ? (
        "no comments yet"
      ) : (
        <ul className="comments_list">
          {comments.map((comment) => {
            return (
              <li className="comment_one" key={comment.comment_id}>
                <p id="comment_body">{comment.body}</p>
                <h4 id="comment_author">Created by:&nbsp;{comment.author}</h4>
                <h5 id="comment_added_at">
                  Added:&nbsp;
                  {new Date(comment.created_at).toDateString()}
                </h5>
                <h3 id="comments_votes">
                  votes:
                  {comment.votes}
                </h3>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Comments;
