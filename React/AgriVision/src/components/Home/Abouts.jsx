import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Abouts() {
  return (
    <div className="bg-green-700 w-full ">
      <div className="gap-10 p-8 text-xl justify-between text-white h-[16vh] w-full flex">
        <div className="w-50 text-xl">
          <h1>About Us</h1>
          <h1>Privacy Policy</h1>
          <h1>Support</h1>
          <h1>FAQ`S</h1>
        </div>
        <div className="flex items-center ">
          <div>
            <FaInstagram className="h-[5vh] w-40" />
          </div>
          <div>
            <FaFacebook className="h-[5vh] w-40" />{" "}
          </div>
          <div>
            <FaSquareTwitter className="h-[5vh] w-40" />
          </div>
          <div>
            <FaLinkedin className="h-[5vh] w-40" />
          </div>
          <div>
            <FaGithub className="h-[5vh] w-40" />
          </div>
        </div>
      </div>
      <h1 className="text-xl text-center text-white text-lightbold">
        Copyright © 2025 AgriVision Private Limited
      </h1>
    </div>
  );
}

export default Abouts;
