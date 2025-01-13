import React from 'react'
import Card from './Card'

function Cards({HandleRemove,user}) {
  return (
    <div className='flex-wrap max-h-96 overflow-auto w-full flex justify-center gap-4 p-4'>
      {user.map((item,index) => {
     return <Card HandleRemove={HandleRemove} users={item} id={index} key={index}/>

      })}
    </div>
  )
}

export default Cards
