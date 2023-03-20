
import { Link } from "react-router-dom";
<<<<<<< HEAD


=======
import { searchByTerm } from "../../../api/fetch";
import ErrorMessage from '../Error/ErrorMessage';
>>>>>>> d98a8f2b0a307fb7e70b268f703f0338626e233b

import React from "react";
import "./Home.css";

<<<<<<< HEAD
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
=======
export default function Home({ searchState }) {
    const [videoList, setVideoList] = useState([]);

    const [open, setIsOpen] = useState(false);
    

    useEffect(() => {
        searchByTerm(searchState).then((response) => {
            setVideoList(response.items)
        }).catch((error)=> console.log(error));
        setIsOpen(true)
    }, [searchState])

    return (
        <div className="thumbnails-wrapper">


            {videoList.length !== 0 ? (videoList.map((video) => {
                console.log(video)

                return (
                    <div className="thumbnail">
                   <Link to={`/${video.id.videoId}`}><img style={{width: 314, heigth: 240}} src={video.snippet.thumbnails.medium.url} alt={'Youtube Thumbnail'} /></Link> 
                    <h4>{video.snippet.title}</h4>
                    </div>
                )}
            )) : ("")
            }

            {open ? (
                <ErrorMessage open={open} close={() => setIsOpen(false)}>
                   Something went wrong!...
                </ErrorMessage>
            ) : null}
        </div>
    )
>>>>>>> d98a8f2b0a307fb7e70b268f703f0338626e233b
}
