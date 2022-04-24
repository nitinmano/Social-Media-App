import React from "react";
import "./css/Header.css";
import logo from "./images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { useStateValue } from "./StateProvider";
import LogoutIcon from '@mui/icons-material/Logout';
import { actionTypes } from './reducer';

function Header() {

  const [{user}, dispatch] = useStateValue();
  const [search, setSearch] = React.useState('');


  const signOut = () => {

    localStorage.clear();
    dispatch({
        type: actionTypes.RESET_USER,
        user: null,
    });
}

 




  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" />
        {/* <div className="header__input">
        </div> */}
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <LogoutIcon onClick={signOut} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
