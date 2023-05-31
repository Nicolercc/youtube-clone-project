import { useState, useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { getRandomColor, generateInitials } from '../helpers';

function CommentForm() {
  const [commenter, setCommenter] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments'));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (editingCommentIndex === null) {
      addComment();
    } else {
      updateComment(editingCommentIndex);
    }
    setComment('');
    setCommenter('');
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

  // const initials = generateInitials(commenter);
  // const randomColor = getRandomColor();

  return (
    <section className="section-form">
      <hr className="hr"></hr>
      <h4 className="commentsForm">Leave a Comment: </h4>
      <form className="commForm">
        <label htmlFor="commenter">{commenter}</label>
        <input
          className="commInput"
          type="text"
          id="commenter"
          placeholder="Your Name"
          value={commenter}
          onChange={(e) => setCommenter(e.target.value)}
        ></input>
        <br />
        <label htmlFor="comment">{Comment}</label>
        <input
          className="commInput"
          type="text"
          placeholder="Leave a Comment"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <br />
        <button id="formButton" type="submit" onClick={handleFormSubmit}>
          {editingCommentIndex !== null ? 'Update Comment' : 'Add Comment'}
        </button>
      </form>
      <div className="comm">
        {comments.map((c, i) => {
          const initials = generateInitials(c.commenter);
          const randomColor = getRandomColor();

          return (
            <div key={i}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  maxWidth: '100%',
                }}
              >
                <div
                  className="profile-image"
                  style={{ backgroundColor: randomColor }}
                >
                  <span className="initials">{initials}</span>
                </div>
                <p className="commenter">{c.commenter}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className="commentText">{c.comment}</p>
                <span className="editButton" onClick={() => editComment(i)}>
                  <AiOutlineEdit />
                </span>
                <span className="deleteButton" onClick={() => deleteComment(i)}>
                  <MdDeleteOutline />
                </span>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CommentForm;
