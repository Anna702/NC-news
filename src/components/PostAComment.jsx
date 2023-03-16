import { useState } from "react";
import { postComment } from "./api";

const PostAComment = (props) => {
  // const [newComment, setNewComment] = useState("");

  const article_id = props.article_id;

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      username: "grumpy19",
      body: event.target[0].value,
    };

    postComment(article_id, newComment).then((newCommentPosted) => {
      props.setComments([newCommentPosted, ...props.comments]);
    });
  };

  return (
    <form className="comment_adder" onSubmit={handleSubmit}>
      <h2>What do you think?</h2>
      <label htmlFor="newComment">Add a comment</label>
      <textarea
        id="newComment"
        // value={newComment}
        // onChange={(event) => setNewComment(event.targer.value)}
      />
      <button type="submit">Add a comment</button>
    </form>
  );
};

export default PostAComment;
