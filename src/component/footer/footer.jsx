/* eslint-disable no-unused-vars */
import React from 'react'
import './footer.css'
import Phone from './phone'

function Footer() {
  return (
    <div>
      <div className="complete-footer">
        <div className="lines-title">
            <div className="expery-title">LET'S GET IN TOUCH</div>
              <div className="expery-lines">
                  <div className="lines">
                      <hr className='line-one' />
                      <hr />
                  </div>
              </div>
          </div>
          <div className="contact-form-phone">
              <div className="phone-location-mail">
                <div className="availability">
                Always available for freelance work if the 
                right project comes along, Feel free to contact me!
                </div>
                <Phone phone="Phone" myNum="+2348068235454" phoneImg="asset/phone.png"/>
                <Phone phone="Email" myNum="Isholah@360@gmail.com" phoneImg="asset/email.png"/>
                <Phone phone="Location" myNum="Adekunle Fajuyi Barrack, Ojoo, Ibadan" phoneImg="asset/home.png"/>
              </div>  

                <div className="test">
                    <input className="testing" type="text" name="" id="" placeholder="Name"/>
                    <br className="brake"/>
                    <br className="brake"/>
                    <input className="testingsec" type="text" name="" id="" placeholder="mail"/>
                    <br></br>
                    <br></br>
                    <input className="thesubject" type="text" name="" id="" placeholder="Subject"/>
                    <br></br>
                    <br></br>
                    <textarea className="themsgz" name="" id="" cols="40" rows="6" placeholder="Message"></textarea>
              </div>  
          </div>
          
             <div className="designby">
                 SmartWeb@2023 cpoyright reserved
              </div>
        </div>
    </div>
  )
}

export default Footer
