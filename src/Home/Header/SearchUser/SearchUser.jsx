import React, { useEffect } from "react";
import "./SearchUser.css";
import SearchLoader from "./SearchLoader/SearchLoader";
import SearchUserProfile from "./SearchUserProfile/SearchUserProfile";
import { NavLink } from "react-router-dom";

function SearchUser(props) {
  return (
    <div className="SearchUser">
      <p className="SearchUserP">
        {props.searchData.message ? props.searchData.message : ''}
      </p>
      {props.searchData.user ? props.searchData.user.map((item) => {
        return (
          <NavLink key={item.userId} to={`/users/${item.userId}`}>
            <SearchUserProfile profileImg={item.profileImg} name={item.name}/>
          </NavLink>
        )
      }) : ""}
      {props.isLoading ? <SearchLoader /> : ""}
    </div>
  );
}

export default SearchUser;
