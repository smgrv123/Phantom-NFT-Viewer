import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import CollectionDetails from "../screens/CollectionDetails";
import ItemDetails from "../screens/ItemDetails";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/collectionDetails" element={<CollectionDetails />} />
      <Route path='/itemDetails' element={<ItemDetails />} />
    </Routes>
  );
}

export default Router;
