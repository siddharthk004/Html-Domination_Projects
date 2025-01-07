import React from 'react'
import Card from './Card'

function SellingOffer() {
    var data = [
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/Saaf_AadyaVarma.jpg?v=1734406631&width=256",
          name: "SAAF",
          TotalPrice: 142,
          DiscountTprice: 102,
          companyName: "UPI",
          Discount: "20%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/coragen1_1.jpg?v=1734001818&width=256",
          name: "Coragen",
          TotalPrice: 220,
          DiscountTprice: 167,
          companyName: "FMC",
          Discount: "24%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/1_d1fd4710-cde7-4cbb-aaa0-f3b62da86ecd.webp?v=1689404260&width=256",
          name: "Glycel",
          TotalPrice: 429,
          DiscountTprice: 288,
          companyName: "Sumitomo",
          Discount: "33%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/Roundup-04_AadyaVarma.jpg?v=1734406495&width=256",
          name: "Round Up",
          TotalPrice: 225,
          DiscountTprice: 149,
          companyName: "Monsanto",
          Discount: "34%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/4_0e5cbe53-3958-4d5c-9b37-51c8692469a5.webp?v=1702301410&width=256",
          name: "Topper 77 Herbicide",
          TotalPrice: 1680,
          DiscountTprice: 587,
          companyName: "Crystal Crop Protection",
          Discount: "65%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/coragen1_1.jpg?v=1734001818&width=256",
          name: "Coragen",
          TotalPrice: 220,
          DiscountTprice: 167,
          companyName: "FMC",
          Discount: "24%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/coragen1_1.jpg?v=1734001818&width=256",
          name: "Coragen",
          TotalPrice: 220,
          DiscountTprice: 167,
          companyName: "FMC",
          Discount: "24%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/5_3bb374db-b37b-4361-bd47-5caa39f32d76.png?v=1689404061&width=256",
          name: "Phoskill Insecticide",
          TotalPrice: 238,
          DiscountTprice: 199,
          companyName: "UPL",
          Discount: "16%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/Antracol.webp?v=1689228502&width=256",
          name: "Antracol",
          TotalPrice: 286,
          DiscountTprice: 350,
          companyName: "Bayer",
          Discount: "18%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/files/coragen1_1.jpg?v=1734001818&width=256",
          name: "Coragen",
          TotalPrice: 220,
          DiscountTprice: 167,
          companyName: "FMC",
          Discount: "24%",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0722/2059/products/1_4_0e1a9088-d5be-4092-94fa-e023e1a25fc8.webp?v=1671454530&width=256",
          name: "Nativo Fungicide",
          TotalPrice: 180,
          DiscountTprice: 108,
          companyName: "Bayer",
          Discount: "40%",
        },
          {
            url: "https://cdn.shopify.com/s/files/1/0722/2059/files/Roundup-04_AadyaVarma.jpg?v=1734406495&width=256",
            name: "Round Up",
            TotalPrice: 225,
            DiscountTprice: 149,
            companyName: "Monsanto",
            Discount: "34%",
          },
      ];
  return (
    <div className='flex p-8 flex-row flex-wrap justify-between bg-red-400 bg-zinc-100 w-full'>
        {data.map((item,index) => <Card data = {item} /> )}
    </div>
  )
}

export default SellingOffer
