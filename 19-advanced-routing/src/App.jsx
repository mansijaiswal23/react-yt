import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/AboutUs.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Kids from './pages/Kids.jsx'
import Courses from './pages/Courses.jsx'
import NotFound from './pages/NotFound.jsx'
import CourseDetails from './pages/CourseDetails.jsx'

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about-us' element={<About/>}/>

         <Route path='/product' element={<Product/>}>
         <Route path='men' element={<Men/>}/>
         <Route path='women' element={<Women/>}/>
         <Route path='kid' element={<Kids/>}/>

           </Route>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/courses/:id' element={<CourseDetails/>} />
         <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
