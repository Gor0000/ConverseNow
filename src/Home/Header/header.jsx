import React, { useState , useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import ChatsHeader from "./ChatsHeader/ChatsHeader";
import img from "./ChatsHeader/ddd.png";
import SearchUser from "./SearchUser/SearchUser";
import { useGetUsersMutation } from "../../store/features/usersApi";
import { useSelector , useDispatch } from "react-redux"; 
import { getUser } from "../../store/slices/userSearchSlice.js";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  let [timeout , setTimeoutFunc] = useState(null)
  const searchedUser = useSelector((state) => state.searchUser.user)
  const [getUser , {data , isLoading}] = useGetUsersMutation()
  function handle() {
    setIsActive(!isActive);
  }
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    } , 100)
  };
  const inputValueChange = (e) => {
    setInputValue(e)
    setTimeout(clearTimeout(timeout));
    setTimeoutFunc(timeout = setTimeout(() => {
      getUser({name : e})
    }, 1500));
  };
  useEffect(() => {
    getUser({name : ''})
  } , [])
  return (
    <header className="HomeHeader">
      <div className="wrapperContainer">
        <div className="wrapperContainerNavLinkDiv">
          <IoIosMenu onClick={handle} className="burgerMenuProfile" />
          <NavLink to={"/Profile"} className={"wrapperContainerNavLink"}>
            Profile <AiOutlineRight className="iconProfile" />
          </NavLink>
        </div>
        {isActive ? <BurgerMenu /> : ""}
        <input value={inputValue} onChange={(e) => {inputValueChange(e.target.value)}} onFocus={handleFocus} onBlur={handleBlur} type="text" className="searchProfile" placeholder="Search" />
        {isFocused ? <SearchUser searchData={data ? data : []} isLoading={isLoading}/> : ''}
      </div>
      <div className="HomeHeaderChats">
        <ChatsHeader
          profileImg={img}
          path={"/"}
          name={"Hovhannes"}
          message={"Hello"}
          sendTime={"10:49"}
        />
      </div>
    </header>
  );
}

export default Header;
