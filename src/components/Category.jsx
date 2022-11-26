import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa';    
import { FaHamburger } from 'react-icons/fa'; 
import { GiNoodles } from 'react-icons/gi'; 
import { GiChopsticks } from 'react-icons/gi'; 
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <List>

        <nav>
        <Link to="/cuisine/Italian"> <FaPizzaSlice/></Link>
            <h4>Italian</h4>
        </nav>
        <nav>
        <Link to="/cuisine/American"> <FaHamburger/></Link>
        
            <h4>American</h4>
        </nav>
        <nav>
        <Link to="/cuisine/Thai"> <GiNoodles/></Link>
           
            <h4>Thai</h4>
        </nav>
        <nav>
        <Link to="/cuisine/Chinesse">  <GiChopsticks/></Link>
           
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