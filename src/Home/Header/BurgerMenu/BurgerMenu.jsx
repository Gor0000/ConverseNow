import React from "react";
import "./BurgerMenu.css";
import BurgerMenuComponets from "./BurgerMenuComponets";
import { AiFillAndroid } from "react-icons/ai";

function BurgerMenu() {
  return (
    <div className="BurgerMenuHeader">
      <BurgerMenuComponets
        icone={<AiFillAndroid />}
        titile={"Add user"}
        navLink={"/addUser"}
      />
      <BurgerMenuComponets
        icone={<AiFillAndroid />}
        titile={"Add user"}
        navLink={"/addUser"}
      />
    </div>
  );
}

export default BurgerMenu;
