import React from 'react'
import Subplace from './subplace'
import './place.css'

function Place() {
  return (
    <div>
        <div className="places">
          <div className="therow">
                <div className="eachplace plaze">
                        <div className="date-platform">
                            <div className="platfrom">Behance</div>
                            <div className="date">2007-2008</div>
                        </div>  
                        <div className="between">
                             <div className="ok-img">
                                <img className='real-ok' src="asset/ok2.png" alt="" />
                             </div>
                            <hr />
                        </div>
                        <Subplace name="Web Designer & Developer"
                        major="    One of my specialties is taking an 
                        idea from scratch and creating a 
                        full-fledged platform. I go beyond 
                        to produce sites with a unique,
                        contemporary look-and-feel. 
                        "/>
                </div>
                <div className="eachplace ">
                        <div className="date-platform">
                            <div className="platfrom">Upwork</div>
                            <div className="date">2007-2008</div>
                        </div>  
                        <div className="between">
                            <div className="ok-img">
                                <img className='real-ok' src="asset/ok2.png" alt="" />
                             </div>
                        </div>
                        <Subplace name="Programmer & Developer"
                         major="    I strives to build immersive and beautiful 
                         web applications through carefully crafted 
                         code and user-centric design. 
                         "/>
                </div>
          </div>
          <div className="therow">
                <div className="eachplace plazes">
                        <div className="date-platform">
                            <div className="platfrom">Atobtech</div>
                            <div className="date">2007-2008</div>
                        </div>  
                        <div className="between">
                            <div className="ok-img">
                                <img className='real-ok' src="asset/ok2.png" alt="" />
                             </div>
                            <hr />
                        </div>
                        <Subplace name="Web & Print Designer"
                        major="  Creative designer, coder and player 
                        that uptimize programming code for easy understing 
                        and seemless user-experience
                        benefits
                        "
                        />
                </div>
                <div className="eachplace ">
                        <div className="date-platform">
                            <div className="platfrom">Fiverr</div>
                            <div className="date">2007-2008</div>
                        </div>  
                        <div className="between">
                            <div className="ok-img">
                                <img className='real-ok' src="asset/ok2.png" alt="" />
                             </div>
                        </div>
                        <Subplace name="Programmer & Developer"
                        major="  Creative designer, coder and player that uptimize 
                        programming code for easy understing and seemless user-experience
                        benefits
                        "/>
                </div>
          </div>
        </div>
      
    </div>
  )
}

export default Place
