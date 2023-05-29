import { Data } from '../../component/blog/blogData';
import './blog.css'
import MainBlog from './mainBlog';


function Blog() {

  return (
    <>
  <div className="whole-blog">

    <div className="leftside">
     <div className="myblogs"> MY BLOG POSTS</div>
     <div className="writing-img">
        <img className='theblog-img' src="asset/blog.jpeg" alt="" />
     </div>
    </div>

      <div className="complete-blog">
        <MainBlog/>
      </div>
  </div>
   
      
    </>
  )
}

export default Blog;
