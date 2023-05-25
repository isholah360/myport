// eslint-disable-next-line no-unused-vars
import React from 'react'
import Headcontent from './headcontent'
import './header.css'

function Header() {
  return (
    <div>
      <div className="header">
        <Headcontent/>
        <div className="header-pix">
          <img className='head-pixel' src="asset/header.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
