import React from 'react';
import "./sidebar.css";
import SidebarRow from './SidebarRow';
import  LocalHospitalIcon  from '@mui/icons-material/LocalHospital';

function sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
    </div>


  )
}

export default sidebar