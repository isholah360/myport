import  { useRef, useState, useEffect } from "react";
import './portfolio.css'
import { images } from "./data";



const Portfolio = ()=>{

      const theHigh = useRef(null)
      const [tags, setTags] = useState('all')
      const [filtered, setFiltered] = useState([])
      // const [high, setHigh] = useState()


    useEffect(()=>{
          
        tags === 'all' ? setFiltered(images) : setFiltered(images.filter(image => image.tags === tags))
       
      },[tags])

      const handleBg = ()=>{
        theHigh.current.style.height='170vh'
      }
      const handleAll = ()=>{
        theHigh.current.style.height='350vh'
      }
  

    return(
        <>
        <div  className="complete-portfolio" ref={theHigh}>
              <div className='port-bg'>
                <div className="port-head">
                <div className="lines-title">
                      <div className="expery-title">MY PORTFOLIO</div>
                        <div className="expery-lines">
                            <div className="lines">
                                <hr className='line-one' />
                                <hr />
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="btn-container" >
                    <div className="bg-all" onClick={handleAll}>
                      <Button titles="all" handleTag={setTags}/>
                    </div>
                  <div className="bg-design" onClick={handleBg}>
                   <Button titles="design" handleTag={setTags}/>
                  </div>
                  <div className="bg-design" onClick={handleBg}>
                    <Button titles="branding" handleTag={setTags}/>
                  </div>
                  <div className="bg-design" onClick={handleBg}>
                    <Button titles="ui/ux" handleTag={setTags}/>
                  </div>
                </div>
                    <div className="image-container-outer">
                        <div className="image-container">
                            {filtered.map(image =>
                            <div key={image.id} className='img-card'>
                                <div key={image.imageName} className="carocover">
                                   <div className="fullinfo">
                                        <div className="info">{image.info}</div>
                                        <div className="moreinfo">{image.more}</div>
                                   </div>
                                </div>
                                <img className="realimg" src={`asset/${image.imageName}`} alt="" />
                            </div>)}

                        </div>
                    </div>
                    
            </div>
            
        </div>
            
        </>
    )
}

const Button= ({titles, handleTag}) =>{
    return(
        <div onClick={()=>{handleTag(titles)}}><button className="button-prop"
        >{titles.toUpperCase()}</button></div>
    )
}

export default Portfolio;