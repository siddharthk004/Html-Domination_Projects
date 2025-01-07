import React from "react";

function Navbar() {
  return (
    <div className="mt-[6.9vh] h-27 bg-gradient-to-r from-green-600 via-green-400 to-green-600 flex justify-between">
      <div className="flex">
        <div className="pl-9 pt-3">
          <img
            className="rounded-3xl  h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75hVknuBik4SsZV7a6ZZhQ_zcX130HSxKDQ&s"
          />
          <h1 className="text-2xl font-lightbold text-zinc-800">Home</h1>
        </div>
        
        <div className="pl-9 pt-3">
          <img
            className="rounded-3xl h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DIpd1kz9a3U1oAhsaqV9SSWCEuBl67kTfw&s"
          />
          <h1 className="text-2xl font-lightbold text-zinc-800">Profile</h1>
        </div>

        <div className="pl-9 pt-3">
          <img
            className="rounded-3xl  h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgnTC5Tit5-qdHx72nAs91EjkOeny4GmDnUtr_hb1uev4yQdrheJs9UHMYeoJFr8c8oM&usqp=CAU"
          />
          <h1 className="text-2xl font-lightbold text-zinc-800">Scan</h1>
        </div>
        
        
        <div className="pl-9 pt-3">
          <img
            className="rounded-3xl h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZI5oiEgRPoflsOtMwT-ofEsdPn6gUKk5dg&s"
          />
          <h1 className="text-2xl font-lightbold text-zinc-800">Help</h1>
        </div>
      </div>
      <div className="mr-10 w-full max-w-md h-10 mt-7 flex gap-5">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Search..."
        />
        <button className="bg-blue-500 text-white text-bold rounded-xl w-36 border border-blue-400 ">
          Search
        </button>
      </div>
    </div>
  );
}

export default Navbar;
