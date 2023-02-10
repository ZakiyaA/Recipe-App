import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {useTranslation } from "react-i18next";

const Recipe = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const [receipeDetails, setRecipetDetails] = useState({});
  const [activeSelection, setActiveSelection] = useState("Instructions");
  const recipeName  = useParams();
  const fetRecipe = async () => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${recipeName.name}/information?apiKey=a428daa4b83f4cb0928f1981f04cd24d`);
  const receipes = await response.json();
    setRecipetDetails(receipes);
   }
   useEffect(() => {
    fetRecipe();
    } , [ recipeName.name]);
    
    return (
      <>
        <Grid>   
          <Container1   >
            <h4 key={receipeDetails.id} >{receipeDetails.title}  </h4> 
            <img src={receipeDetails.image}  width='100%' mix-height='100%'/> 
          </Container1>

          <Container2 key={receipeDetails.id} >
            <Button className= {activeSelection === "Instructions" ? "active" : ""}
              onClick={() => setActiveSelection("Instructions")}>
                {t("Instruction")}
              </Button>
            <Button className= {activeSelection === "Ingredients" ? "active" : ""}
              onClick={() => setActiveSelection("Ingredients")} >{t("Ingredients")}</Button>
            { activeSelection === "Instructions"  && (
              <div key={receipeDetails.id}> 
              <h5>  {receipeDetails.summary?.replace(/<[^>]*>?/gm, '')} </h5> 
              <h5>  {receipeDetails.instructions?.replace(/<[^>]*>?/gm, '')} </h5> 
              </div>
            )}
            { activeSelection === "Ingredients"  && (
              <ul>
                {receipeDetails.extendedIngredients.map( ingredient => 
                   <li key={ingredient.id}>{ingredient.name}</li>
                )} 
              </ul>
            )}
         </Container2>
       
       </Grid>
        </>
    );
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

    &.active {
      background: palevioletred;
      color: white;
    }
`;

const Container1 = styled.div`
  text-align: left;
`

const Container2 = styled(Container1)``;
const Grid = styled.div`
height: 100vh;
display: grid;
grid-template-areas:
  "Container1 Container2";
  grid-gap: 10px;

grid-template-columns: 0.5fr 1fr;
`;



export default Recipe;