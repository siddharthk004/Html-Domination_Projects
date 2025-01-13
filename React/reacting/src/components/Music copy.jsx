import React from 'react'

function Music({names,image,artist,flag,ind,handleFriendsButton}) {
  return (

         <div className='ml-10 mt-5 w-60 pb-10 gap-4 relative bg-zinc-100 p-4 rounded-md flex'>
        <div className='w-20 h-20 bg-orange-200 rounded-md'>
          <img className='w-full h-full object-cover' src={image} alt='Product Image'/>

        </div>

          <div className=''>
            <h2 className='font-semibold'>{names}</h2>
            <h5 className='mt-2 font-lightbold text-lg text-center'>{artist}</h5>
          </div>
          <button onClick={()=>handleFriendsButton(ind)} className={`px-4 py-3 bottom-0 translate-y-[50%] left-1/2 whitespace-nowrap -translate-x-[50%] text-white text-xs rounded-full ${!flag?'bg-orange-600':'bg-green-600'} absolute`}>{!flag?"Add To Favourites":"Added"}</button>
    </div>
  )
}

export default Music
