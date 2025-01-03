import React from 'react'

function Card() {
    const data = [
        {name: "Mahiya ve",desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam expedita consectetur"},
        {name: "Tera Fitoor",desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam expedita consectetur"},
        {name: "Radha",desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam expedita consectetur"},
        {name: "Dunki ",desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam expedita consectetur"},
    ]

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center flex-col gap-4 items-center'>
      {data.map((elem,index)=>(
        <div className='song px-3 py-2 w-70 bg-zinc-100 rounded'>
        <h3 className='font-semibold text-xl'>{elem.name}</h3>
        <p className='text-xs mt-2'>{elem.desc}</p>
        <button className='px-2 py-1 bg-blue-700 text-xs font-semibold text-zinc-100 rounded-md mt-3' onClick={()=>{alert("Hey");}}> Download Now</button>
      </div>
      ))}
    </div> 
  )
}

export default Card
