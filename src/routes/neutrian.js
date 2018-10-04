import React from "react";
import { Route } from "react-router-dom";
import { NeutrianContainer } from "../containers";
// import {
//   ShowAllFoodsContainer,
//   ShowAllDrinksContainer,
//   ShowAllDessertContainer
// } from "../containers";
const NeutrianRoute = () => {
  return (
    <div>
      {/* Main */}
      <Route path="/neutrian" component={NeutrianContainer} />
      {/* show All
      <Route path="/neutrian/showall/foods" component={ShowAllFoodsContainer} />
      <Route path="/neutrian/showall/drinks" component={ShowAllDrinksContainer} />
      <Route path="/neutrian/showall/desserts" component={ShowAllDessertContainer} /> */}
    </div>
  );
};

export default NeutrianRoute;
