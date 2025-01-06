import React from "react";

function Footer() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-xl py-10 mx-auto flex gap-5">
        <div className="basis-1/2">
          <h1 className="text-[7rem] m-5 font-semibold tracking-tight leading-none">
            Refocus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-5 text-zinc-500 capitalize">Socials</h4>
            {["Instagram", "Twitter (x?)", "Linkedin"].map((item, index) => (
              <a className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-5 text-zinc-500 capitalize">Socials</h4>
            {["Instagram", "Twitter (x?)", "Linkedin"].map((item, index) => (
              <a className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 text-zinc-600">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              dolorem accusamus omnis tempore in nesciunt molestiae, ratione
              doloribus officia odio?
            </p>
            <img
              className="h-7 opacity-70 mt-9 ml-5"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpuTK2FW6GT5CLVv_UF1tVbdpRSETXJYp4rdz_rNuv7t8j-eAJvhZOqaHZraq4V-a8g&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-5 pb-14 pl-11 opacity-30 flex gap-8 ml-5">
        <h1>Privacy Policy</h1>
        <h1>Cookie Policy</h1>
        <h1>Impressum</h1>
        <h1>Terms</h1>
      </div>
    </div>
  );
}

export default Footer;
