import { useParams } from "react-router-dom";
import { useState } from "react";
import YouTube from "react-youtube";
import './Video.css'

export default function Video() {
  let [text, setText] = useState({ name: "", comment: "" });
  let [commentData, setCommentData] = useState([]);

  let { id } = useParams();

  function handleChange(e) {
    setText({
      ...text,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCommentData([...commentData, text]);
    setText({ name: "", comment: "" })
  }

  return (
    <section className="video-wrapper">
      <YouTube videoId={`${id}`} />

        <div className="comment-wrapper">
            <hr className="hr1"/>
      <form onSubmit={handleSubmit} className="comment-form">
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
        <hr className="hr2"/>
      </form>
    
        <ul className="comment-list">
            {commentData.map((el, index) => {
                return(
                     <li key={index}>
                        <h4>{`${el.name}`}</h4>
                        <p>{`${el.comment}`}</p>
                     </li>
                )
            })}
        </ul>
        </div>
    </section>
  );
}
