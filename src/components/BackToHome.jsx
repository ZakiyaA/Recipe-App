import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'; 
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const BackToHome = () => {
const navigate = useNavigate();
const { t } = useTranslation();
const url = useLocation();

if (url.pathname !== '/') {  
  return (
    <>
      <Button onClick={()=>navigate("/")}><BsFillArrowLeftCircleFill/> {t("Home Page")}</Button>
    </>
  )
 }
}

const Button = styled.button`
background: palevioletred;
border-radius: 3px;
border: 2px solid palevioletred;
color: white;
margin: 0.9em 1em;
padding: 0.25em 1em;
  &:hover {
    cursorr: pointer;
`

export default BackToHome