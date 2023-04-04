import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import {IoIosMenu} from "react-icons/io"
function header() {
  return (
    <header className="HomeHeader">
      <div className="wrapperContainer">
        <div className="wrapperContainerNavLinkDiv">
        <IoIosMenu className="burgerMenuProfile"/>
          <NavLink className={"wrapperContainerNavLink"}>
            Profile <AiOutlineRight className="iconProfile" />
          </NavLink>
        </div>
        <BurgerMenu/>
        <input type="text" className="searchProfile" placeholder="Search" />
      </div>
    </header>
  );
}

export default header;
