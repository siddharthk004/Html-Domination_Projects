import React from "react";
import Ads from "./components/Ads";
import Categorys from "./components/Categorys";
import Exclusive from "./components/Exclusive";
import Home from "./components/Home";
import Selling from "./components/Selling";
import SellingOffer from "./components/SellingOffer";
import Show from "./components/Show";
import Offers from "./components/Offers";
import Farmer from "./components/Farmer";
import Brands from "./components/Brands";
import Abouts from "./components/Abouts";
import GrowthAds from "./components/GrowthAds";
import Stripes from "./components/Stripes";
import StripesDet from "./components/StripesDet";

function App() {
  return (
    <div className="bg-green-400">
      {/* Home Screen Their having main navbar and only navbar */}
      <Home />
      <br />
      {/* Ads Screen Their having Images Are Moving */}
      <Ads />
      <br />
      {/* stripe that having condition and some text */}
      <Stripes />
      <br />
      {/* Category Section Their having category of what we sell */}
      <Exclusive value={"Category"} />
      <Categorys />
      <br />
      {/* Offer Screen  having Offer section in their are some products are on sell only for today */}
      <Exclusive value={"Today Offer Only"} />
      <SellingOffer />
      {/* Fermer Section having farmer image */}
      <Farmer />
      {/* Exclusive Screen  having Exclusive product section in their are some products are on Exclusive only for today */}
      <Exclusive value={"Exclusive Products Of The Day"} />
      <Show />
      {/* Offer Screen  having offer on Cards */}
      <Offers />
      {/* selling Screen  having best selling product of the day */}
      <Exclusive value={" Best Selling Of The Day"} />
      <Selling />

      <div className="bg-zinc-100 h-10 w-full"/>
      {/* growth Screen  having growth pesticide recommandation */}
      <GrowthAds />
      <div className="bg-green-100 h-10 w-full"/>

      {/* growth Section  having need for growth products */}
      <Exclusive value={"Growth Promoters"} />
      <Show />
      {/* Brand Section having All brand that are we sell their products */}
      <Exclusive value={" Brands "} />
      <Brands />
      {/* Stripe Detail having they sell to how many and count of product brand  */}
      <StripesDet />
      {/* about section having all conditions and links are all stuff are in the about section */}
      <Abouts />
    </div>
  );
}

export default App;
