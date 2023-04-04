import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
function header() {
  return (
        <header className='HomeHeader'>
            <div className='wrapperContainer'>
                <div className='wrappeProfil'>
                  <NavLink>Profile <AiOutlineRight className='iconProfile' /></NavLink>
                  <input type="text" className='searchProfile' placeholder='Search'/>
                </div>
            </div>
        </header>
  )
}

export default header