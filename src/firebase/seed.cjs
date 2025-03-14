const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
require("dotenv").config();
import { db } from "./config";

console.log("API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyCm-0jhXMhZFYa6DVEFtZ28rPGlYgtCuCE",
  authDomain: "farochron-b8de9.firebaseapp.com",
  projectId: "farochron-b8de9",
  storageBucket: "farochron-b8de9.appspot.com",
  messagingSenderId: "378284856303",
  appId: "1:378284856303:web:86991ce3edf0e8c0b69c1a",
  measurementId: "G-F91KWZSNSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth();

// Example product data
const products = [
  {
    name: "Apple AirPods Max Wireless",
    brandName: "Apple",
    isAvailable: true,
    price: 445,
    images: {
      primary: "https://m.media-amazon.com/images/I/715izx6g41L._AC_SX466_.jpg",
      hover: [
        "https://m.media-amazon.com/images/I/716QjZYRBAL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/61oBReU24LL._AC_SX466_.jpg",
      ],
      additional: [
        "https://m.media-amazon.com/images/I/71OY9QJu6qL._AC_SX466_.jpg",
      ],
    },
    specifications: {
      ModelName: "AirPodsMax",
      strapOptions: ["Leather", "Steel"],
      ControlMethod: "Touch, Voice",
      ControllerType: "Button, Siri",
      BatteryLife: "20 Hours",
      ItemWeight: "2.44 pounds",
      ASIN: "B0DGJC52FP",
      Itemmodelnumber: "MWW43AM/A",
      Batteries: "Lithium Ion batteries required",
      DateFirstAvailable: "September 9, 2024",
    },
    meta: {
      tags: ["luxury", "minimalist"],
    },
  },
  {
    name: "Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth",
    brandName: "Sony",
    isAvailable: true,
    price: 148, // Replace with the exact price from Amazon, if required
    images: {
      primary:
        "https://m.media-amazon.com/images/I/81Cr+IwVTxL._AC_SL1500_.jpg",
      hover: [
        "https://m.media-amazon.com/images/I/91+gvPcoz2L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81Cz6p5m+uL._AC_SL1500_.jpg",
      ],
      additional: [
        "https://m.media-amazon.com/images/I/61E0CuUauWL._AC_SL1500_.jpg",
      ],
    },
    specifications: {
      material: "Plastic and Metal",
      strapOptions: ["Adjustable Headband"],
      ControlMethod: "Touch, Voice",
      ControllerType: "Button, Siri, Alexa",
      BatteryLife: "35 Hours",
      NoiseCancellation: "Active Noise Canceling",
      Microphone: "Built-In Microphone",
      Weight: "6.9 ounces",
      DateFirstAvailable: "February 15, 2023",
    },
    meta: {
      tags: ["wireless", "noise-canceling", "Bluetooth"],
      launchDate: "2023-02-15",
      popularity: 500,
    },
  },
  {
    name: "Wireless Bluetooth Headphones, Active Noise Cancelling Waterproof",
    brandName: "Unknown", // Replace with brand name if available
    isAvailable: true,
    price: 69.99, // Replace with the exact price from Amazon, if required
    images: {
      primary:
        "https://m.media-amazon.com/images/I/71RJgsfZ3bL._AC_SL1500_.jpg",
      hover: [
        "https://m.media-amazon.com/images/I/71sNjbD6pQL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61tGLok5TCL._AC_SL1500_.jpg",
      ],
      additional: [
        "https://m.media-amazon.com/images/I/71l-lkX5zQL._AC_SL1500_.jpg",
      ],
    },
    specifications: {
      material: "Plastic",
      strapOptions: ["Adjustable"],
      ControlMethod: "Touch, Voice",
      ControllerType: "Button, Voice Assistant",
      BatteryLife: "30 Hours",
      NoiseCancellation: "Active Noise Cancelling",
      Waterproof: "IPX7 Waterproof",
      Weight: "5.6 ounces",
      DateFirstAvailable: "October 22, 2023",
    },
    meta: {
      tags: ["wireless", "Bluetooth", "noise-canceling", "waterproof"],
      launchDate: "2023-10-22",
      popularity: 300,
    },
  },
  {
    name: "All-Purpose Stainless Steel Squeegee for Windows, Mirrors & Household",
    brandName: "Unknown", // Replace with brand name if available
    isAvailable: true,
    price: 12.99, // Replace with the exact price from Amazon, if required
    images: {
      primary:
        "https://m.media-amazon.com/images/I/71VlkcdCUwL._AC_SL1500_.jpg",
      hover: [
        "https://m.media-amazon.com/images/I/71X0JzTOdLL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81NJKwDTd0L._AC_SL1500_.jpg",
      ],
      additional: [
        "https://m.media-amazon.com/images/I/81v66yN8wML._AC_SL1500_.jpg",
      ],
    },
    specifications: {
      material: "Stainless Steel",
      size: "12 inches",
      weight: "0.4 pounds",
      uses: ["Window Cleaning", "Mirror Cleaning", "Household Cleaning"],
      design: "Ergonomic Handle for Comfort",
      DateFirstAvailable: "November 5, 2023",
    },
    meta: {
      tags: ["home", "cleaning", "stainless steel", "squeegee"],
      launchDate: "2023-11-05",
      popularity: 150,
    },
  },
  {
    name: "Betanull Bristle Crevice Cleaning Brush for Home & Car",
    brandName: "Betanull", // Brand name obtained from the product page
    isAvailable: true,
    price: 10.99, // Replace with the actual price from Amazon if needed
    images: {
      primary:
        "https://m.media-amazon.com/images/I/71u0kDa-mQL._AC_SL1500_.jpg",
      hover: [
        "https://m.media-amazon.com/images/I/71w4tiK2DQL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71lFScOpi3L._AC_SL1500_.jpg",
      ],
      additional: [
        "https://m.media-amazon.com/images/I/71JlPLAXcnL._AC_SL1500_.jpg",
      ],
    },
    specifications: {
      material: "Plastic, Bristles",
      size: "11 inches",
      weight: "0.25 pounds",
      uses: ["Home Cleaning", "Car Cleaning", "Hard-to-Reach Areas"],
      design: "Ergonomic Handle for Comfort",
      DateFirstAvailable: "September 10, 2023",
    },
    meta: {
      tags: ["cleaning", "brush", "home", "car", "ergonomic"],
      launchDate: "2023-09-10",
      popularity: 120,
    },
  },
  {
    name: "Portable Handheld Steamer for Clothes",
    brandName: "Generic", // No brand name provided in the link, so 'Generic' is used
    isAvailable: true,
    price: 39.99, // Replace with the actual price from Amazon if needed
    images: {
      primary:
        "https://m.media-amazon.com/images/I/61+8m0bfZzL._AC_SL1500_.jpg",
      hover: [
        "https://m.media-amazon.com/images/I/61X7mkvpEtL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61dkOpBimfL._AC_SL1500_.jpg",
      ],
      additional: [
        "https://m.media-amazon.com/images/I/61xn9GV9HqL._AC_SL1500_.jpg",
      ],
    },
    specifications: {
      material: "Plastic, Stainless Steel",
      size: "11 x 4 x 4 inches",
      weight: "1.2 pounds",
      power: "1200W",
      waterTankCapacity: "180 ml",
      steamTime: "15-20 minutes",
      DateFirstAvailable: "October 1, 2023",
    },
    meta: {
      tags: ["home", "clothes", "steamer", "portable"],
      launchDate: "2023-10-01",
      popularity: 150,
    },
  },
  {
    name: "Miortior Corner Floor Lamp",
    brandName: "Miortior", // From the product page
    isAvailable: true,
    price: 49.99, // Replace with the actual price from Amazon if needed
    images: {
      primary:
        "https://m.media-amazon.com/images/I/71GbNjI0TLL._AC_SL1500_.jpg",
      hover: [
        "https://m.media-amazon.com/images/I/71RFEdfI+fL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71y4Zf0xIUL._AC_SL1500_.jpg",
      ],
      additional: [
        "https://m.media-amazon.com/images/I/81HgR5wRhAL._AC_SL1500_.jpg",
      ],
    },
    specifications: {
      material: "Metal, Plastic",
      color: "Black",
      dimensions: "5.5 x 5.5 x 60 inches",
      weight: "3.7 pounds",
      bulbType: "LED",
      lightColor: "Warm White",
      power: "30W",
      DateFirstAvailable: "July 15, 2023",
    },
    meta: {
      tags: ["home", "lamp", "floor lamp", "decor"],
      launchDate: "2023-07-15",
      popularity: 120,
    },
  },
  {
    name: "JOOFO Torchiere Floor Lamp",
    brandName: "JOOFO", // From the product page
    isAvailable: true,
    price: 79.99, // Replace with the actual price from Amazon if needed
    images: {
      primary:
        "https://m.media-amazon.com/images/I/71jv3A5s8lL._AC_SL1500_.jpg",
      hover: [
        "https://m.media-amazon.com/images/I/71tp4wTY9bL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51LU6B4f-XL._AC_SL1500_.jpg",
      ],
      additional: [
        "https://m.media-amazon.com/images/I/61FZcSY2xaL._AC_SL1500_.jpg",
      ],
    },
    specifications: {
      material: "Metal, Plastic",
      color: "Black",
      dimensions: "12 x 12 x 71 inches",
      weight: "8.2 pounds",
      bulbType: "LED",
      lightColor: "Warm White",
      power: "30W",
      DateFirstAvailable: "November 20, 2019",
    },
    meta: {
      tags: ["home", "lamp", "floor lamp", "decor"],
      launchDate: "2019-11-20",
      popularity: 150,
    },
  },
  {
    name: "DORESshop Dimmable Nightlight",
    brandName: "DORESshop", // From the product page
    isAvailable: true,
    price: 18.99, // Replace with the actual price from Amazon if needed
    images: {
      primary:
        "https://m.media-amazon.com/images/I/61RQmH0cL1L._AC_SL1500_.jpg",
      hover: [
        "https://m.media-amazon.com/images/I/61ZtHhQDp5L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61OwIAyCmML._AC_SL1500_.jpg",
      ],
      additional: [
        "https://m.media-amazon.com/images/I/61y-NzXqMwL._AC_SL1500_.jpg",
      ],
    },
    specifications: {
      material: "Plastic",
      color: "White",
      dimensions: "3.9 x 3.9 x 6.3 inches",
      weight: "0.4 pounds",
      bulbType: "LED",
      brightness: "Adjustable",
      power: "5W",
      DateFirstAvailable: "May 15, 2021",
    },
    meta: {
      tags: ["home", "nightlight", "dimmable", "decor"],
      launchDate: "2021-05-15",
      popularity: 120,
    },
  },
];

// Authenticate the user
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User logged in:", userCredential.user);
    return true;
  } catch (error) {
    console.error("Error logging in:", error.message);
    return false;
  }
};

// Add products to Firestore
const addProducts = async () => {
  const isAuthenticated = await loginUser("firebase@gmail.com", "pak098");

  if (isAuthenticated) {
    try {
      const productsCollection = collection(db, "products");

      for (const product of products) {
        // Format the price of each product to USD
        if (typeof product.price !== "number") {
          console.error(`Invalid price for product ${product.name}`);
          continue; // Skip this product if price is invalid
        }

        // Validate images
        if (!product.images || !Array.isArray(product.images.hover)) {
          console.error(`Invalid images for product ${product.name}`);
          continue; // Skip this product if images are invalid
        }

        // Add date conversion for DateFirstAvailable if needed
        if (product.specifications.DateFirstAvailable) {
          product.specifications.DateFirstAvailable = new Date(
            product.specifications.DateFirstAvailable
          );
        }

        // Log product data before adding
        console.log("Adding product:", product);

        // const formattedPrice = new Intl.NumberFormat("en-US", {
        //   style: "currency",
        //   currency: "USD",
        // }).format(product.price);

        // Update the product with the formatted price
        // const productWithFormattedPrice = {
        //   ...product,
        //   price: product.price,
        // };
        const cleanProduct = JSON.parse(JSON.stringify(product));

        //add each product to firestore
        await addDoc(productsCollection, cleanProduct);
        console.log(`Product ${product.name} added to Firestore.`);
      }
    } catch (error) {
      console.error("Error adding products:", error);
    }
  }
};

addProducts();
