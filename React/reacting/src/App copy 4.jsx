import React from 'react'
import { useRef } from 'react'

function App() {
  const Name = useRef(null);
  const Age = useRef(null);

  const HandleSubmut = (event) => {
    event.preventDefault();
    console.log(`Name: ${Name.current.value}, Age: ${Age.current.value}`);
  }

  return (
   <form action='' onSubmit={HandleSubmut}>
    <input ref={Name} type="text" placeholder="Name" />
    <input ref={Age} type="text" placeholder="Age" />
    <input type="submit" value="Submit" />
    </form>
  )
}

export default App
 