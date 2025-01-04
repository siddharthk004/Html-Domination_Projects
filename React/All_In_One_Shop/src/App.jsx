import React from "react";
import Card from "./component/Card";
import { Routes, Route } from "react-router-dom";
import Details from "./component/Details";

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
