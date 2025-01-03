import React, { useState } from 'react';

function NewCard() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-60 h-32 relative rounded-md flex overflow-hidden">
        {/* First Image */}
        <img
          className={`absolute transition-transform duration-700 ${
            !val ? 'translate-x-0' : '-translate-x-full'
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D"
          alt="First"
        />
        {/* Second Image */}
        <img
          className={`absolute transition-transform duration-700 ${
            !val ? 'translate-x-full' : 'translate-x-0'
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second"
        />
        {/* Button */}
        <span
          onClick={() => setVal(!val)}
          className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center bg-[#dadada] rounded-full cursor-pointer"
        >
          →
        </span>
      </div>
    </div>
  );
}

export default NewCard;
