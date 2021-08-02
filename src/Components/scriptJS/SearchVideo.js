import React from 'react'
import "../StyleCSS/SearchVideo.css"
import SearchVideoCard from "./SearchVideoCard";

const SearchVideo = (props) => {
    const detail = props.SearchVideos.map((video1)=>{
        return(
            <>
            <SearchVideoCard
            onVideoSelect={props.onVideoSelect}
            video1={video1} />
            </>
        )
    })
    return (
        // <h1>Search Video</h1>
        <div className="RecomendedVideo">
            <h2>Search video</h2>
            <div className="RecomendedVideo__videoCard">
            {detail}
                
            </div>



        </div>
    )
}

export default SearchVideo;
