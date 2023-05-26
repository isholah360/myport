// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState}from 'react'
import './nav.css'
import { gsap } from 'gsap'
import { Power3 } from 'gsap/src/index';
import { Link } from 'react-router-dom';


function Nav() {
  const rid = useRef(null)
   
 

  const [show, setShow] = useState(false)

  const display = ()=>{
    setShow(!show)
  }
 useEffect(()=>{
  if (show === true){
     gsap.fromTo([ rid.current], { x:"-10rem"}, { x:"0rem", display:"none",
    duration:1.5, ease:Power3.outIn, transformOrigin:'left', 
    stagger:{amount:1}})
  }
  else if(show === false){
    gsap.fromTo([ rid.current], { x:"0rem"}, { x:"-10rem", display:"block",
    duration:1.5, ease:Power3.outIn, transformOrigin:'right', 
    stagger:{amount:1}})
  }
 })
 
 
  return (
    <div>
      <div className="nav">
        <div className="mylogo">
          SMARTWEB
        </div>
         <ul className={show ? "ul" : "uls"} ref={rid}>
            <div className="lists">
                <hr />
                <li> <Link to="/myport/"> Home </Link></li>
                <hr />
                <li><Link to="/myport/about" className='link'> About </Link></li>
                <hr />
                <li><Link to="/myport/services"> Services </Link></li>
                <hr />
                <li><Link to="/myport/portfolio"> Portfolio </Link></li>
                <hr />
                <li><Link to="/myport/blog"> Blog </Link></li>
                <hr />
                <li><Link to="/myport/contact"> Contact </Link></li>
                <hr />
            </div>
            
         </ul>
         <div className="farbar" onClick={display}>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </div>
     
    </div>
  )
}

export default Nav
