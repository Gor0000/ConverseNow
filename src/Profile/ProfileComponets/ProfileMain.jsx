import React from "react";
import "../Profile.css";
import ProfileImg from "../../img/Group 203.png";
import { NavLink } from "react-router-dom";

function ProfileMain() {
  return (
    <div className="ProfileMainDiv">
      <div className="ProfileStatusDiv">
        <div className="ProfileNameImgDiv">
          <div className="ProfileNameImgDivImgDiv">
            <img className="ProfileNameImgDivImg" src={ProfileImg} alt="" />
          </div>
          <p className="ProfileName">Иван</p>
        </div>
        <div className="ProfileUserproprtyDiv">
          <div className="ProfileInformationDiv ProfileEmailDiv">
            <p className="ProfileEmail">Email</p>
            <p className="ProfileEmailName">pochta@yandex.ru</p>
          </div>
          <div className="ProfileInformationDiv ProfileLoginDiv">
            <p className="ProfileEmail">Login</p>
            <p className="ProfileEmailName">ivanivanov </p>
          </div>
          <div className="ProfileInformationDiv ProfileNameDiv">
            <p className="ProfileEmail">Name</p>
            <p className="ProfileEmailName">Иван</p>
          </div>
          <div className="ProfileInformationDiv ProfileNameDiv">
            <p className="ProfileEmail">Last name</p>
            <p className="ProfileEmailName">Иванов</p>
          </div>
          <div className="ProfileInformationDiv ProfileNameDiv">
            <p className="ProfileEmail">Display name</p>
            <p className="ProfileEmailName">Иван</p>
          </div>
          <div className="ProfileInformationDiv ProfileNameDiv">
            <p className="ProfileEmail">Phone</p>
            <p className="ProfileEmailName">+7 (909) 967 30 30</p>
          </div>
        </div>
        <div className="ProfileChangeDiv">
          <div className="ProfileInformationDiv">
            <NavLink className="ProfileChnage">Change data</NavLink>
          </div>
          <div className="ProfileInformationDiv">
            <NavLink className="ProfileChnage">Change password</NavLink>
          </div>
          <div className="ProfileInformationDiv">
            <NavLink to={"/Login"} className="ProfileLogOut">
              Log out
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
