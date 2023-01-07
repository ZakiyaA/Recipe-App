import React from 'react'
import Category from '../components/Category';
import Cuisine from './Cuisine';
import {Routes, Route} from "react-router-dom";
import Home from './Home'
import Searched from './Searched';
import Recipe from './Recipe';

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/> 
        <Route path='/searched/:search' element={<Searched />}></Route>
        <Route path='/recipe/:name' element={<Recipe />}></Route>
      </Routes>  
    </div>
  )
}

export default Pages