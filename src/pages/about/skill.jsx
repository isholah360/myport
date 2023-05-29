import Carousel from '../../component/testimony/carousel'
import './skill.css'

function Skill() {
  return (
    <div>
       <div className="my-skills">
            <div className="programming">
                <div className="knowledge">KNOWLEDGES</div>
                <p>
                    <li>React-Native</li>
                    <li>Wordpress</li>
                    <li>GSAP, TweenMax </li>
                    <li>Vanilla Javascript</li>
                </p>
            </div>
            <div className="interests">
            <div className="knowledge">INTEREST</div>
                <p>
                    <li>Back-End</li>
                    <li>Architecture</li>
                    <li>3D Modelling</li>
                    <li>Google SketchUp</li>
                </p>  
            </div>
       </div>
       {/* <div className="lit-testy">
            <Carousel/>
       </div> */}
    </div>
  )
}

export default Skill
