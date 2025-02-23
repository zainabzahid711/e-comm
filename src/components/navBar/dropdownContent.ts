interface MenuItem {
  title: string;
  href?: string;
}

interface DropdownCategory {
  title: string;
  items: MenuItem[];
}

const dropdownContent: Record<string, DropdownCategory[]> = {
  Men: [
    {
      title: "Clothing",
      items: [{ title: "Shirts" }, { title: "Trousers" }, { title: "Jackets" }],
    },
    {
      title: "Shoes",
      items: [{ title: "Sneakers" }, { title: "Boots" }, { title: "Sandals" }],
    },
    {
      title: "Accessories",
      items: [
        { title: "Watches" },
        { title: "Belts" },
        { title: "Sunglasses" },
      ],
    },
  ],
  Women: [
    {
      title: "Clothing",
      items: [{ title: "Dresses" }, { title: "Tops" }, { title: "Skirts" }],
    },
    {
      title: "Shoes",
      items: [{ title: "Heels" }, { title: "Flats" }, { title: "Boots" }],
    },
    {
      title: "Accessories",
      items: [{ title: "Bags" }, { title: "Jewelry" }, { title: "Scarves" }],
    },
  ],
  Kids: [
    {
      title: "Clothing",
      items: [{ title: "T-Shirts" }, { title: "Shorts" }, { title: "Jackets" }],
    },
    {
      title: "Shoes",
      items: [{ title: "Sneakers" }, { title: "Sandals" }, { title: "Boots" }],
    },
    {
      title: "Accessories",
      items: [{ title: "Hats" }, { title: "Socks" }, { title: "Backpacks" }],
    },
  ],
  HomeDecor: [
    {
      title: "Bedding",
      items: [
        { title: "bedding" },
        { title: "Pillows" },
        { title: "pillow cases and shams" },
      ],
    },
    {
      title: "Dinning",
      items: [
        { title: "Drinkware" },
        { title: "tableware" },
        { title: "Accessories" },
      ],
    },
    {
      title: "Decor",
      items: [{ title: "Hurricans" }, { title: "Frames" }, { title: "Lamps" }],
    },
  ],
};

export default dropdownContent;
