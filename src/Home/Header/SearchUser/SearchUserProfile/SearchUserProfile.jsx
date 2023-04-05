import React from 'react'
import './SearchUserProfile.css'

function SearchUserProfile(props) {
  return (
    <div className='SearchUserProfile'>
        <div className='SearchUserProfileImgDiv'>
            <img className='SearchUserProfileImg' src={props.profileImg} alt="" />
        </div>
        <span className='SearchUserProfileSpan'>{props.name}</span>
    </div>
  )
}

export default SearchUserProfile