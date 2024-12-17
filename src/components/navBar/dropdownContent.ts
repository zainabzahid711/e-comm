export type DropdownCategory = {
  title: string;
  description: string;
};

const dropdownContent: Record<string, DropdownCategory[]> = {
  "By Style": [
    {
      title: "Casual Watches",
      description: "Everyday designs suitable for daily wear.",
    },
    {
      title: "Dress Watches",
      description: "Sleek and elegant, ideal for formal occasions.",
    },
    {
      title: "Sports Watches",
      description:
        "Rugged, durable, and often equipped with features like water resistance and stopwatch.",
    },
    {
      title: "Luxury Watches",
      description:
        "High-end, premium-quality timepieces featuring sophisticated designs and materials.",
    },
    {
      title: "Smart Watches",
      description:
        "Technology-driven watches with features like fitness tracking, notifications, and apps.",
    },
  ],
  "By Functionality": [
    {
      title: "Chronograph Watches",
      description: "Watches with stopwatch functions.",
    },
    {
      title: "Diver's Watches",
      description:
        "Water-resistant watches with features designed for underwater use.",
    },
    {
      title: "Pilot Watches",
      description: "Inspired by aviation, often with large, legible dials.",
    },
    {
      title: "Solar-Powered Watches",
      description: "Environmentally friendly watches powered by sunlight.",
    },
    {
      title: "Skeleton Watches",
      description: "Featuring visible inner mechanics for an artistic flair.",
    },
  ],
  "By Material": [
    {
      title: "Metal Watches",
      description: "Stainless steel, titanium, or precious metals like gold.",
    },
    {
      title: "Leather Strap Watches",
      description: "Sophisticated and timeless.",
    },
    {
      title: "Silicone/Rubber Watches",
      description: "Comfortable and sporty.",
    },
    { title: "Ceramic Watches", description: "Scratch-resistant and modern." },
    {
      title: "Wooden Watches",
      description: "Eco-friendly and unique designs.",
    },
  ],
  "By Audience": [
    { title: "Men's Watches", description: "Robust and masculine designs." },
    {
      title: "Women's Watches",
      description: "Elegant and often embellished with decorative elements.",
    },
    { title: "Unisex Watches", description: "Gender-neutral designs." },
    { title: "Kids' Watches", description: "Colorful, fun, and often themed." },
  ],
  "By Price Range": [
    { title: "Affordable Watches", description: "Budget-friendly options." },
    { title: "Mid-Range Watches", description: "Balancing quality and cost." },
    { title: "Premium Watches", description: "Luxury yet accessible." },
    {
      title: "High-End Watches",
      description: "Exclusively premium brands and designs.",
    },
  ],
  "By Design Theme": [
    {
      title: "Minimalist Watches",
      description: "Clean, simple, and understated.",
    },
    {
      title: "Vintage/Retro Watches",
      description: "Classic designs reminiscent of past eras.",
    },
    { title: "Modern Watches", description: "Sleek and contemporary." },
    {
      title: "Themed Watches",
      description: "Movie-inspired, character-branded, or artistic designs.",
    },
  ],
};

export default dropdownContent;
