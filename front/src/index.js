import React from 'react';
import {render} from 'react-dom';

import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar2 from './shared/Navbar';
import Home from './home/Home';
import Fornecedor from './fornecedor/Fornecedor';
import ProdutoDetails from './produtoDetails/ProdutoDetails';

const rootElement = document.getElementById("root");

render(
  
  <BrowserRouter>
  <Navbar2 />
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/fornecedor" element={<Fornecedor />} />
      <Route path="/produto/:id" element={<ProdutoDetails/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

