import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function BurgerMenuComponets(props) {
  return (
    <div className="BurgermenuComponets">
      <NavLink className={"BurgerMenuNavLink"} to={props.navLink}>
        {props.icone}
        <p className="BurgerMenuNavLinkP">{props.titile}</p>
      </NavLink>
    </div>
  );
}

export default BurgerMenuComponets;
