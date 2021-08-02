import React from 'react';
import "../StyleCSS/VideoRow.css";
import TouchAppIcon from '@material-ui/icons/TouchApp';

const VideoRow = ({ image, channel, subs, views, title, timestamps, description,link,linkName}) => {

    return (
        <div className="videoRow">
            <img className="videoRow__image" src={image} alt={channel} />
            <div className="videoRow__text">
                <h5>{title}</h5>
                <p className="videoRow__headline">Design by {channel}</p>
                {/* <p className="videoRow__headline">{channel} * <span className="videoRow__subs"><span className="videoRow__sub">{subs} </span>subscription</span>  {views} views * {timestamps}</p> */}
                <p className="videoRow__description">{description}</p>
                <a className="clickMe" href={link}>{linkName} <TouchAppIcon/></a>

            </div>


        </div>
    )
}

export default VideoRow;
