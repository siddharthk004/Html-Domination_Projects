import React from "react";
import img from "../assets/img.png"; // Importing the image

function Home() {
  return (
    <div className="w-full mt-40 items-center flex justify-center">
      <div className="w-[50%] h-[80%] pl-40 mt-6">
        {/* Displaying the imported image */}
        <img src={img} alt="Description" className="w-[80%] h-[60vh] " />
      </div>
      <div className="w-[50%] mr-20 pb-40">
        {/* Placeholder content */}
        <h1 className="text-6xl text-cyan-200 font-semibold font-regular">Welcome to Developer Portfolio!</h1>
        <h1 className="text-7xl text-cyan-500 font-bold font-serif mt-10 pl-32">Siddharth Kardile </h1>
        <h1 className="text-4xl text-cyan-200 font-lightbold font-sans mt-16 ml-4">| Vite-React | Spring Boot | MySql | Java | Tailwind CSS |</h1>
      </div>
    </div>
  );
}

export default Home;
