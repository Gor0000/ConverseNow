import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
function header() {
  return (
        <header className='HomeHeader'>
            <div className='wrapperContainer'>
                  <div className='wrapperContainerNavLinkDiv'><NavLink className={'wrapperContainerNavLink'}>Profile <AiOutlineRight className='iconProfile' /></NavLink></div>
                  <input type="text" className='searchProfile' placeholder='Search'/>
            </div>
        </header>
  )
}

export default header