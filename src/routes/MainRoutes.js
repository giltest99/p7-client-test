import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

export default function MainRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='page2' element={<Page2 />} />
            <Route path='page3' element={<Page3 />} />
        </Routes>
    </BrowserRouter>
    
  )
}

