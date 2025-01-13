import React from "react";

function Card({ HandleRemove, users ,id}) {
  return (
    <div className="w-64 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-4">
      <div className="image w-[6vw] h-[6vw] rounded-full bg-zinc-200 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={users.imageURL}
          alt=""
        />
      </div>
      <h1 className="mt-2 text-xl font-semibold text-center leading-none text-center">{users.name}</h1>
      <h4 className="opacity-40 text-sm font-semibold text-center">
        {users.email}
      </h4>
      <p className="mt-2 text-center text-sm font-semibold leading-4 tracking-tight">
        Adding new Profiles For Viewing Purpose. Doloribus, blanditiis.
      </p>
      <button onClick={()=>{HandleRemove(id)}} className="px-4 py-2 bg-red-500 text-sm font-semibold rounded-lg text-white mt-4">
        Remove It
      </button>
    </div>
  );
}

export default Card;
