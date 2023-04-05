import React , { useEffect, useState } from "react";
import "../Profile.css";
import { NavLink } from "react-router-dom";
import ProfileChangeImg from './ProfileChangeImg'

function ProfileMain(props) {
  const [changeImg , setChangeImg] = useState(false)
  const imgChangeHandleOpen = () => {
    setChangeImg(!changeImg)
  }
  return (
    <div className="ProfileMainDiv">
      <div className="ProfileStatusDiv">
        <div className="ProfileNameImgDiv">
          <div className="ProfileNameImgDivImgDiv" onClick={imgChangeHandleOpen}>
            <img className="ProfileNameImgDivImg" src={props.data.profileImg} alt="" />
          </div>
          {changeImg ? <ProfileChangeImg rerenderComponent={props.rerenderComponent} setRerenderComponent={props.setRerenderComponent} clickFunc={imgChangeHandleOpen}/> : ''}
          <p className="ProfileName">{props.data.name}</p>
        </div>
        <div className="ProfileUserproprtyDiv">
          <div className="ProfileInformationDiv ProfileEmailDiv">
            <p className="ProfileEmail">Email</p>
            <p className="ProfileEmailName">{props.data.email ? props.data.email : '- - -'}</p>
          </div>
          <div className="ProfileInformationDiv ProfileLoginDiv">
            <p className="ProfileEmail">Login</p>
            <p className="ProfileEmailName">{props.data.login ? props.data.login : '- - -'}</p>
          </div>
          <div className="ProfileInformationDiv ProfileNameDiv">
            <p className="ProfileEmail">Name</p>
            <p className="ProfileEmailName">{props.data.name ? props.data.name : '- - -'}</p>
          </div>
          <div className="ProfileInformationDiv ProfileNameDiv">
            <p className="ProfileEmail">Last name</p>
            <p className="ProfileEmailName">{props.data.lname ? props.data.lname : '- - -'}</p>
          </div>
          <div className="ProfileInformationDiv ProfileNameDiv">
            <p className="ProfileEmail">Display name</p>
            <p className="ProfileEmailName">{props.data.displayName ? props.data.displayName : '- - -'}</p>
          </div>
          <div className="ProfileInformationDiv ProfileNameDiv">
            <p className="ProfileEmail">Phone</p>
            <p className="ProfileEmailName">{props.data.phone ? props.data.phone : '- - -'}</p>
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
