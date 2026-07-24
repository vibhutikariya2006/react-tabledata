import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditData = ({ products, setProducts }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  // Find selected product
  const selectedProduct = products.find(
    (product) => product.id === Number(id)
  );

  // Autofill form
  const [title, setTitle] = useState(selectedProduct.title);
  const [description, setDescription] = useState(selectedProduct.description);
  const [category, setCategory] = useState(selectedProduct.category);
  const [brand, setBrand] = useState(selectedProduct.brand);
  const [price, setPrice] = useState(selectedProduct.price);
  const [thumbnail, setThumbnail] = useState(selectedProduct.thumbnail);
  const [availabilityStatus, setAvailabilityStatus] = useState(
    selectedProduct.availabilityStatus
  );

  const updateProduct = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...selectedProduct,
      title,
      description,
      category,
      brand,
      price,
      thumbnail,
      availabilityStatus,
    };

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === Number(id)
          ? updatedProduct
          : product
      )
    );

    alert("Product Updated Successfully");

    navigate("/");
  };

  return (
    <div style={{ width: "400px", margin: "30px auto" }}>

      <h2>Edit Product</h2>

      <form onSubmit={updateProduct}>

        <input
          type="text"
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Image URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Availability"
          value={availabilityStatus}
          onChange={(e) => setAvailabilityStatus(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Update Product
        </button>

      </form>

    </div>
  );
};

export default EditData;