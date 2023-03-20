import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { db } from "../../../firebase";
import { set, ref, onValue } from "firebase/database";
import { uid } from "uid";
import "./Video.css";
import Comment from "./Comment";

export default function Video() {
  let [text, setText] = useState({ name: "", comment: "" });
  let [commentData, setCommentData] = useState([]);
  let [keys, setKeys] = useState([]);

  let { id } = useParams();

  function handleChange(e) {
    setText({
      ...text,
      [e.target.id]: e.target.value,
    });
  }

  //firebase
  //write
  function writeToDatabase(e) {
    const uuid = uid();
    e.preventDefault();
    set(ref(db, `/${id}/${uuid}`), {
      text,
      uuid,
    });
    setText({ name: "", comment: "" });
  }
  //read

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null && data[id]) {
        setCommentData(data[id]);
        setKeys(Object.keys(data[id]));
      }
      else {
        setCommentData([]);
        setKeys([]);
      }
    });
  }, []);

  return (
    <section className="video-wrapper">
      <YouTube videoId={`${id}`} />

      <div className="comment-wrapper">
        <hr className="hr1" />
        <form onSubmit={writeToDatabase} className="comment-form">
          <label htmlFor="name" className="label-name">
            Name
            <br />
            <input
              id="name"
              type="text"
              value={text.name}
              onChange={handleChange}
              placeholder="Name..."
            />
          </label>
          <br />
          <label className="label-comment" htmlFor="comment">
            Comment
            <br />
            <input
              id="comment"
              type="text"
              value={text.comment}
              onChange={handleChange}
              placeholder="..."
            />
          </label>
          <br />
          <button type="submit">Submit</button>
          <hr className="hr2" />
        </form>

        <ul className="comment-list">
          {keys
            ? keys.map((el, index) => {
                return (
                  <Comment
                    index={index}
                    commentData={commentData}
                    id={id}
                    el={el}
                    text={text}
                    setText={setText}
                    handleChange={handleChange}
                  />
                );
              })
            : ""}
        </ul>
      </div>
    </section>
  );
}
