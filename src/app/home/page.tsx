"use client";
// import CardWrapper from "@/src/cart/cardWrapper";
import NavBar from "../../components/navBar/navBar";
import MainCarousal from "@/src/carousal/mainCarousal";
// import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore/lite"; // Correct imports
// import { db } from "../../firebase/config";
// import { Product } from "../../types/productPage";
import CandyStore from "@/src/components/storeSection/candyStore";

const Home = () => {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "products"));
  //       const productsData = querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       })) as Product[];
  //       setProducts(productsData);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);
  return (
    <>
      <NavBar />
      <MainCarousal />
      <CandyStore
        mainText="MORAYNE--Essentials"
        text="Candy Store"
        subtext="A cheerful selection of colorful style..."
      />
    </>
  );
};

export default Home;
