
import './App.css'
import { Nav } from './component'
import {About, Blog, Contact, Home, Portfolio, Services} from './pages/index'
import {Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/myport/" element={<Home/>}/>
        <Route path="/myport/about" element={<About/>}/>
        <Route path="/myport/blog" element={<Blog/>}/>
        <Route path="/myport/contact" element={<Contact/>}/>
        <Route path="/myport/services" element={<Services/>}/>
        <Route path="/myport/portfolio" element={<Portfolio/>}/>
    </Routes>
   
    </>
  )
}

export default App
