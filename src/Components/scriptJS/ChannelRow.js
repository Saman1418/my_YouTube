import React from 'react'
import "../StyleCSS/ChannelRow.css"
import { Avatar } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const ChannelRow = ({ image, channel, verified, subs, noOfVideos, description1,description2 }) => {
    return (
        <div className="ChannelRow">
            <Avatar className="ChannelRow__logo" src={image} alt="logo" />

            <div className="ChannelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
                {/* <p>{subs} subscribers * {noOfVideos} videos</p> */}
                <p className="p">{description1}</p>
                <p>{description2}</p>
            </div>

        </div>
    )
}

export default ChannelRow
