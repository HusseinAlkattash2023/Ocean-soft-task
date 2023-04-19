import React from 'react';
import "./Navbar.scss"
import { GoSearch } from "react-icons/go";
import { MdNotificationsNone } from "react-icons/md";
import { BsChatText } from "react-icons/bs";
import avatar from "../../assets/avtare.png";

import { useSelector } from "react-redux";

const Navbar = () => {

    const open = useSelector((state) => state.sidebar.open);

  return (
    <div className={`${open && "navbar_"} navbar`}>
        <div className="search">
            <input type="search" placeholder="Search here..."/>
            <span className="icon"><GoSearch/></span>
        </div>
        <div className="section2">
            <div className="welcome">
                <div>
                    <h5>Welcome, <span>!Ahmad</span></h5>
                    <span>Log out</span>
                </div>
                <div className="avatar">
                    <div></div>
                    <img src={avatar} alt=""/>
                </div>
            </div>
            <div className="other">
                <span><MdNotificationsNone style={{fontSize:"28px"}}/></span>
                <span><BsChatText style={{fontSize:"25px"}}/></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar