import React, { useState } from 'react';
import "../StyleCSS/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import {Link} from "react-router-dom";
import sam2 from "../image/sam2.jpg";


const Header = ({onSubmits}) => {
    const [inputSearch, setInputSearch] = useState("")
    const onEnterSearch = (e)=>{
        e.preventDefault()
        onSubmits(inputSearch)
    }
    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon />
                <Link to={"/"}>
                <img className="header__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png" alt="youtube" />
                </Link>
            </div>

            <form className="header__input" onSubmit={onEnterSearch}>
                <input
                type="text"
                placeholder="Search"
                value={inputSearch}
                onChange={(e)=>{setInputSearch(e.target.value)}}
                />

                <Link to={`/searchVideo/${inputSearch}`}>
                <SearchIcon type="submit"
                className="header__inputButton"
                />
                </Link>
            
            </form>

            <div className="header__right">
                <a href="https://github.com/Saman1418"><GitHubIcon className="header__icon black"/></a>
                {/* <GitHubIcon className="header__icon"/> */}
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Link to={"/project"}>
                <Avatar 
                // src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/RS_Components_logo.svg/1200px-RS_Components_logo.svg.png"
                src={sam2}
                />
                </Link>
                
                
            </div>



        </div>
    )
}

export default Header


// import React from "react";

// class Header extends React.Component {
//     state = { term: "" }

//     onEnterSubmit = (e) => {
//         e.preventDefault()

//         this.props.onSubmits(this.state.term)

//     }


//     render() {
//         return (
//             <div className="ui segment">
//                 <form className="ui form" onSubmit={this.onEnterSubmit}>
//                     <div className="field">
//                         <label>Video Search:</label>
//                         <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
// export default Header;
