// eslint-disable-next-line no-unused-vars
import React from 'react'
import './services.css'
import Blub from '../../component/service/blub'

function Services() {
  return (
    <div>
     
        <div className="the-whole-service">
        <div className="page-service-left"> 
           <div className="myservives">MY SERVICES</div>
          <div className="service-list">
              <p>REACT JS</p>
              <p>VANILLA JS</p>
              <p>NODE JS</p>
              <p>GIT</p>
              <p>WEB DESIGN</p>
              <p>BRANDING</p>
              <p>ARCHITECTURE</p>
              <p>GOOGLE SKETCH-UP</p>
              <p>WORDPRESS</p>
          </div>
        </div>
          <div className="page-service-right">
              <div className="service-blub">
                  <Blub blubTitle="UI/UX DESIGN"
                  blubContent="I love to work in User Experience & User Interface 
                  designing. Because I love to solve the design problem and find 
                  easy and better solutions to solve it."
                  theImage="asset/design.png"/>
                    <Blub blubTitle="WEB DEVELOPMENT"
                  blubContent="I love to work in User Experience & User Interface 
                  designing. Because I love to solve the design problem and find 
                  easy and better solutions to solve it."
                  theImage="asset/web-design (1).png"/>
                    <Blub blubTitle="BRANDING"
                  blubContent="I love to work in User Experience & User Interface 
                  designing. Because I love to solve the design problem and find 
                  easy and better solutions to solve it."
                  theImage="asset/brand.png"/>
                    <Blub blubTitle="WORDPRESS"
                  blubContent="I love to work in User Experience & User Interface 
                  designing. Because I love to solve the design problem and find 
                  easy and better solutions to solve it."
                  theImage="asset/mobile.png"/>
                    <Blub blubTitle="GRAPHICS DESIGN"
                  blubContent="I love to work in User Experience & User Interface 
                  designing. Because I love to solve the design problem and find 
                  easy and better solutions to solve it."
                  theImage="asset/mobile.png"/>
                    <Blub blubTitle="POWERPOINT DESIGN"
                  blubContent="I love to work in User Experience & User Interface 
                  designing. Because I love to solve the design problem and find 
                  easy and better solutions to solve it."
                  theImage="asset/mobile.png"/>
              </div>
          </div>
         
        </div>
        
    </div>
  )
}

export default Services
