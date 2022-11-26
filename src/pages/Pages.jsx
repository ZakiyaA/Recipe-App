import React from 'react'
import Category from '../components/Category';
import Cuisine from './Cuisine';
import {Routes, Route} from "react-router-dom";
import Home from './Home'

const Pages = () => {
  return (
    <div>
  
    <Routes>
      <Route path="/" element={ <Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} /> 
     
    </Routes>

       
    </div>
  )
}

export default Pages