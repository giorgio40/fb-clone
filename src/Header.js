import React from "react";
import "./Header.css";
import image from "./assets/Cmah_facebook_icon.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import FlagIcon from "@mui/icons-material/Flag";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Avatar from '@mui/material/Avatar';



const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img src={image} alt="facebook logo" />
          <div className="header__input">
            <SearchIcon />
            <input type="text" placeholder="search facebook" />
          </div>
        </div>
        <div className="header__center">
          <div className="header__option header__option--active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header__option">
            <FlagIcon fontSize="large" />
          </div>
          <div className="header__option">
            <SubscriptionsIcon fontSize="large" />
          </div>
          <div className="header__option">
            <StorefrontIcon fontSize="large" />
          </div>
          <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar />
                <h4>George H</h4>
            </div>
            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton>
              <CircleNotificationsIcon />
            </IconButton>
            <IconButton>
            <ExpandCircleDownIcon/>
            </IconButton>

        </div>
      </div>
    </>
  );
};

export default Header;
