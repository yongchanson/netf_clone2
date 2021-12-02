// import './home.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App";
import { render } from "react-dom";

import Invoices from './components/test1.js';
import Expenses from './components/test2.js';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Invoices />} />
      <Route path="test" element={<Expenses />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

export default App;
