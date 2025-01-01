import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { firebaseConfig } from "./firebase/config";
import "dotenv/config";
import { initializeApp } from "firebase/app";

let db;
// Initialize Firestore

try {
  const app = initializeApp(firebaseConfig);
  console.log("Firebase app initialized:", app);
  db = getFirestore(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  throw new Error("failed to initialize firebase app");
}

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

// Function to seed the database
const seedDatabase = async () => {
  try {
    const collectionRef = collection(db, "products");
    for (const product of products) {
      await addDoc(collectionRef, product);
    }
    console.log("Products added successfully!");
  } catch (error) {
    console.error("Error seeding database: ", error);
  }
};

// Run the function
seedDatabase();
