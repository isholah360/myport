import Carousel from './carousel'
import './testimony.css'

function Testimony() {
  return (
    <div>
      <div className="complete-testimony">
        <div className="lines-title">
            <div className="expery-title testy">TESTIMONIALS</div>
              <div className="expery-lines services">
                  <div className="lines">
                      <hr className='line-one' />
                      <hr />
                  </div>
              </div>
          </div>

          <div className="testy-carousel">
            <Carousel/>
          </div>
        </div>
    </div>
  )
}

export default Testimony
