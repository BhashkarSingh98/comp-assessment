import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import Error from './Error'
import Contect from './Contect'

const Nav = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contect' element={<Contect/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Nav