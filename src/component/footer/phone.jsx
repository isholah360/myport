// eslint-disable-next-line no-unused-vars
import React from 'react'
import './phone.css'

function Phone({phoneImg, phone, myNum}) {
  return (
    <div>
      <div className="phone-form">
        <div className="phone-section">
          
                <div className="thephone">
                    <div className="thelogo">
                        <img className='main-logo' src={phoneImg} alt="" />
                    </div>
                    <div className="phonenum">
                        <p className='myphone'>{phone}</p>
                        <p className='mynum'>{myNum}</p>
                    </div>
                
                 </div>
        </div>
      </div>
    </div>
  )
}

export default Phone
