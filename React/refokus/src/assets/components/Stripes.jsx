import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9ICSUM1sx-xl769l5Xzw1l8C3Ck-6Dk9gQ&s",
      num: 48,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcuVBMKpxSS00YhQiCfrfms4SJ6SB5vQhiQ&s",
      num: 2,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDf4PjH7bjbwNF3QV4LxiCQaYnJsdzBbYCiQ&s",
      num: 11,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCudykEvksMnSdN5hfMxsYsq2fy-AnXwuymw&s",
      num: 48,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPAKGm-5ZsjBtvd495H2tNQgPt9J_qJYsoQ&s",
      num: 11,
    },
  ];
  return (
    <div className="flex items-center ">
      {data.map((elem, ind) => (
       <Stripe val={elem} name={ind} key={ind} />
      ))}
    </div>
  );
}

export default Stripes;
