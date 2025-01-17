import React from 'react'
import "./_header.scss"

import {FaBars} from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"


const Header = ({handleToggleSidebar}) => { 
  return (
    <div className="header">
      <FaBars className="header__menu" size={26}
      onClick={()=>handleToggleSidebar()}
      />

      <img src="images\youtube_logo.png" alt="youtubelogo" className='header__logo'/>

      <form>
        <input type="text" placeholder="Search"/>
        <button type="submit">
          <AiOutlineSearch size={22}/>
        </button>
      </form>

      <dic className="header__icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="images/profile_logo.png" alt="avatar"/>
      </dic>
   
    </div>
  )
}

export default Header
