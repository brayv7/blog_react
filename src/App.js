import React from "react";
import Error404 from "../src/Components/Error404";
import Inicio from "../src/Components/Inicio";
import Blog from "../src/Components/Blog";
import About from "../src/Components/About";
import { styled } from "styled-components";
import Post from "../src/Components/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Contenedor>
        <Header />
        <Main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/publi/:id" element={<Post />} />
            <Route path="acerca-de" element={<About />} />
          </Routes>
        </Main>
      </Contenedor>
    </BrowserRouter>
  );
}

const Contenedor = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background: white;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 2px 2px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
