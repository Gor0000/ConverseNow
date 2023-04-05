import React from 'react'
import { NavLink } from 'react-router-dom'
import './ChatsHeader.css'


function ChatsHeader(props) {
  return (
    <NavLink className={'ChatsHeaderContainer'} to={props.path}>
        <div className='ChatsHeaderContainerWrapper'>
            <div className='ChatsHeaderContainerWrapperProfile'>
                <div className='ChatsHeaderContainerWrapperProfileImgDiv'>
                  <img className='ChatsHeaderContainerWrapperProfileImg' src={props.profileImg} alt="" />
                </div>
                <div className='ChatsHeaderContainerWrapperProfileWrapper'>
                    <p>{props.name}</p>
                    <span>{props.message}</span>
                </div>
            </div>
            <span className='ChatsHeaderContainerWrapperTime'>{props.sendTime}</span>
        </div>
    </NavLink>
  )
}

export default ChatsHeader