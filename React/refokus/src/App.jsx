import React from 'react'
import Cards from './assets/components/Cards'
import Footer from './assets/components/Footer'
import Markies from './assets/components/Markies'
import Navbar from './assets/components/Navbar'
import Products from './assets/components/Products'
import Stripes from './assets/components/Stripes'
import Work from './assets/components/Work'

function App() {
  return (
    <div className='bg-black text-white w-full h-screen'>
      <Navbar />
      <hr className='w-[80%] m-auto h-0.4'/>
      <Work />
      <Stripes />
      <Products />
      <Markies />
      <Cards />
      <Footer />
    </div> 
  )
}

export default App
