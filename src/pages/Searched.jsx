
import {React, useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import i18n from '../i18n';
import {useTranslation } from "react-i18next";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params  = useParams();
  document.body.dir = i18n.dir();
const { t } = useTranslation();
 
  const getSearched = async (name) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=15&query=${name}`);
  const receipes = await response.json();
  setSearchedRecipes(receipes.results);
    }

    useEffect(() => {
      getSearched(params.search);
    } , [params.search]);

  return (
      <>
  <Wrapper>
    <CardContainer>
    {searchedRecipes.map((recipe) => {
      return (
        <Card  key={recipe.id}>
          <img src={recipe.image} width='100%' mix-height='100%'/> 
          <p>{recipe.title}</p> 
          <Link to={'/recipe/' + recipe.id} >  
            <button >{t("RecipeDetails")} </button>
          </Link>
        </Card>
      );
    })}
      </CardContainer>
  </Wrapper>
    </>
);
}
const Wrapper = styled.div `
margin: 4rem 0rem;
`;

const Title = styled.div `
  margin: 0 auto;
  text-align: center; 
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
  justify-items: center;
  margin: 0;
  padding: 0;
`

const Card = styled.div`
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-align: center;
  display: flex;
  flex-flow: column;
    img {
      border-radius: 3px;
      min-height: 50%;
      min-width: 50%;
      object-fit: cover;
    }

  P {
    font-size: 0.5rem
    text-align: center;
    justify-content: center;
    // font-weight: bold;
    flex-grow: 1;
    overflow-wrap: break-word;
  }
  button {
    background: palevioletred;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: white;
    margin: 0.9em 1em;
    padding: 0.25em 1em;
      &:hover {
        cursorr: pointer;
   }

  
  }
`;

export default Searched;