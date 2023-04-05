import React from "react";
import "./BurgerMenu.css";
import BurgerMenuComponets from "./BurgerMenuComponets";
import { IoMdSettings , IoMdExit } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { MdHelpCenter } from "react-icons/md";
import { RiFeedbackFill, RiStickyNoteFill } from "react-icons/ri";

function BurgerMenu() {
  return (
    <div className="BurgerMenuHeader">
      <BurgerMenuComponets
        icone={<IoMdSettings />}
        titile={"Settings"}
        navLink={"/addUser"}
      />
      <BurgerMenuComponets
        icone={<HiUserGroup />}
        titile={"Contacts"}
        navLink={"/Contacts"}
      />
      <BurgerMenuComponets
        icone={<RiStickyNoteFill />}
        titile={"Notes"}
        navLink={"/Notes"}
      />
      <BurgerMenuComponets
        icone={<MdHelpCenter />}
        titile={"Help"}
        navLink={"/Help"}
      />
      <BurgerMenuComponets
        icone={<RiFeedbackFill />}
        titile={"Feedback"}
        navLink={"/Feedback"}
      />
      <BurgerMenuComponets
        icone={<IoMdExit />}
        titile={"Log Out"}
        navLink={"/Login"}
      />
    </div>
  );
}

export default BurgerMenu;
