import { db } from "../../../firebase";
import { ref, remove, update } from "firebase/database";
import { useState } from "react";
import "./Video.css";

export default function Comment({ index, commentData, id, el }) {
  let [isEdit, setIsEdit] = useState(false);
  let [tempUuid, setTempUuid] = useState("");
  let [commentText, setCommentText] = useState({ name: "", comment: "" });

  //update
  function handleUpdate(el) {
    setIsEdit(true);
    setTempUuid(el);
  }

  function handleCommentChange(e) {
    setCommentText({
      ...commentText,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmitChange(el) {
    update(ref(db, `/${id}/${el}`), {
      text: commentText,
      uuid: tempUuid,
    });
    setCommentText({ name: "", comment: "" });
    setIsEdit(false);
  }

  //delete
  function handleDelete(el) {
    remove(ref(db, `/${id}/${el}`));
    setIsEdit(false);
  }

  return (
    <li className="individual-comment-wrapper" key={index}>
      <h4>{`${commentData[el].text.name}`}</h4>
      <p>{`${commentData[el].text.comment}`}</p>
      {isEdit ? (
        <>
          <input
            id="name"
            type="text"
            value={commentText.name}
            onChange={handleCommentChange}
            placeholder="Edit Name"
          />
          <input
            id="comment"
            type="text"
            value={commentText.comment}
            onChange={handleCommentChange}
            placeholder="Edit Comment"
          />
          <button onClick={() => handleSubmitChange(el)}>Submit Change</button>
          <button
            onClick={() => {
              setIsEdit(false);
              setCommentText({ name: "", comment: "" });
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        ""
      )}
      {!isEdit ? <button onClick={() => handleUpdate(el)}>Update</button> : ""}
      <button onClick={() => handleDelete(el)}>Delete</button>
      <hr className="hr3" />
    </li>
  );
}
