import React , { useState , useEffect } from 'react'
import ProlfileLeft from './ProfileComponets/ProlfileLeft'
import ProfileMain from './ProfileComponets/ProfileMain'
import "./Profile.css"
import { useDecodeJwtMutation } from '../store/features/loginApi'
import Loading from '../Loading/Loading'

function Profile() {
  const [jwtDecode , {isLoading , data}] = useDecodeJwtMutation()
  useEffect(() => {
    const messageId = localStorage.getItem('messageId')
    jwtDecode({userId : messageId})
  } , [])

  if(isLoading){
    return (
      <Loading/>
    )
  }

  return (
       <>
       <div className='ProfileStatic'>
        <ProlfileLeft/>
        <ProfileMain data={data ? data : ''}/>
        </div>
      </>
  )
}

export default Profile