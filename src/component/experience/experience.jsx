
import './experience.css'
import Place from './place'

function Experience() {
  return (
    <div>
      <div className="expery">
          <div className="lines-title">
            <div className="expery-title">MY EXPERIENCE</div>
              <div className="expery-lines">
                  <div className="lines">
                      <hr className='line-one' />
                      <hr />
                  </div>
              </div>
          </div>

          <div className="main-expery">
            <Place/>
          </div>

      </div>
    </div>
  )
}

export default Experience
