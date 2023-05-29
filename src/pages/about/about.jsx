import Percent from '../../component/cv/percent';
import Carousel from '../../component/testimony/carousel';
import './about.css'
import Skill from './skill';

function About() {

  return (
    <>
      <div className="main-about">
         <div  className="about-left">
              <div className="downlod-cv">
                  <div className="about-about">ABOUT</div>
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
         </div>
         <div  className="about-right">
             <div className="lang-des-percentage">
                <div className="right-design">
                    <div className="language">SKILLS</div>
                    <Percent name="DESIGN" percentage="inside" actual="93%"/>
                    <Percent name="REACT" percentage="inside sec"  actual="95%" />
                    <Percent  name="NODE JS" percentage="inside third" actual="98%"/>
                    <Percent  name="UI/UX DESIGN" percentage="inside fourth" actual="99%"/>
                  </div>
                  <div className="right-language">
                    <div className="language">LANGUAGE</div>
                    <Percent name="ENGLISH" percentage="inside" actual="80%"/>
                    <Percent name="YORUBA" percentage="inside" actual="95%"/>
                    <Percent name="HAUSA" percentage="inside" actual="80%"/>
                    <Percent name="ARABIC" percentage="inside" actual="60%"/>
                  </div>
             </div>
              <div className="about-skill">
                 <Skill/>
              </div>
              <div className="little-testy">
                <div className="testimonials">TESTIMONIALS</div>
                <Carousel/>
              </div>
         </div>
      </div>
    </>
  )
}

export default About;
