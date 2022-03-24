import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header___left">
        <img src={logo} alt="logo" />
        <div className="header___input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header___center">
        <div className="header___option header___option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header___option">
          <FlagIcon fontSize="large" />
        </div>
      </div>

      <div className="header___right">
        <div className="header___info">
          <Avatar />
          <h4>Nitin</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
