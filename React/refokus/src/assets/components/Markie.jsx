import React from 'react'

function Markie({imgURL}) {
  return (
    <div className="bg-zinc-800 flex-shrink-0 h-[12vh]">
      <img src={imgURL.url} alt="Item" className="h-[12vh] w-auto" />
    </div>
  );
}

export default Markie
