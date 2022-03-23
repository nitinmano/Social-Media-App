import React from 'react';
import "./sidebar.css";
import SidebarRow from './SidebarRow';

function sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow />
        <SidebarRow />
        <SidebarRow />
        
    </div>


  )
}

export default sidebar