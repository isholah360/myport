
import Blub from './blub'
import './service.css'

function Service() {
  return (
    <div>
      <div className="complete-services">
          <div className="lines-title">
            <div className="expery-title">MY SERVICES</div>
              <div className="expery-lines">
                  <div className="lines">
                      <hr className='line-one' />
                      <hr />
                  </div>
              </div>
          </div>

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
          </div>
      </div>
    </div>
  )
}

export default Service
