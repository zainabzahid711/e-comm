import { getFirestore, doc, setDoc, collection } from "firebase/firestore/lite";
import { app } from "./config"; // Import your Firebase app configuration

// Initialize Firestore
const db = getFirestore(app);

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
