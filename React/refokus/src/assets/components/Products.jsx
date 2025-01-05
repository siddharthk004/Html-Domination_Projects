import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      title: "Iscrt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam illo ea accusamus accusantium optio aut numquam dolor minima quidem similique, suscipit, quam odit voluptates? Eos, maiores doloremque! Minima, hic?",
      url: "https://videos.pexels.com/video-files/3297559/3297559-sd_640_360_30fps.mp4",
      live: true,
      case: false,
    },
    {
      title: "Homeson",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis itaque aliquid, reprehenderit necessitatibus a optio pariatur error deleniti, possimus minima ipsum vitae sequi laborum laudantium  Quaerat ducimus neque offi",
      url: "https://videos.pexels.com/video-files/5680034/5680034-sd_640_360_24fps.mp4",
      live: true,
      case: true,
    },
    {
      title: "Defilions",
      desc: "Lo! Et doloremque asperiores neque aperiam impedit, in quidem repellat repudiandae beatae libero maiores optio iusto expedita officiis dignissimos. Repellendus ipsa quas beatae alias nisi itaque possimus sit impedit. Iusto numquam ",
      url : "https://videos.pexels.com/video-files/5091624/5091624-sd_640_360_24fps.mp4",
      live: true,
      case: false,
    },
    {
      title: "Aocns",
      desc: "non illo veniam animi cumque quisquam quos veritatis cupiditate, inventore eius laudantium facere, eaque eos labore id molestiae magnam corrupti dolores aspernatur. Quaerat ducimus neque officia esse! Consectetur unde voluptas ?",
      url : "https://videos.pexels.com/video-files/5955965/5955965-sd_640_360_30fps.mp4",
      live: true,
      case: false,
    },
    {
      title: "Cailodic",
      desc: "numquam ipsam, delectus odit repellendus, earum illo commodi minus ducimus incidunt minima.numquam ipsam, delectus odit repellendus, earum illo commodi minus ducimus incidunt minima.  Quaerat ducimus neque offi Quaerat ducimus neque offi",
      url: "https://videos.pexels.com/video-files/12722063/12722063-sd_640_360_24fps.mp4",
      live: true,
      case: true,
    }
  ];

  return (
    <div className="mt-16">
      {products.map((elem, ind) => (
        <Product elem={elem} value={ind} key={ind} />
      ))}
    </div>
  );
}

export default Products;
