import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function BurgerMenuComponets(props) {
  return (
    <div className="BurgermenuComponets">
      {props.icone}
      <NavLink className={"BurgerMenuNavLink"} to={props.navLink}>
        {props.titile}
      </NavLink>
    </div>
  );
}

export default BurgerMenuComponets;
