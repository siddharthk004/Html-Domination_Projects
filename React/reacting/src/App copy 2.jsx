import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const arr = [
    {
      name: "john",
      friends: false,
      prof: "painter",
      desc: "Well Painter pipe-using-wrench.webp?a=pipe-using-wrench.webp?a=",
      img: "https://media.istockphoto.com/id/1457344216/photo/confident-painter-standing-with-crossed-arms-by-holding-paint-brush-by-looking-camera-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=poYfq5xKNW4JtVqVeCsdvaQ0HeRD4M8CxUWSwHu6P80=",
    },
    {
      name: "Rahul",
      prof: "Developer",
      desc: "Well Developer pipe-using-wrench.webp?a=pipe-using-wrench.webp?a=",
      img: "https://media.istockphoto.com/id/1149529035/photo/this-looks-interesting.webp?a=1&b=1&s=612x612&w=0&k=20&c=WBoEsW34ZoDhvrdadrU9jl1b6Gxc2B-tXtUnPT_FVR8=",
    },
    {
      name: "Prakash",
      friends: false,
      prof: "Plumber",
      desc: "Well Plumber pipe-using-wrench.webp?a=pipe-using-wrench.webp?a=",
      img: "https://media.istockphoto.com/id/1365364736/photo/plumber-or-repairman-talking-on-mobile-phone-with-colleague-while-fixing-pipe-using-wrench.webp?a=1&b=1&s=612x612&w=0&k=20&c=45HMUjFzwT7WWjdDdF1Qxwtp3MBnJJJZJKtFCOEkb2Y=",
    },
    {
      name: "Ram",
      friends: false,
      prof: "Artist",
      desc: "Well Artist pipe-using-wrench.webp?a=pipe-using-wrench.webp?a=",
      img: "https://images.unsplash.com/photo-1658314756129-5b27f344b65b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFydGlzdCUyMG1hbW58ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Kisan",
      friends: false,
      prof: "Farmer",
      desc: "Well Farmer pipe-using-wrench.webp?a=pipe-using-wrench.webp?a=",
      img: "https://plus.unsplash.com/premium_photo-1661411325413-98a5ff88e8e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZBcm1lcnxlbnwwfHwwfHx8MA%3D%3D=",
    },
  ];

  const [realData, setrealData] = useState(arr);
  const handleFriendsButton = (cardIndex) => {
    setrealData((previous) => {
      return previous.map((item, index) => {
        if (index === cardIndex) {
          return {...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 items-center justify-center flex gap-4">
        {realData.map((items, index) => (
          <Card
            handleClick={handleFriendsButton}
            index={index}
            image={items.img}
            name={items.name}
            prof={items.prof}
            desc={items.desc}
            frnd={items.friends}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
