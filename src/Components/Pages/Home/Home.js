import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { searchByTerm } from "../../../api/fetch"

import './Home.css'


export default function Home({ searchState }) {
    const [videoList, setVideoList] = useState([])



    useEffect(() => {
        searchByTerm(searchState).then((response) => {
            setVideoList(response.items)
        }).catch((error)=> console.log(error))
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
        </div>
    )
}