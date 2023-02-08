import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const Veggies = () => {
const [veggies, setVeggies] = useState([]);
const { t } = useTranslation();
useEffect(() => {
    getVeggies();
} , []);

const getVeggies = async () => {
   const check = localStorage.getItem("veggies");
   if(check) {
    setVeggies(JSON.parse(check));
   } else {
    const api = await fetch ( `https://api.spoonacular.com/recipes/random?apiKey=a428daa4b83f4cb0928f1981f04cd24d&number=20&tags=vegetarian`)
    const data = await api.json();
    localStorage.setItem("veggies", JSON.stringify(data.recipes));
    setVeggies(data.recipes)
    // console.log(data);
  }
};
return (
  <>
   <h2>{t("VeggiesPicks")}</h2>
   <Wrapper>
    <Splide 
      options={ {
      rewind: true,
      gap   : '1rem',
      perPage: 4,
      perMove: 1,
      // paginationDirection: false
      // showsPaginatio: false
      } } 
      >
    {veggies.map((recipe) => {
      return (
        <SplideSlide key={recipe.id}>
          <Card >
          <Link to={'/recipe/' + recipe.id} >
            <p>{recipe.title}</p> 
            <img src={recipe.image}/> 
            </Link>
          </Card>
        </SplideSlide>
      );
})}
     </Splide>
   </Wrapper>
    </>
);
}
const Wrapper = styled.div `
margin: 4rem 0rem;
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
    opacity: 0.8;
    
  }

  P {
    position: absolute;
    z-index: 10;
    left: 50%
    buttom: 80%;
    color: white;
    font-size: 0.9rem
    text-align: center;
    justify-content: center;
    font-weight: bold;
  }
`
;

export default Veggies;
 