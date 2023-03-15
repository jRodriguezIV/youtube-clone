import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { searchByTerm } from "../../api/fetch"

import './Home.css'


export default function Home({ searchState, setSearchState}) {
    const [videoList, setVideoList] = useState([])

    let {videoId} = useParams()
    console.log(videoId)

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
                   <Link to={`/${video.id.videoId}`}><img style={{width: 240, heigth: 240}} src={video.snippet.thumbnails.medium.url} /></Link> 
                    <h4>{video.snippet.title}</h4>
                    </div>
                )}
            )) : ("")
            }
            {/* <img style={{width: 160, heigth: 200}} src= "https://i.ytimg.com/vi/QYh6mYIJG2Y/mqdefault.jpg" /> */}
        </div>
    )
}