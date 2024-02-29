import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Lists from './Pages/List/Lists'

import './App.css'


function App() {

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<Lists/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
