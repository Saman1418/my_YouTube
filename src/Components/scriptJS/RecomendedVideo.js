import React from 'react'
import "../StyleCSS/RecomendedVideo.css"
import VideoCard from './VideoCard'
import Api1 from './Api1';


const RecomendedVideo = (props) => {
    const API1 = Api1(props.url1)
    const showVIdeo = API1.map((video1)=>{
        return(
            <>
            <VideoCard
            video1={video1}>
            {/* onVideoSelect={props.onVideoSelect} */}

            </VideoCard>
            </>
        )

    })   
    return (
        <div className="RecomendedVideo">
            <h2>Recommended</h2>
            <div className="RecomendedVideo__videoCard">
            {showVIdeo}
                
            </div>

        </div>
    )
}

export default RecomendedVideo;
