import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Teacher from './Component/Teacher'
import Calapp from './Component/Calapp'
import School from './Component/School'
import Gallery from './Component/Gallery'
import Navbar from './Component/Navbar'
import HeadFlex from './Component/HeadFlex'






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
        <Route path='/Gallery' element={<Gallery/>} />
      </Routes>
      
   
    </>
  )
}

export default App
