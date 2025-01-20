import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Login from "./UserInfo/Login";
import Register from "./UserInfo/Register";
import OrganicFarm from "./components/Products_variety/OrganicFarm";
import BioFertilizer from "./components/Products_variety/BioFertilizer";
import Booster from "./components/Products_variety/Booster";
import Fertilizer from "./components/Products_variety/Fertilizer";
import Fungicide from "./components/Products_variety/Fungicide";
import Herbicide from "./components/Products_variety/Herbicide";
import Insecticide from "./components/Products_variety/Insecticide";
import Nutrient from "./components/Products_variety/Nutrient";
import Pesticide from "./components/Products_variety/Pesticide";
import ProductDetails from "./components/ProductDetails";
import ProductDetailsfungi from "./components/ProductDetail/ProductDetailsfungi";
import ProductDetailsherbi from "./components/ProductDetail/ProductDetailsherbi";
import ProductDetailsinsect from "./components/ProductDetail/ProductDetailsinsect";
import ProductDetailsnutri from "./components/ProductDetail/ProductDetailsnutri";
import ProductDetailspest from "./components/ProductDetail/ProductDetailspest";
import ProductDetailsorgan from "./components/ProductDetail/ProductDetailsorgan";
import ProductDetailsbiof from "./components/ProductDetail/ProductDetailsbiof";
import ProductDetailsboost from "./components/ProductDetail/ProductDetailsboost";
import Profile from "./components/Home/Profile";
import HelpCenter from "./components/Home/HelpCenter";
import EditProfile from "./components/Home/EditProfile";
import WishList from "./components/UserInfoPages/WishList";
import Cart from "./components/UserInfoPages/Cart";
import Payment from "./components/Card/PaymentPage";
import BuyProduct from "./components/UserInfoPages/BuyProduct";
import Aboutus from "./components/About/Aboutus";
import Faq from "./components/About/Faq";
import Support from "./components/About/Support";
import Privacypolicy from "./components/About/Privacypolicys";
import Privacypolicys from "./components/About/Privacypolicys";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      <Route path="/organFarm" element={<OrganicFarm />} />
      <Route path="/biofertilizer" element={<BioFertilizer />} />
      <Route path="/booster" element={<Booster />} />
      <Route path="/fertilizer" element={<Fertilizer />} />
      <Route path="/fungicide" element={<Fungicide />} />
      <Route path="/herbicide" element={<Herbicide />} />
      <Route path="/insecticide" element={<Insecticide />} />
      <Route path="/nutrient" element={<Nutrient />} />
      <Route path="/pesticide" element={<Pesticide />} />

      <Route path="/profileSection" element={<Profile />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/wishlistView" element={<WishList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/buyproduct" element={<BuyProduct />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/editprofile" element={<EditProfile />} />

      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/privacypolicy" element={<Privacypolicys />} />
      <Route path="/support" element={<Support />} />
      <Route path="/faq" element={<Faq />} />

      <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      <Route path="/ProductDetailsfungi/:id" element={<ProductDetailsfungi />} />
      <Route path="/ProductDetailsherbi/:id" element={<ProductDetailsherbi />} />
      <Route path="/ProductDetailsinsect/:id" element={<ProductDetailsinsect />} />
      <Route path="/ProductDetailsnutri/:id" element={<ProductDetailsnutri />} />
      <Route path="/ProductDetailsorgan/:id" element={<ProductDetailsorgan />} />
      <Route path="/ProductDetailspest/:id" element={<ProductDetailspest />} />
      <Route path="/ProductDetailsboost/:id" element={<ProductDetailsboost />} />
      <Route path="/ProductDetailsbiof/:id" element={<ProductDetailsbiof />} />
    </Routes>
  );
}

export default App;
