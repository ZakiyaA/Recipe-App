import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LoremIpsum } from 'react-lorem-ipsum';

const Recipe = () => {
  const [receipeDetails, setRecipetDetails] = useState({});
  const [active, setActive] = useState("Instructions");
  const recipeName  = useParams();
  console.log("WWW", recipeName.name)
  const fetRecipe = async () => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${recipeName.name}/information?apiKey=a428daa4b83f4cb0928f1981f04cd24d`);
  const receipes = await response.json();
    setRecipetDetails(receipes);
    console.log("****",receipes.analyzedInstructions)
   }
   useEffect(() => {
    fetRecipe();
    } , [ recipeName.name]);
    
    return (
      <>
        <Grid>   
         
              <Container1   >
                <h4 key={receipeDetails.id} >{receipeDetails.title}  </h4> 
                {/* <img src='https://spoonacular.com/recipeImages/715455-556x370.jpg'  width='100%' mix-height='100%'/> */}
                {/* <span><LoremIpsum p={1} /> </span> */}
                <img src={receipeDetails.image}  width='100%' mix-height='100%'/> 
              </Container1>

              <Container2 key={receipeDetails.id}>
            <Button className= {active === "Instructions" ? "active" : ""}
              onClick={() => setActive("Instructions")}>
                Instructions
              </Button>
            <Button className= {active === "Ingredients" ? "active" : ""}
              onClick={() => setActive("Ingredients")} >Ingredients</Button>
            
            { active === "Instructions"  && (
              <div key={receipeDetails.id}> 
              <h5> **** {receipeDetails.summary?.replace(/<[^>]*>?/gm, '')} </h5>
              {/* {receipeDetails.analyzedInstructions.map(Instruction => 
              console.log(receipeDetails.analyzedInstructions)
                // <li>{Instruction.step}</li>
                )} */}

              
              {/* <h5>  {receipeDetails.analyzedInstructions?.replace(/<[^>]*>?/gm, '')} </h5>  */}
              </div>
            )}

            { active === "Ingredients"  && (
              <ul>
                {receipeDetails.extendedIngredients.map( ingredient => 
                   <li key={ingredient.id}>{ingredient.original}</li>

                )}
              {/* <h6> {receipeDetails.extendedIngredients?.replace(/<[^>]*>?/gm, '')} </h6>  */}
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