export type DropdownCategory = {
  title: string;
  description: string;
};
const dropdownContent: Record<string, DropdownCategory[]> = {
  "Home Accessories": [
    {
      title: "Cleaning Brush for Home",
      description:
        "A stylish and functional tool, perfect for maintaining a clean and sophisticated living space.",
    },
    {
      title: "Stainless Steel Squeegee",
      description:
        "Durable and practical, built to withstand tough conditions and resist rust.",
    },
  ],
  "Home Decor": [
    {
      title: "Lamps",
      description:
        "Beautifully designed lighting to enhance any room with elegance and warmth.",
    },
    {
      title: "Flowery Plants",
      description:
        "Vibrant plants that bring life and color to your home decor.",
    },
    {
      title: "Photo frames",
      description:
        "Stylish frames that add a personal touch to your living space.",
    },
    {
      title: "Vases",
      description:
        "Eco-conscious designs to hold your favorite flowers or greenery.",
    },
  ],
  Electronics: [
    {
      title: "Wireless earbuds",
      description: "High-quality sound and comfort, perfect for all-day wear.",
    },
    {
      title: "digital watches",
      description: "Modern timepieces with sleek designs for any occasion.",
    },
    {
      title: "airpods",
      description:
        "Premium earphones that offer ultimate comfort and superior sound quality.",
    },
    {
      title: "Tablets",
      description:
        "Innovative, eco-friendly devices with advanced functionality for everyday use.",
    },
  ],
  Discover: [
    {
      title: "Affordable Accessories",
      description:
        "Budget-friendly accessories that don’t compromise on style.",
    },
    {
      title: "Men",
      description:
        "Fashion-forward and functional items designed for the modern man.",
    },
    {
      title: "Women",
      description:
        "Elegant and practical options that cater to every woman’s lifestyle.",
    },
  ],
  Clothing: [
    {
      title: "Men",
      description:
        "Timeless and versatile clothing that complements a wide range of styles.",
    },
    {
      title: "Women",
      description:
        "Chic designs that blend modern fashion with classic influences.",
    },
    {
      title: "Shoes",
      description: "Trendy footwear that balances style with comfort.",
    },
    {
      title: "Scavers", //scarfs/mufflers
      description:
        "Cozy scarves and mufflers with designs inspired by popular culture and unique art.",
    },
  ],
};

export default dropdownContent;
