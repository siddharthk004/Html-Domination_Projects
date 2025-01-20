import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Project1 from './Project/Project1'

function App() {
  return (
    <div className='bg-zinc-800 h-screen'>
      <Navbar />
      <Home />
      <Project1 />
    </div>
  )
}

export default App