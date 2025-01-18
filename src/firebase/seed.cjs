const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
require("dotenv").config();

console.log("API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Example product data
const products = [
  {
    name: "True Square Thinline",
    brandName: "Rado",
    isAvailable: true,
    price: 573000,
    images: {
      primary: "https://example.com/primary-image.jpg",
      hover: [
        "https://example.com/hover1.jpg",
        "https://example.com/hover2.jpg",
      ],
      additional: ["https://example.com/additional1.jpg"],
    },
    specifications: {
      material: "Stainless Steel",
      strapOptions: ["Leather", "Steel"],
      dialShape: "Square",
      size: "40mm",
      waterResistance: "50m",
      movementType: "Quartz",
      features: ["Chronograph", "Luminous Hands"],
    },
    meta: {
      tags: ["luxury", "minimalist"],
      launchDate: "2024-01-01",
      popularity: 100,
    },
  },
  {
    name: "Analog Watch 2024",
    brandName: "Seiko",
    isAvailable: true,
    price: 250000,
    images: {
      primary: "https://example.com/seiko-primary.jpg",
      hover: ["https://example.com/seiko-hover1.jpg"],
      additional: [],
    },
    specifications: {
      material: "Titanium",
      strapOptions: ["Silicon"],
      dialShape: "Round",
      size: "42mm",
      waterResistance: "100m",
      movementType: "Automatic",
      features: ["Date Display"],
    },
    meta: {
      tags: ["sporty", "durable"],
      launchDate: "2023-10-10",
      popularity: 200,
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
        await addDoc(productsCollection, product);
        console.log(`Product ${product.name} added to Firestore.`);
      }
    } catch (error) {
      console.error("Error adding products:", error);
    }
  }
};

addProducts();
