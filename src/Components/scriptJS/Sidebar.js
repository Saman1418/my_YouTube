import React from 'react';
import "../StyleCSS/Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExploreIcon from '@material-ui/icons/Explore';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={ExploreIcon} title="Explore" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscribtion" />
            <hr></hr>
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={PlayCircleOutlineIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltIcon} title="Likes Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
            <hr></hr>


        </div>
    )
}

export default Sidebar;
