import React from 'react'
import "../Profile.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { NavLink } from 'react-router-dom'
function ProlfileLeft() {
  return (
        <div className='ProlfileLeftDiv'>
            <NavLink to={"/Home"}>
              <AiOutlineArrowLeft className='ProlfileLeftIcone'/>
            </NavLink>
        </div>
  )
}

export default ProlfileLeft