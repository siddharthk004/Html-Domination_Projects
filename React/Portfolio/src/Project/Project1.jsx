import React from "react";
import img from "../assets/agrivision.png"; // Importing the image

function Project1() {
  return (
    <div className=" bg-zinc-800 w-full pt-60">
      <div className="w-full pb-8 text-5xl text-white shadow-2xl shadow-zinc-700 font-bold text-center">
        || Projects ||
      </div>
      <div className="w-full pt-10 flex pl-10">
        <div className="w-[49%] pt-10">
          <img src={img} className="" />
        </div>
        <div className="w-[50%] mt-10 text-white mx-auto">
          <h1 className="text-6xl font-bold text-center mb-8">AgriVision</h1>
          <p className="m-10 text-xl text-justify leading-relaxed">
            Welcome to AgriVision, a cutting-edge platform designed to empower
            farmers with innovative tools to protect and enhance their crops.
            AgriVision is more than just a tool—it's a mission to revolutionize
            agriculture by combining technology and sustainability. By equipping
            farmers with actionable insights, we aim to reduce crop loss,
            optimize resource usage, and pave the way for a prosperous farming
            community.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full">
              JavaScript ES6
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-green-900 rounded-full">
              React v18.0
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full">
              Tailwind CSS v3.0
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-purple-500 rounded-full">
              Spring Boot 3.4.1
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-full">
              HTML 5
            </span>
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-zinc-600 via-blue-700 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              GitHub
            </button>
          </div>
        </div>
      </div><div className="w-full pt-10 flex pl-10">
        <div className="w-[50%] pt-10">
          <img src={img} className="" />
        </div>
        <div className="w-[50%] mt-10 text-white mx-auto">
          <h1 className="text-6xl font-bold text-center mb-8">AgriVision</h1>
          <p className="m-10 text-xl text-justify leading-relaxed">
            Welcome to AgriVision, a cutting-edge platform designed to empower
            farmers with innovative tools to protect and enhance their crops.
            AgriVision is more than just a tool—it's a mission to revolutionize
            agriculture by combining technology and sustainability. By equipping
            farmers with actionable insights, we aim to reduce crop loss,
            optimize resource usage, and pave the way for a prosperous farming
            community.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full">
              JavaScript ES6
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-green-900 rounded-full">
              React v18.0
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full">
              Tailwind CSS v3.0
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-purple-500 rounded-full">
              Spring Boot 3.4.1
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-full">
              HTML 5
            </span>
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-zinc-600 via-blue-700 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
