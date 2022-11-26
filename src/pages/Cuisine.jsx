import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const cuisineType  = useParams();
  console.log("parma", cuisineType.type);
   

 

  const getCuisine = async (name) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a428daa4b83f4cb0928f1981f04cd24d&cuisine=${name}`);
    const receipes = await response.json();
    setCuisine(receipes.results);
    console.log("data",receipes.results)
   }
   useEffect(() => {
    getCuisine(cuisineType.type);
  //   console.log("parma", cuisineType);
    } , [cuisineType.type]);
    
 

  return (
   <>
   <h1>Cusine!!!!</h1>
   </>
  )
}

export default Cuisine;