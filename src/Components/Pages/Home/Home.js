
import { Link } from "react-router-dom";



import "./Home.css";

export default function Home({ videoList }) {
  

  return (
  <>
    <div className="thumbnails-wrapper">
          {videoList && videoList.length !== undefined
            ? videoList.map((video, index) => {
                return (
                  <div key={index} className="thumbnail">
                    <Link to={`/${video.id.videoId}`}>
                      <img
                        style={{ width: 314, heigth: 240 }}
                        src={video.snippet.thumbnails.medium.url}
                        alt={"Youtube Thumbnail"}
                      />
                    </Link>
                    <h4>{video.snippet.title}</h4>
                  </div>
                );
              })
            : ""}
    </div>
    </>
  );
}
