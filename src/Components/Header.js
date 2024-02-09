import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  return (
    <ContenedorHeader>
      <Titulo>Blog personal</Titulo>
      <MenuNav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="acerca-de">Acerca de</NavLink>
      </MenuNav>
    </ContenedorHeader>
  );
};

const ContenedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h1`
  margin-botton: 10px;
  font-size: 30px;
  text-transform: uppercase;
`;
const MenuNav = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
  }

  a:hover {
    color: #19168;
  }

  a.active {
    border-bottom: 2px solid #165168;
    padding-bottom: 4px;
  }
`;

export default Header;
