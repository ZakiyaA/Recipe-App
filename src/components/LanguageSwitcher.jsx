import {React, useState} from 'react'
import {useTranslation } from "react-i18next";
import styled from 'styled-components';
import i18n from 'i18next';
const LanguageSwitcher = () => {
//   const [activeLanguage, setActiveLanguage] = useState("En");
  const { t } = useTranslation();  
  return (
      <>
        { i18n.language == 'ar' && < Button  onClick={() => {i18n.changeLanguage('en');}} >Ar</Button>}
        { i18n.language == 'en' &&  < Button  onClick={() => {i18n.changeLanguage('ar');}}> En</Button>}
      </>
        )
     }

const Button = styled.button`
  background: transparent;
  border: 0px;
  color: palevioletred;
  font-size: 1.2rem;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-weight: bold
`;

export default LanguageSwitcher;