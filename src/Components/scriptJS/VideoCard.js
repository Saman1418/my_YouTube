import { Avatar } from '@material-ui/core'
import React from 'react'
import "../StyleCSS/VideoCard.css"


const VideoCard = (props) => {
    return (
        <div className="videoCard"
        // onClick={()=>{props.onVideoSelect(props.video1)}}
        >
            <img className="videoCard__thubnail" src={props.video1.snippet.thumbnails.medium.url} alt="video" />

            <div className="videoCard__info">
                <Avatar className="videoCard__Avatar" src={props.video1.snippet.thumbnails.medium.url}/>

                <div className="videoCard__text">
                    <h4>{props.video1.snippet.title}</h4>
                    <p>{props.video1.snippet.channelTitle}</p>
                    <p>view * {props.video1.snippet.publishTime}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
