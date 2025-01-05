import React from 'react'

function Stripe({val,name}) {
  return (
    <div key={name} className='mt-16 mb-1 w-[20%] p-10 px-4 py-[1px] border-t-[1px] border-b-[1px] border-zinc-600 border-r-[1px] border-white flex justify-between'>
      <img src={val.url} className="h-[60px] w-30 ml-7"></img>
      <span className='font-semibold p-5'>{val.num}</span>
    </div>
  )
}

export default Stripe
