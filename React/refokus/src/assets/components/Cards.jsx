import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className="w-full bg-black">
        <div className='max-w-screen-lg mx-auto flex gap-2 py-10'>
            <Card width={"basis-70 h-[70%]"} start={false} para={true} />
            <Card width={"basis-2/3"} start={true} para={false} hover={"bg-purple-500"} />
        </div>
    </div>
  )
}

export default Cards
