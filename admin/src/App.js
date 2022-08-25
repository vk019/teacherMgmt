import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Teacher from './Component/Teacher'
import Calapp from './Component/Calapp'
import School from './Component/School'
import Vacancy from './Component/Vacancy'
import Navbar from './Component/Navbar'
import HeadFlex from './Component/HeadFlex'
import Footer from './Component/Footer'
import Analytics from './Component/Analytics'





function App() {
  return (
    <>
      <HeadFlex/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Calapp' element={<Calapp/>}/>
        <Route path='/Teacher' element={<Teacher/>}/>
        <Route path='/School' element={<School/>} />
        <Route path='/Vacancy' element={<Vacancy/>} />
        <Route path='/Analytics' element={<Analytics/>} />
      </Routes>
      <Footer/>
   
    </>
  )
}

export default App
