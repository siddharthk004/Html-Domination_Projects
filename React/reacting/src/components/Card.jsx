import React from 'react'

function Card({siddh,color}) {
  return (
      
    <div className='w-52 h-screen bg-zinc-300 p-3 rounded overflow-hidden'>
        <div className='w-full h-32 bg-sky-200'></div>
          <div className='w-full p-3 bg-white'>
            <h3 className='font-semibold text-xl text-center'>name</h3>
            <h5 className='font-semibold text-xl text-center'>Profession</h5>
            <button className={`mt-4 px-3 py-1 text-white text-xs ml-3 rounded-md bg-blue-500 font-semibold`}>Add Friend</button>
          </div>
    </div>
  )
}

export default Card