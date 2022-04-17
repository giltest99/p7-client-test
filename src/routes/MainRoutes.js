import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CreatePost from '../pages/CreatePost';
import AllComments from '../pages/AllComments';
import CreateComment from '../pages/CreateComment';
import CreateUser from '../pages/CreateUser';
import AllUsers from '../components/AllUsers';
import NoPage from '../pages/NoPage';

export default function MainRoutes() {
  return (
    
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='createpost' element={<CreatePost />} />
            <Route path='allcomments' element={<AllComments />} />
            <Route path='createcomment' element={<CreateComment />} />
            <Route path='createuser' element={<CreateUser />} />
            <Route path='allusers' element={<AllUsers />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    
  )
}

