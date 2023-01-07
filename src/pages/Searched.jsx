
import {React, useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params  = useParams();
    // console.log("params", params)
    const getSearched = async (name) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a428daa4b83f4cb0928f1981f04cd24d&query=${name}`);
    const receipes = await response.json();
    
    setSearchedRecipes(receipes.results);
    console.log(receipes.results)
     }
     useEffect(() => {
        getSearched(params.search);
      } , [params.search]);
      
      return (
        <>
         <h2>Searched!!!!</h2>
         <Wrapper>
           <Grid>
          
          {searchedRecipes.map((recipe) => {
            return (
                <Card  key={recipe.id}>
                    <Link to={'/recipe/' + recipe.id} >
                  <img src={recipe.image}/> 
                  <h4>{recipe.title}</h4> 
                  </Link>
                </Card>
            );
      })}
      </Grid>
         </Wrapper>
          </>
      );
      }
      const Wrapper = styled.div `
        margin: 4rem 0rem;
      `;
  
      const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        // grid-template-rows: 50px 50px;
        grid-gap: 5px;
      `;
      
      const Card = styled.div`
        min-height: 10rem;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
        text-align: center;
        background: black;
        
        img {
          border-radius: 10px;
          min-height: 100%;
          min-width: 100%;
          position: absolute;
          left: 0;
          object-fit: cover;
          opacity: 0.9;
          
        }
      
        h4 {
          position: absolute;
          z-index: 10;
          left: 50%
          buttom: 60%;
          color: white;
          font-size: 0.9rem
          text-align: center;
          justify-content: center;
          font-weight: bold;
        }
      `;

 

export default Searched