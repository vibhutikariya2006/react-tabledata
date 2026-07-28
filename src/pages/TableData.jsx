import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const TableData = ({ products, setProducts }) => {
   
  
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) {
        throw new Error("API cannot be fetched");
      }

      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      fetchProduct();
    }
  }, [products]);

  return (
    <div className="container">
      <h2 className="heading">Product Table</h2>
     <div className="table-container">
         <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Product Description</th>
            <th>Category</th>
            <th>Brand</th>
             <th>Price</th>
             <th>AvailabilityStatus</th>
              <th>Button</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  width="80"
                />
              </td>
              <td className="description">{product.description}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td className="price">${product.price}</td>
              <td >{product.availabilityStatus || "In Stock"}</td>
           <td>
  <button onClick={() => navigate(`/edit/${product.id}`)}>
    <i class="ri-pencil-fill"></i>
  </button>

  <button
    onClick={() => navigate(`/delete/${product.id}`)}
    style={{ marginLeft: "10px" }}
  >
    <i class="ri-delete-bin-fill"></i>
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default TableData;