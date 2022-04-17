import React from 'react'
import Navigation from '../components/Navigation'
import ViewAllPosts from '../components/ViewAllPosts';

export default function Home() {
  document.title = 'All posts';
  return (
    <div>
        <Navigation />
        <h1 className="w3-center">ALL POSTS</h1>
        <ViewAllPosts />
        
    </div>
  )
}
