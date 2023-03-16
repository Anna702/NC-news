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

    // postComment(article_id, newComment).then((newCommentPosted) => {
    //   props.setComments([newCommentPosted, ...props.comments]);
    // });
  };

  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <h2>What do you think?</h2>
      <div className="comment_adder">
        <label id="label_username" htmlFor="input_username">
          Username
        </label>
        <input type="text" placeholder="Enter Username" id="input_username" />
        <label id="label_textarea" htmlFor="newComment">
          Add a comment
        </label>
        <textarea
          id="newComment"
          placeholder="Add your comment here..."
          // value={newComment}
          // onChange={(event) => setNewComment(event.targer.value)}
        />
        <button id="button_new_comment" type="submit">
          Add a comment
        </button>
      </div>
    </form>
  );
};

export default PostAComment;
