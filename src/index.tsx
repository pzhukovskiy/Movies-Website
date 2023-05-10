import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Home from './components/Home/Home';
import Upcoming from './components/Upcoming/Upcoming';
import { QueryClient, QueryClientProvider } from 'react-query';
import Registration from './components/Registration/Registration';
import InfoMovie from './components/InfoMovie/InfoMovie';
import TV_SERIES from './components/TV/TV_SERIES';
import Login from './components/Login/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route index element={<Registration/>}/>  
          <Route path="/Home" element={<Home/>}/>
          <Route path='/Movies' element={<Movies/>}/>
          <Route path='/TV Series' element={<TV_SERIES/>}/>
          <Route path='/Upcoming' element={<Upcoming/>}/>
          <Route path='/Registration' element={<Registration/>}/>
          <Route path='/Movie/:id' element={<InfoMovie/>}/>
          <Route path='Login' element={<Login/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
);