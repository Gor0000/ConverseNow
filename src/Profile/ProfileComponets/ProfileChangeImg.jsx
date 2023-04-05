import React , { useEffect, useState } from 'react'
import '../Profile.css'
import { storage } from '../../firebase'
import { ref , uploadBytes , getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import { useChangeProfileImageMutation } from "../../store/features/registerApi";
import Loading from '../../Loading/Loading'

function ProfileChangeImg(props) {
  const [inputFile , setInputFile] = useState(null)
  const [loading , setLoading] = useState(false)
  const [changeDBImg , {isLoading , data}] = useChangeProfileImageMutation()
  const profileImgChange = (e) => {
    if(inputFile){
      const imgRef = ref(storage , `images/${inputFile.name + v4()}`) 
      setLoading(true)
      uploadBytes(imgRef , inputFile)
      .then((result) => {
        setLoading(false)
        const path = ref(storage , `${result.metadata.fullPath}`)
        getDownloadURL(path)
        .then((response) => {
          changeDBImg({
            userId : localStorage.getItem('messageId'),
            profileImg : response
          })
        })
      })
    }
  }
  if(isLoading || loading){
    return (
      <Loading/>
    )
  }
  if(data){
    if(data.status === 200){
      window.location.reload()
    }
  }
  return (
    <>
      <div className='ProfileChangeImgBgBlur' onClick={props.clickFunc}></div>
      <div className='ProfileChangeImgContainerWrapper'>
        <h1 className={'ProfileChangeImgContainerWrapperTitle'}>Upload file</h1>
        <div className='ProfileChangeImgContainerWrapperSelectFile'>
          <input type="file" onChange={(e) => {setInputFile(e.target.files[0])}}/>
          <p>Select file on computer</p>
        </div>
        <button className='ProfileChangeImgContainerWrapperButton' onClick={profileImgChange}>Change</button>
      </div>
    </>
  )
}

export default ProfileChangeImg