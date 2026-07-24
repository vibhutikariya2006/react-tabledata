import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddData = ({ setProducts }) => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!res.ok) {
        throw new Error("Unable to Add Product");
      }
const newProduct = await res.json();
     setProducts((prev) => {
  const lastId = prev.length > 0 ? prev[prev.length - 1].id : 0;

  const updatedProduct = {
    ...newProduct,
    id: lastId + 1,
  };

  return [...prev, updatedProduct];
});

      alert("Product Added Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
      }}
    >
      <h2>Add Product</h2>

      <form onSubmit={addProduct}>
        <input
          type="text"
          name="title"
          placeholder="Product Name"
          value={product.title}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="thumbnail"
          placeholder="Image URL"
          value={product.thumbnail}
          onChange={handleChange}
        />

        <br />
        <br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddData;