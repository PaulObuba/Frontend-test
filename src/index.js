import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App";
import Bills from './components/Bills';
import Reports from './components/Reports';


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Bills" element={<Bills />} />
        <Route path="Reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
