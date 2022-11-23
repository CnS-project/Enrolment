import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leacture from './Lecture';
import LookUp from './LookUp';
import Admin from './Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/lecture" element={<Leacture />}></Route>
          <Route path="/lookUp" element={<LookUp />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
);
