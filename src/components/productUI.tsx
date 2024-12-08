import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../lib/store";
import {
  addProduct,
  removeProduct,
  updateProduct,
} from "../lib/features/products/productSlice";

const ProductMng = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.items);

  const handleAddProduct = () => {
    dispatch(addProduct({ id: 1, name: "Sample Product", price: 99.99 }));
  };

  const handleRemoveProduct = (id: number) => {
    dispatch(removeProduct(id));
  };

  const handleUpdateProduct = () => {
    dispatch(
      updateProduct({
        id: 1,
        name: "Updated Product",
        price: 79.99,
        quantity: 2,
      })
    );
  };

  return (
    <div>
      <h1>Product Management (Cart)</h1>
      <button onClick={handleAddProduct}>Add Sample Product</button>
      <button onClick={handleUpdateProduct}>Update Sample Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} * {product.quantity}
            <div>
              <button onClick={() => handleAddProduct()}>+1</button>
              <button onClick={() => handleRemoveProduct(product.id)}>
                -1
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductMng;
