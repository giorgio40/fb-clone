import { ExpandMoreOutlined } from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"
import SideBarRow from './SideBarRow'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
const Sidebar = () => {
  return (
    <div>
      {/* <SideBarRow src="./assets/george.jpg" title="George H"/>  */}
      <SideBarRow Icon={LocalHospitalIcon} title="Covid info Center"/>
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SideBarRow Icon={PeopleIcon} title="friends"/>
      <SideBarRow Icon={ChatIcon} title="Messenger"/>
      <SideBarRow Icon={StorefrontIcon} title="MarketPlace"/>
      <SideBarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SideBarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>
    </div>
    
  )
}

export default Sidebar
