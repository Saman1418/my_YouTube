import React from 'react';
import "../StyleCSS/SidebarRow.css";


const SidebarRow = ({ title, Icon,selected }) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <p className="sidebarRow__title">{title}</p>
            

        </div>
    )
}

export default SidebarRow;
