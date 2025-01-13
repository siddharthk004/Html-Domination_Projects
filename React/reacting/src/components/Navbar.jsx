import React from 'react'
import Styles from "./style.module.css";

function Navbar({data}) {
  return (
    <div>
        <div className={`${Styles.a} w-full px-4 py-3 flex justify-between items-center text-3xl`}>
            <h1 className='font-bold text-lime-700 ml-4 mt-5'>SanRatna Music</h1>
            <div className='flex px-1 py-1 mt-8 rounded-md text-xl font-semibold mr-8 bg-orange-200'>
                <h3>Favourites </h3>
                <h4 className=' ml-2 mr-3 text-xm'>{data.filter(item=>item.friends).length}</h4>
            </div>
        </div>
    </div>
  )
}

export default Navbar