import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import {useTranslation } from "react-i18next";


const Popular = () => {
const [popular, setPopular] = useState([]);
document.body.dir = i18n.dir();
const { t } = useTranslation();




useEffect(() => {
    getPopular();
} , []);

const getPopular = async () => {
   const check = localStorage.getItem("popular");
   if(check) {
     setPopular(JSON.parse(check));
   } else {
    const api = await fetch ( `https://api.spoonacular.com/recipes/random?apiKey=a428daa4b83f4cb0928f1981f04cd24d&number=10`)
    const data = await api.json();
    localStorage.setItem("popular", JSON.stringify(data.recipes));
    setPopular(data.recipes)
    // console.log(data);
  }
};




return (
  <>
  <h2>{t("popularPicks")}</h2>
   <Wrapper>
    <Splide 
      options={ {
      rewind: true,
      gap   : '1rem',
      perPage: 4,
      perMove: 1,
      } } 
      >
    {popular.map((recipe) => {
      return (
        <SplideSlide key={recipe.id}>
          <Card >
          <Link to={'/recipe/' + recipe.id} >
            <p>{recipe.title}</p> 
            <img src={recipe.image} width='100%' mix-height='100%'/> 
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
    min-height: 90%;
    min-width: 90%;
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
    font-size: 0.5rem
    text-align: center;
    justify-content: center;
    font-weight: bold;
  }
`;

export default Popular;