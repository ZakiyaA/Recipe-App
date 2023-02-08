import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { BiSearchAlt } from 'react-icons/bi';  
import { useNavigate } from 'react-router-dom';
import {useTranslation } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();
  function handleSubmit(e) {
        e.preventDefault();
        navigate('/searched/' + input);
      }

  return (
    <Container >
    <Form onSubmit={handleSubmit}>
      <BiSearchAlt/>
      <Input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder={t("Recipe")}
      />
    </Form>
    <LanguageSwitcher/>
    </Container >
  )
}


const   Container = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between
`
const Form = styled.form`
  position: relative;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: palevioletred;
  padding: 1rem;
  margin-top: 3rem;
  border-radius: 10rem;

  svg {
      color: white;
      padding-right: 0.2rem;
  }
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  height: 0.5rem;
  border: none;
  color: white;
  padding: 0.5rem;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export default Search;