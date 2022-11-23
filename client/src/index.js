import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leacture from './Lecture';
import LookUp from './LookUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/lecture" element={<Leacture />}></Route>
          <Route path="/lookUp" element={<LookUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
);
