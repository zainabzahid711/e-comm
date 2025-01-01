import { useState } from "react";
import { addProduct } from "../firebase/firestore";

const AddProductPage = () => {
  // State to store product data
  const [product, setProduct] = useState({
    name: "",
    brandName: "",
    isAvailable: true,
    price: "",
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    try {
      const formattedProduct = {
        ...product,
        price: parseInt(product.price), // Convert price to a number
      };
      await addProduct(formattedProduct);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. See console for details.");
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Add a New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Brand Name:
          <input
            type="text"
            name="brandName"
            value={product.brandName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
