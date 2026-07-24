import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TableData from "./pages/TableData";
import AddData from "./pages/AddData";
import EditData from "./pages/EditData";
import DeleteData from "./pages/DeleteData";

import "./App.css";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";


const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>

        <Route
          path="/"
          element={
            <TableData
              products={products}
              setProducts={setProducts}
            />
          }
        />

        <Route
          path="/add"
          element={
            <AddData
              setProducts={setProducts}
            />
          }
        />

        <Route
          path="/edit/:id"
          element={
            <EditData
              products={products}
              setProducts={setProducts}
            />
          }
        />
        <Route
  path="/delete/:id"
  element={
    <DeleteData
      products={products}
      setProducts={setProducts}
    />
  }
/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;