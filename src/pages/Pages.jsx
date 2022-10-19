import React from 'react'
import Category from '../components/Category';
import Cusine from './Cusine';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home'

const Pages = () => {
  return (
    <div>
  
    <Routes>
      <Route path="/" element={ <Home />} />
        <Route path="/Cusine" element={<Cusine />} /> 
     
    </Routes>

       
    </div>
  )
}

export default Pages