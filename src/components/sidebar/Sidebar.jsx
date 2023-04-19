import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Sidebar.scss";

import {useLocation} from 'react-router-dom';

// import icons from react-icons
import { Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { BsGrid } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { AiOutlineTag } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

// for state management
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../../redux/features/sidebarSlice.js";
import {changeMode} from "../../redux/features/changeModeSlice.js";

const Sidebar = () => {
  const [active, setActive] = useState(0);

  const onClick = (index) => {
    setActive(index);
  };

  const location = useLocation();

  // redux for state management
  const dispatch = useDispatch();
  const open = useSelector((state) => state.sidebar.open);
  const mode = useSelector((state) => state.mode.dark);

  const list = [
    {
      name: "Home",
      icon: <VscHome/>,
      route: "/",
    },
    {
      name: "Dashboard",
      icon: <BsGrid/>,
      route: "/dashboard",
    },
    {
      name: "Search",
      icon: <GoSearch/>,
      route: "/search",
    },
    {
      name: "Products",
      icon: <AiOutlineTag/>,
      route: "/products",
    },
    {
      name: "Cart",
      icon: <FaShoppingBasket/>,
      route: "/cart",
    },
    {
      name: "Bookmarks",
      icon: <BsBookmark/>,
      route: "/bookmarks",
    },
    {
      name: "Help",
      icon: <IoSettingsOutline/>,
      route: "/help",
    },
    {
      name: mode ? "Dark mode" : "Light mode",
      icon: mode ? (
        <MdOutlineDarkMode/>
      ) : (
        <MdOutlineLightMode/>
      ),
      route: location.pathname,
      state: true,
    },
  ];

  return (
    <div className={`${!open && "openSide"} sidebar`}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="after"></div>
      <div className="open" onClick={()=> dispatch(openSidebar())}>
        {open ? <BsChevronLeft /> : <BsChevronRight />}
      </div>
      {open ? (
        <div className="nav">
          {list.map((item, idx) => (
            <Link
              to={`${item.route}`}
              key={idx}
              onClick={item.state ? ()=> dispatch(changeMode())  : () => onClick(idx)}
              className={`${active === idx ? "active_" : ""}`}
            >
              <div style={{ fontSize: "20px" }} >{item.icon}</div>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="close">
          {list.map((item, idx) => (
            <Link
              to={`${item.route}`}
              key={idx}
              onClick={item.state ? ()=> dispatch(changeMode()) : ()=> onClick(idx)}
              className={`${active === idx ? "active_" : ""}`}
            >
              <div style={{ fontSize: "30px" }} >{item.icon}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;

