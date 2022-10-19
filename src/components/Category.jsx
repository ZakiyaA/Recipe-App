import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa';    
import { FaHamburger } from 'react-icons/fa'; 
import { GiNoodles } from 'react-icons/gi'; 
import { GiChopsticks } from 'react-icons/gi'; 
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <List>Category

        <nav>
        <Link to="/Cusine/Italian"> <FaPizzaSlice/></Link>
            <h4>Italian</h4>
        </nav>
        <nav>
        <Link to="/Cusine/American"> <FaHamburger/></Link>
        
            <h4>American</h4>
        </nav>
        <nav>
        <Link to="/Cusine/Thai"> <GiNoodles/></Link>
           
            <h4>Thai</h4>
        </nav>
        <nav>
        <Link to="/Cusine/Chinesse">  <GiChopsticks/></Link>
           
            <h4>Chinesse</h4>
        </nav>

    </List>
   
  );
}

const List = styled.div `
display: flex;
margin : 2rem 0rem;

`

export default Category