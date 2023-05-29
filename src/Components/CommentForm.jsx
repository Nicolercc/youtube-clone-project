import { useState, useEffect } from "react";

function CommentForm() {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (editingCommentIndex === null) {
      addComment();
    } else {
      updateComment(editingCommentIndex);
    }
    setComment("");
    setCommenter("");
    setEditingCommentIndex(null);
  }

  function addComment() {
    const arr = [...comments, { commenter: commenter, comment: comment }];
    // arr.push({ commenter: commenter, comment: comment });
    setComments(arr);
  }

  const [editingCommentIndex, setEditingCommentIndex] = useState(null);

  function editComment(index) {
    setCommenter(comments[index].commenter);
    setComment(comments[index].comment);
    setEditingCommentIndex(index);
  }

  function updateComment(index) {
    const arr = [...comments];
    arr[index] = { commenter: commenter, comment: comment };
    setComments(arr);
  }

  function deleteComment(index) {
    const arr = [...comments];
    arr.splice(index, 1);
    setComments(arr);
  }

  return (
    <section className="section-form">
      <hr className="hr"></hr>
      <h4 className="commentsForm">Leave a Comment: </h4>
      <form className="commForm">
        <label htmlFor="commenter">Name</label>
        <br />
        <input
          className="commInput"
          type="text"
          id="commenter"
          value={commenter}
          onChange={(e) => setCommenter(e.target.value)}
        ></input>
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <input
          className="commInput"
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <br />
        <button id="formButton" type="submit" onClick={handleFormSubmit}>
          {editingCommentIndex !== null ? "Update Comment" : "Add Comment"}
        </button>
      </form>
      <ul className="comm">
        {comments.map((c, i) => {
          return (
            <li key={i}>
              <span className="commenter">{c.commenter}</span>
              <br />
              <span className="commentText">{c.comment}</span>
              <br />
              <button className="editButton" onClick={() => editComment(i)}>
                Edit
              </button>
              <button className="deleteButton" onClick={() => deleteComment(i)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CommentForm;
