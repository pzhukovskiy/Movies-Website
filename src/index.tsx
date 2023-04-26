import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import Home from './components/Home';
import TV_series from './components/TVseries';
import Upcoming from './components/Upcoming';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Navbar children={<App/>}/>}/>  
          <Route path="/Home" element={<Home/>}/>
          <Route path='/Movies' element={<Movies/>}/>
          <Route path='/TV Series' element={<TV_series/>}/>
          <Route path='/Upcoming' element={<Upcoming/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);