import React, { useState } from "react";
import ProductsList from "./Components/ProductsList";
import ProductsForm from "./Components/ProductsForm";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="p-4 bg-dark min-vh-100 d-flex justify-content-center align-items-center flex-column">
      <div className="container w-50">
        <ProductsList />
        <ProductsForm />
        <Chat />
      </div>
    </div>
  );
}

export default App;
