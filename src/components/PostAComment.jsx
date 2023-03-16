import { useState } from "react";
import { postComment } from "./api";

const PostAComment = (props) => {
  const article_id = props.article_id;
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMsg("");
    const postedUsername = event.target[0].value;
    const postedBody = event.target[1].value;

    if (postedUsername === "" || postedBody === "") {
      setErrorMsg("username or comment can not be empty");
      return;
    }
    const newComment = {
      username: postedUsername,
      body: postedBody,
    };

    postComment(article_id, newComment)
      .then((newCommentPosted) => {
        props.setComments([newCommentPosted, ...props.comments]);
      })
      .catch((err) => {
        if (!!err?.response?.data?.msg) {
          setErrorMsg(err.response.data.msg);
          return;
        }
        setErrorMsg("Something went wrong. Try again later");
      });
  };

  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <h2>What do you think?</h2>

      {errorMsg ? <p id="comment_error">{errorMsg}</p> : ""}

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
