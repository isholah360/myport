
import './contact.css'
import Phone from "../../component/footer/phone";
import { Link } from 'react-router-dom';

function Contact() {

  return (
    <>
      <div className="main-complete-contact">
        <div className="left">
              <p className="get-title"> LET'S GET IN TOUCH </p>
            <div className="contactimg">
              <img className="main-contactimg" src="asset/pass.jpg" alt="" />
            </div>
          <div className="contactcontent">
              <div className="phone-location-mail">
                <div className="availability">
                Always available for freelance work if the 
                right project comes along, Feel free to contact me!
                </div>
                    <Phone phone="Phone" myNum="+2348068235454" phoneImg="asset/phone.png"/>
                    <Phone phone="Email" myNum="Isholah@360@gmail.com" phoneImg="asset/email.png"/>
                    <Phone phone="Location" myNum="Adekunle Fajuyi Barrack, Ojoo, Ibadan" phoneImg="asset/home.png"/>
              </div>
          </div>
              <div className="socials">
                  <div className="soc-img">
                     <Link to="https://twitter.com/isholah360?t=-nQPRU6sJIST1RmlDLNsPg&s=09"> 
                     <img className='main-soc-img' src="asset/twitter.png" alt="" /></Link>
                  </div>
                  <div className="soc-img">
                     <Link to="https://www.linkedin.com/in/ishola-durosinmi-69a01476">
                       <img className='main-soc-img' src="asset/linkedin.png" alt="" /></Link>
                  </div>
                  <div className="soc-img">
                      <img className='main-soc-img' src="asset/instagram.png" alt="" />
                  </div>
              </div>
        </div>
        <div className="right">
              <div className="test">
                    <input className="testin" type="text" name="" id="" placeholder="Name"/>
                    <br className="brake"/>
                    <br className="brake"/>
                    <input className="testingseco" type="text" name="" id="" placeholder="Mail"/>
                    <br></br>
                    <br></br>
                    <input className="thesubject-s" type="text" name="" id="" placeholder="Subject"/>
                    <br></br>
                    <br></br>
                    <textarea className="themsgz-s" name="" id="" cols="50" rows="6" placeholder="Message"></textarea>
              </div> 
        </div>
      </div>
    </>
  )
}

export default Contact;
