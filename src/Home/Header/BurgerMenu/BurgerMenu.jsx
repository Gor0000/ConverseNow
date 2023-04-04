import React from "react";
import "./BurgerMenu.css";
import BurgerMenuComponets from "./BurgerMenuComponets";
import { IoMdSettings } from "react-icons/io";

function BurgerMenu() {
  return (
    <div className="BurgerMenuHeader">
      <BurgerMenuComponets
        icone={<IoMdSettings />}
        titile={"Settings"}
        navLink={"/addUser"}
      />
      <BurgerMenuComponets
        icone={<IoMdSettings />}
        titile={"Add user"}
        navLink={"/addUser"}
      />
    </div>
  );
}

export default BurgerMenu;
