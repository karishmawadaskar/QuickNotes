import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import Show from './views/Show/Show';
import Add from './views/Add/Add';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <BrowserRouter>
   <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/add' element={<Add/>}/>
       <Route path='/show' element={<Show/>}/>
   </Routes>
  </BrowserRouter>
  <Toaster/>
  </>
);


