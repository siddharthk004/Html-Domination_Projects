import React from 'react'
import { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {
  const [users,setusers] = useState([]);
  
  const formHandleSubmitData = (data) => {
    setusers([...users,data]);
  }

  const HandleRemove = (id) => {
    setusers(()=>users.filter((item,index) => index != id))
  } 
  
  return (
    <div className='w-full h-screen bg-zinc-200 items-center justify-center flex'>
      <div className='container mx-auto'>
        <Cards HandleRemove = {HandleRemove} user = {users}/>
        <Form formHandleSubmitData = {formHandleSubmitData}/>
      </div>      
    </div>
  )
}

export default App
