// import { useState } from "react";
import React, { useState } from 'react'

function App() {
const [Score,setScore]= useState("Siddharth");

  return (
    <div className='p-4'>
      <h1>{Score}</h1>
      <button onClick={()=>setScore((prev)=>prev+' Kardile')} className='px-2 py-1 bg-blue-600 rounded-full mt-2 text-white text-xs'>Change</button>      
    </div>
  )
}

export default App