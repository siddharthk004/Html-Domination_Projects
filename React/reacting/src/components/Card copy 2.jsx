import React from 'react'

function Card({handleClick,ind,image,name,prof,desc,frnd}) {
  return (
      
    <div className='w-52 h-screen bg-zinc-300 p-3 rounded overflow-hidden'>
        <div className='w-full h-32 bg-sky-200'>
          <img className='w-full h-full object-cover' src={image} alt='Product Image'/>
        </div>
          <div className='w-full p-3 bg-white'>
            <h3 className='font-bold text-xl text-center'>{name}</h3>
            <h5 className='mt-2 font-lightbold text-xl text-center'>{prof}</h5>
            <h5 className=' text-xs text-center'>{desc}</h5>
            <button onClick={()=>handleClick(ind)} className={`mt-4 px-3 py-1 text-white text-xs ml-9 rounded-md ${frnd?"bg-green-700":"bg-blue-700"} font-semibold`}>{frnd? 'Added': 'Add Friend'}</button>
          </div>
    </div>
  )
}

export default Card