import React from 'react'
import ProlfileLeft from './ProfileComponets/ProlfileLeft'
import ProfileMain from './ProfileComponets/ProfileMain'
import "./Profile.css"

function Profile() {
  return (
       <>
       <div className='ProfileStatic'>
        <ProlfileLeft/>
        <ProfileMain/>
        </div>
      </>
  )
}

export default Profile