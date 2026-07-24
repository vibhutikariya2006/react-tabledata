import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteData = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      const updatedProducts = products
        .filter((product) => product.id !== Number(id))
        .map((product, index) => ({
          ...product,
          id: index + 1,
        }));

      setProducts(updatedProducts);

      alert("Product deleted successfully!");
    }

    navigate("/");
  }, [id, navigate, products, setProducts]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Deleting Product...</h2>
    </div>
  );
};

export default DeleteData;