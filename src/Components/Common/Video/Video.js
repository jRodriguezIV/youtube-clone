import { useParams } from "react-router-dom"
import YouTube from "react-youtube"
import './Video.css'

export default function Video() {

    let {id} = useParams()

    return (
        <div className="video-wrapper">
            <YouTube videoId={`${id}`}/>
        </div>
    )
}