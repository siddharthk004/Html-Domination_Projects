import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import About from './component/About';
import Home from './component/Home';
import User from './component/User';

const App = () =>   {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/User'>user</Link>
        <Link to='/About'>About</Link>
      </nav>  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/USER" element={<User />}/>
        <Route path="/ABOUT" element={<About />}/>
      </Routes>
    </>
  )
};

export default App 