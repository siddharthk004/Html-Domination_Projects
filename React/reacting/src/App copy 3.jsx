import React, { useState } from "react";
import Music from "./components/Music";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      name: "Flowers",
      friends: false,
      Artist: "Miley Syrus",
      img: "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Jo Tum Ho",
      friends: false,
      Artist: "Anuv Jain",
      img: "https://images.unsplash.com/photo-1586095087956-bc66fe634955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Ishq Hai",
      friends: false,
      Artist: "Raj Shekhar",
      img: "https://plus.unsplash.com/premium_photo-1681182425439-a94cbb2435ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Aaj Raat",
      Artist: "Divya Kumar",
      img: "https://images.unsplash.com/photo-1520454125516-134a66d9bf78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      friends: false,
      name: "Jo Tum Ho",
      Artist: "Anuv Jain",
      img: "https://images.unsplash.com/photo-1586095087956-bc66fe634955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Ishq Hai",
      friends: false,
      Artist: "Raj Shekhar",
      img: "https://plus.unsplash.com/premium_photo-1681182425439-a94cbb2435ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Ranjhan",
      friends: false,
      Artist: "Parampara Tandon",
      img: "https://plus.unsplash.com/premium_photo-1681307743395-bf4548dcd9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },{
      name: "Flowers",
      friends: false,
      Artist: "Miley Syrus",
      img: "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Jo Tum Ho",
      friends: false,
      Artist: "Anuv Jain",
      img: "https://images.unsplash.com/photo-1586095087956-bc66fe634955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Ishq Hai",
      friends: false,
      Artist: "Raj Shekhar",
      img: "https://plus.unsplash.com/premium_photo-1681182425439-a94cbb2435ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },{
      name: "Flowers",
      friends: false,
      Artist: "Miley Syrus",
      img: "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Jo Tum Ho",
      friends: false,
      Artist: "Anuv Jain",
      img: "https://images.unsplash.com/photo-1586095087956-bc66fe634955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Ishq Hai",
      friends: false,
      Artist: "Raj Shekhar",
      img: "https://plus.unsplash.com/premium_photo-1681182425439-a94cbb2435ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Aaj Raat",
      friends: false,
      Artist: "Divya Kumar",
      img: "https://images.unsplash.com/photo-1520454125516-134a66d9bf78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmd8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const [realData, setrealData] = useState(data);
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
      <Navbar data = {realData}/>
      <div className="bg-zinc-300 min-h-screen p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {realData.map((item, index) => (
            <Music
              key={index}
              names={item.name}
              artist={item.Artist}
              image={item.img}
              flag={item.friends}
              ind = {index}
              handleFriendsButton = {handleFriendsButton}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
