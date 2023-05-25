
import { useRef } from 'react'
import './percent.css'

function Percent({name, percentage, actual}) {

    const ref = useRef(null)
    
  return (
    <div>
      <div className="the-percent">
        <div className="percent-name">
            {name}
           <p> {actual}</p>
        </div>
        <div className="outer">
            <div className={percentage} ref={ref}>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Percent
