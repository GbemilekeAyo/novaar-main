import Body from "./Body/Body"
import Project from "./Pages/Project/Project"
import Services from "./Pages/Services/Service"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
function App() {


  return (
    <>
      <div className="font-sans overflow-x-hidden bg-[#000]">
       {/*ROUTER*/}
      <>
  
  <Navbar/>
  <Routes>
        <Route index element={<Body/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='service' element={<Services/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    <Footer/>
      </>
      </div>
    </>
  )
}

export default App
