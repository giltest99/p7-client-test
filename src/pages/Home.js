import React from 'react'
import Navigation from '../components/Navigation'

export default function Home() {
  document.title = 'Home';
  return (
    <div>
        <Navigation />
        <h1 className="w3-center">Home</h1>
        
    </div>
  )
}
