// eslint-disable-next-line no-unused-vars
import React from 'react'
import './cv.css'
import Percent from './percent'

function Cv() {
  
  return (
    <div>
      <div className="cv-plane">
        <div className="lines">
          <div className="about-us">ABOUT ME</div>
            <hr className='line-one' />
            <hr />
        </div>
       <div className="download-percent">
            <div className="downlod-cv">
                <div className="cv-content">
                Meet my startup design agency Shape Rex Currently 
                I am working at CodeNext as 
                Product Designer. Before that I’ve worked 
                at SpurBee, Dhaka as a UX, UI Designer.

                <p>
                I love to work in User Experience & User Interface 
                designing. Because I love to solve the design problem 
                and find easy and better solutions to solve it. I always
                try my best to make good user interface with the best 
                user experience. I have been working as a Visual designer from.
                </p>

                </div>
                <button>DOWNLOAD MY CV</button>
            </div>
            <div className="complete-percent">
                <Percent name="DESIGN" percentage="inside" actual="93%"/>
                <Percent name="REACT" percentage="inside sec"  actual="95%" />
                <Percent  name="NODE JS" percentage="inside third" actual="98%"/>
                <Percent  name="UI/UX DESIGN" percentage="inside fourth" actual="99%"/>
            </div>
       </div>
      </div>
    </div>
  )
}

export default Cv
