import React from "react";
import "../StyleCSS/Detail.css"

const Detail = ({ Selectvideo }) => {
    if (!Selectvideo) {
        return <div>.</div>
    }
    const videosrc = `https://www.youtube.com/embed/${Selectvideo.id.videoId}`
    return (
        // <div className="detail">
        //     <div className="detail__app">
        //         <iframe src={videosrc} />
        //     </div>
        //     <div className="detail__app">
        //         <h4 className="ui header">{Selectvideo.snippet.title}</h4>
        //         <p>{Selectvideo.snippet.description}</p>
        //     </div>
        // </div>
        <div class="card mb-3">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <iframe className="detail__height" src={videosrc} />
            <div className="card-body">
                <h5 className="card-title">{Selectvideo.snippet.title}</h5>
                <p className="card-text">{Selectvideo.snippet.description}</p>
                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>

    )
}

export default Detail;