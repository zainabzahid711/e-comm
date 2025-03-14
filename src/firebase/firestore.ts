import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { db, app } from "./config"; // Import your Firebase app configuration

// Initialize Firestore
// const db = getFirestore(app);

// Function to add a product
export const addProduct = async (product: any) => {
  try {
    // Generate an auto-ID document
    const newDocRef = doc(collection(db, "products"));

    // Add the product data
    await setDoc(newDocRef, product);

    console.log("Product added successfully with ID:", newDocRef.id);
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};
// Fetch all products
export const fetchProducts = async () => {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Update a product
export const updateProduct = async (productId: string, updatedData: any) => {
  try {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, updatedData);
    console.log("Product updated successfully");
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

// Delete a product
export const deleteProduct = async (productId: string) => {
  try {
    const productRef = doc(db, "products", productId);
    await deleteDoc(productRef);
    console.log("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
