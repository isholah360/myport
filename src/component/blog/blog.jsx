
import './blog.css'
import { Data } from './blogData'
import { useRef } from 'react'


function Blog() {



  

  return (
    <div>
      <div className="main-complete">
          <div className="lines-title">
            <div className="expery-title">BLOG POSTS</div>
              <div className="expery-lines">
                  <div className="lines">
                      <hr className='line-one' />
                      <hr />
                  </div>
              </div>
          </div>
        <div className="complete-blog">
          {Data.map(main=>(
            <div key={main} className="bloglist">
                <div className="blogblub">
                  <div className="blogimg">
                    <img className="blogimg-main" src={main.image} alt="" />
                  </div>
                  <div className="blogcontents">
                      <div className="author-date">
                        <p>{main.auth}</p>
                        <p>{main.date}</p>
                      </div>
                      <hr />
                      <div className="title-flash">
                        <div className="title">{main.title}</div>
                        <div className="flash">
                          {main.content.slice(0, 100) + " " + "....."}
                        </div>
                      </div>
                      <div className="readmore">
                        READ MORE
                      </div>
                  </div>
                  
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
