import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa';    
import { TbSoup } from 'react-icons/tb'; 
import { GiNoodles } from 'react-icons/gi'; 
import { BiDish } from 'react-icons/bi'; 
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import {useTranslation } from "react-i18next";
const Category = () => {
  const { t } = useTranslation();
  return (
    <List>

        
        <SLink to="/cuisine/Italian"> <FaPizzaSlice/>
            <p>{t("Italian")}</p>
            </SLink>
        
        <SLink to="/cuisine/Jewish"> <TbSoup/>
          <p>{t("Jewish")}</p>
          </SLink>
       
        <SLink to="/cuisine/Greek">
          <GiNoodles/>
          <p>{t("Greek")}</p>
        </SLink>
        <SLink to="/cuisine/Indian">  
          <BiDish/>
          <p>{t("Indian")}</p>
          </SLink>
       </List>
   
  );
}

const List = styled.div `
display: flex;
align-items: center;
justify-content: center;
margin : 2rem 0rem;
`

const SLink = styled(NavLink)`
background: linear-gradient(#494949, palevioletred);
display: flex;
flex-direction: column;
align-items: center;
color: white;
text-decoration: none;
width: 100px;
height: 100px;
border-radius: 50%;
cursor: pointer;
transform: scale(0.7);

svg {
    font-size: 100px;
    transform: translate(0px, 13px);
}

p {
    font-size: 18px;
}
&.active{
  background: linear-gradient(palevioletred, #e94057);
}`;

export default Category;