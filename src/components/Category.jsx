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
            <h4>{t("Italian")}</h4>
            </SLink>
        
        <SLink to="/cuisine/Jewish"> <TbSoup/>
          <h4>{t("Jewish")}</h4>
          </SLink>
       
        <SLink to="/cuisine/Greek">
          <GiNoodles/>
          <h4>{t("Greek")}</h4>
        </SLink>
        <SLink to="/cuisine/Indian">  
          <BiDish/>
          <h4>{t("Indian")}</h4>
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
    font-size: 95px;
}

h4 {
    font-size: 15px;
}
&.active{
  background: linear-gradient(palevioletred, #e94057);
}`;

export default Category;