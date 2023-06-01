import './animate.css'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import { Power3 } from 'gsap'

function Animate() {
    const node1 = useRef(null)
    const node2 = useRef(null)
    const node3 = useRef(null)
    const node4 = useRef(null)
    const node5 = useRef(null)
    const node6 = useRef(null)
    const node7 = useRef(null)
    
    useEffect(()=>{
         gsap.fromTo([ node2.current, node1.current, ], {  width: "100vw"}, {width:"0", 
          duration:2, ease:Power3.outIn, transformOrigin:'left', delay: 4.2,
          stagger:{amount:.3}})
          gsap.fromTo([ node3.current, ], {  width: "50vw"}, {width:"0", 
          duration:2, ease:Power3.outIn, transformOrigin:'left', delay: 3.8,
          stagger:{amount:2}})
          gsap.fromTo([ node5.current, node6.current, ], {  x: "0"}, {x:"100rem", 
          duration:2, ease:Power3.outIn, transformOrigin:'left', delay: 4.2,
          stagger:{amount:.3}})
          gsap.fromTo([ node4.current, ], {   x:"0rem",}, { x:"50rem",
          duration:2, ease:Power3.outIn, transformOrigin:'right', delay: 3.8,
          stagger:{amount:2}})
          gsap.fromTo([ node7.current, ], { y:"0rem", opacity: 1}, { y:"30rem", opacity: 0,
          duration:2, ease:Power3.outIn, transformOrigin:'right', delay: 3.4,
          stagger:{amount:2}})
          gsap.fromTo([ node7.current, ], { y:"-30rem",}, { y:"0",
          duration:2, ease:Power3.outIn, transformOrigin:'right', delay: .2,
          stagger:{amount:2}})
       })
       

  return (
    <div>

        <div className="cover">
            <div className="left">
                <div ref={node1} className="node"></div>
                <div ref={node2} className="node"></div>
                <div ref={node3} className="node"></div>
            </div>
            <div className="smartweb" ref={node7}>
               <p> SMARTWEB</p>
               <p className='world'>Your Smart Path to The World.</p>
            </div>
            <div className="right">
                <div ref={node4} className="fourth"></div>
                <div ref={node5} className="node fiveth"></div>
                <div ref={node6} className="node sixth"></div>
            </div>
        </div>
    </div>
  )
}

export default Animate
