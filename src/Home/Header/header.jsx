import React , { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import {IoIosMenu} from "react-icons/io"
import BurgerMenu from './BurgerMenu/BurgerMenu'

function Header() {
  const [isActive , setIsActive] = useState(false)
  function handle () {
    setIsActive(!isActive)
  }
  return (
    <header className="HomeHeader">
      <div className="wrapperContainer">
        <div className="wrapperContainerNavLinkDiv">
          <IoIosMenu onClick={handle} className="burgerMenuProfile"/>
          <NavLink to={'/Profile'} className={"wrapperContainerNavLink"}>
            Profile <AiOutlineRight className="iconProfile" />
          </NavLink>
        </div>
        {isActive ? <BurgerMenu/> : ''}
        <input type="text" className="searchProfile" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;
