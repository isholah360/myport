import React from 'react'
import './subplace.css'

function Subplace({name, major}) {
  return (
    <div>

        <div className="major-detail">
            <div className="major-title">
               {name}
            </div>
            <div className="major-content">
            {major}
            </div>
        </div>
      
    </div>
  )
}

export default Subplace
