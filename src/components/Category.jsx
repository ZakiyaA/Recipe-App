import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa';    
import { FaHamburger } from 'react-icons/fa'; 
import { GiNoodles } from 'react-icons/gi'; 
import { GiChopsticks } from 'react-icons/gi'; 
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>

        
        <SLink to="/cuisine/Italian"> <FaPizzaSlice/>
            <h4>Italian</h4>
            </SLink>
        
        <SLink to="/cuisine/Mediterranean"> <FaHamburger/>
          <h4>Mediterranean</h4>
          </SLink>
       
        <SLink to="/cuisine/Thai">
          <GiNoodles/>
          <h4>Thai</h4>
        </SLink>
        <SLink to="/cuisine/Chinese">  
          <GiChopsticks/>
          <h4>Chinesse</h4>
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
background: linear-gradient(#494949, #313131);
display: flex;
flex-direction: column;
align-items: center;
color: white;
text-decoration: none;
width: 80px;
height: 80px;
border-radius: 50%;
cursor: pointer;
transform: scale(0.8);

svg {
    font-size: 90px;
}

h4 {
    font-size: 15px;
}
&.active{
  background: linear-gradient(#f27121, #e94057);
}`;

export default Category;