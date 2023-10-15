import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Component/App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndiaNews from './Component/IndiaNews';
import UsNews from './Component/UsNews';
import About from './Component/About';
import News from './Component/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<News />} />
          <Route path='/IndiaNews' element={<IndiaNews />} />
          <Route path='/UsNews' element={<UsNews />} />
          <Route path='/About' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

reportWebVitals();
