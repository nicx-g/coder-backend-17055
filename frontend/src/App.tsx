import React, { useState } from "react";
import ProductsList from "./Components/ProductsList";
import ProductsForm from "./Components/ProductsForm";

function App() {
  return (
    <div className="bg-dark min-vh-100 d-flex justify-content-center align-items-center flex-column">
      <ProductsList />
      <ProductsForm />
    </div>
  );
}

export default App;
