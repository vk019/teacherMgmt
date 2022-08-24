import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import Contact from './Component/Contact'
import Policy from './Component/Policy'
import Navbar from './Component/Navbar'
/*import Footer from './Component/Footer'*/
import HeadFlex from './Component/HeadFlex'
import LoginReview from './Component/LoginReview'
import SchoolLogin from './Component/schoolLogin'
import AdminLogin from './Component/AdminLogin'



function App() {
  return (
    <>
    <HeadFlex/>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='/login' element={<LoginReview/>}/>
        <Route path='schoolLogin' element={<SchoolLogin/>}/>
        <Route path='AdminLogin' element={<AdminLogin/>}/>

      </Routes>
      {/*<Footer/>*/}
    </>
  )
}

export default App
