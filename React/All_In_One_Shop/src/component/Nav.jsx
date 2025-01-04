import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className="w-[15%] h-full p-5 pt-5 bg-zinc-100 flex flex-col items-center">
        <a
          className="py-2 px-5 border rounded border-blue-400 text-blue-300"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="w-[70%] my-3" />
        <h1 className="text-2xl w-[80%] mb-3 ">Category</h1>
        <ul className="w-[80%]">
          <li className=" mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-200"></span>
            {""}
            category 1
          </li>
          <li className=" mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-lime-200"></span>
            {""}
            category 1
          </li>
          <li className=" mb-3 flex items-center">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-pink-200"></span>
            {""}
            category 1
          </li>
        </ul>
      </nav>
      </>
  )
}

export default Nav
