import React from "react";
import "./sidebar.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
          <h3 className="sidebarList">
            <li className="sidebarListItem active">
              <DensityMediumIcon className="sidebarIcon"/>
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              analises
            </li>
            <li className="sidebarListItem">
              <AccountBalanceIcon  className="sidebarIcon"/>
              outros
            </li>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
