import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import NoPage from '../pages/NoPage';

export default function MainRoutes() {
  return (
    
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='page2' element={<Page2 />} />
            <Route path='page3' element={<Page3 />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    
  )
}

