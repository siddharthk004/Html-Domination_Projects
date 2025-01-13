import React from "react";
import axios from "axios";
import { useState } from "react";
import {Link, Route, Routes} from 'react-router-dom'
import Home from "./component/Home";
import Show from "./component/Show";
import About from "./component/About";

function App() {
  const [product, setProduct] = useState([]);
  const GetProduct = () => {
    const api = "https://dummyjson.com/products";
    axios
      .get(api)
      .then((products) => {
        console.log(products.data);
        setProduct(products.data.products);
      })
      .catch((err) => console.log(err));
  };
  // const AddProducts = () => {
  //   const api = "https://fakestoreapi.com/products";
  //   axios
  //     .post(api, {
  //       brand: "sony",
  //       category: "audio",
  //       color: "silver",
  //       description:
  //         "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
  //       discount: 11,
  //       id: 51,
  //       image:
  //         "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
  //       model: "WH-1000XM3",
  //       price: 773,
  //       title:
  //         "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="pt-[5%] pl-[5%]">
      <nav className="flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/about" element={<About />} />
      </Routes>

      
      {/* <button onClick={AddProducts} className="px-5 rounded py-2 bg-blue-400">
        Add Products
      </button> */}
    </div>
  );
}

export default App;
