interface MenuItem {
  title: string;
  href?: string;
}

interface DropdownCategory {
  title: string;
  items: MenuItem[];
  imageUrl?: string; // Add imageUrl for each category
}

const dropdownContent: Record<string, DropdownCategory[]> = {
  Men: [
    {
      title: "Clothing",
      items: [{ title: "Shirts" }, { title: "Trousers" }, { title: "Jackets" }],
      imageUrl:
        "https://www.amazon.com/Hanes-EcoSmart-Fleece-Sweatshirt-Stonewashed/dp/B072QRN7HR/ref=sr_1_4?crid=2YP1ABWNMVQ8K&dib=eyJ2IjoiMSJ9.9nryq2xhF-jQVA6A6cPH4nr38Z9t4IypFVJYJg5f3zkgqBqXjqMlBuYG81PH-BjEd4Q40F3ndA-ctmKoP0vz3ul2LV0OH6IOZ3PJXaWPxVZl9ET2eEBL998inZ6V5KINDo94GMt5umcbML6qNak1nT6NwTNsEHw9Xg54i5w8PVW9WsIj56atKcIn9nNOJjc6UQ4bjZ2hXchcKXGiNzdyD82tabrmIiXMrAMO321EK5yPYtjDu9JFAlWiiGHO2Q_w2TQeZK_o1JeyGZ2OpVovASouOLToyy0B46HRNKotFZEGWtvJrpFzYPuj27tCryODkK87fFmriLQzYjA--0dSrxDtwrP2te9QpWuSq37X_pNHp-hRE-VW4qe9KEz4v-Fw_MiIMlO_K_O98aDA0IOMFHzJnnX7aK6mI4kigxMaqlOyCk3NHfLMwgFdj5xSkE3-.iLpqaEA-GVT-t1sdNZJN1M72dWiR9Uv1C6WGqxIAwQA&dib_tag=se&keywords=men+clothing&qid=1740311228&sprefix=men+clothe%2Caps%2C514&sr=8-4", // Placeholder image
    },
    {
      title: "Shoes",
      items: [{ title: "Sneakers" }, { title: "Boots" }, { title: "Sandals" }],
      imageUrl:
        "https://www.amazon.com/Skechers-Mens-Cessnock-Shoe-Black/dp/B07FBKFTJG/ref=sr_1_28?crid=238P8RIUL4T75&dib=eyJ2IjoiMSJ9.4jH35qvouPwTrQ0hCcNXrkQspozqiHMlDzr26evzyXM-nRrRlmxMBNGadnj5EzcDnHG5bsgnSMCsjDqMQduq92o-c_yv9nUvGzprCrY4dok8uqTmW6QFsUiv6osrwurrAg9wjzb1Fsw8Buh-kemcrX5f1I8ZbHVn1-xh7iYV5R9Sicy_1v9J1dwC0Ej54W--aUeGrNEXFD-UHcMqP1SHynqW8dNLJeqHXcU0LT8ka75w9EFgeMjhOaUm4c-3qAkc_aAT-F0Kg4qgKh8i5XxqF3gXmyGF3yar1j9t_yWkbBfkvIi7Sp0UQbnvcUdvVv2bY8obubqtxkw2Xi5Yp5Knt7YUtS66PzNni4KHfXrP8Mzp0oJEYtBFhxJA7kZJTUWTJQK2-v37bUAcnsHKXOtwS7L8_4gSRrX5A7urBGrwNZDFIqEBw8D1g9wewwyjWoMS.ybhTanPNT-RSBhihgbQeKbQHXGISdfWabAIh17zN8zM&dib_tag=se&keywords=men+shoes&qid=1740312744&sprefix=men+shoes%2Caps%2C631&sr=8-28",
    },
    {
      title: "Accessories",
      items: [
        { title: "Watches" },
        { title: "Belts" },
        { title: "Sunglasses" },
      ],
      imageUrl:
        "https://www.amazon.com/RUNBOX-Wallet-Capacity-Blocking-Bifold/dp/B09M3Z63QP/ref=sr_1_1?crid=2BUUQHAS74Q94&dib=eyJ2IjoiMSJ9.36HNQQcxBrunwuyZ-K-LBn55MKPwyW0kTXp-_LKK4kp7ZjhM62jJhkf6xoykhHeig3Eqdy9Smy4fgoXjy6PMYcIzhQdGebiP-DobkZlPK2Zm8AscVXiKbmZaT4rSj7yRYJfjt4X4B_WXClLdP2qeC_x2ZqY4fZ_28y2HOn56IdDPhMR21C8QirOOByU22UNaGNPrfrF7-8Pc3ae_xjuUL41devGqSfz38a8p_swqNuX6eAOmFIka_IU2wjXX42S4J_RmioGy3bohZT5kkaHpCDFEqCP3Rvq1HyscatHj0jE6alMB9jViL2vkI-8-xI2gesXoy6LKcjwkMg_k2RfR-hPjpsepv-Fqrkl4IWFBKEHzTjZiKWb9ji0wNWTwLd-uVvQVwDPJSGBplwHLrBUnqD8hdTFn9vJR17ZJuiGIP0ZtXvqlZ4RlivkmVoZYRKCN.xgEsQxjuvqHQ_YcQP6RwmhEfsmPrg0L-yRvVD2OtrCQ&dib_tag=se&keywords=men+wallet&qid=1740312893&sprefix=men+wallet%2Caps%2C624&sr=8-1", // Placeholder image
    },
  ],
  Women: [
    {
      title: "Clothing",
      items: [{ title: "Dresses" }, { title: "Tops" }, { title: "Skirts" }],
      imageUrl:
        "https://www.amazon.com/SAMPEEL-Clothes-Vacation-Matching-Clothing/dp/B0CWNZWQ5L/ref=sr_1_2?crid=3C34OB8PZ1QRC&dib=eyJ2IjoiMSJ9.cIUIDrhgJPEm_87RsJi_seV0_EXT5QZv5no-cTwsZOe3fpcxXhNP7pA9dsbHmO4BBAs6cP_tSf5H5WqlKRaHiSP6YTuxDdZqkGccqKy2fiL6ZbeSbVPnghZTulaStzX-aLHnrQSJGTlli8im1bWHxSwmCVizC5q99quNO25w6yIn8GuSphfYeS2OT30Dq-PIsbRrzFNxDzagG4oRAzkLF4QWFfkTHHDvjvqVg5Okruf2zxRuGmlZowliko96X-wfRSrIZJk9tUXePzD6wJ0D0eP1GYQOdwzrZbxe0a9vN93jYDMvtJppIMdThpeCOGztsGtW9oCjazltqA3-n8tDfPHBfVuDPS2GoTqYL7Vd8WCQc282vlQ8LeNsvLK7wZSrmxTPRhq04-UPmfQA4NBftjRzeiwXJpeQj9Eft_OQLEsrryyvfWkvnIKi4i-cwpmu.6dMh_e4lV7uIkZ3V35TfQ4KHRkleD1RR_J39BcWqtEA&dib_tag=se&keywords=women+clothing+set&qid=1740312927&sprefix=women+clothng%2Caps%2C426&sr=8-2", // Placeholder image
    },
    {
      title: "Shoes",
      items: [{ title: "Heels" }, { title: "Flats" }, { title: "Boots" }],
      imageUrl:
        "https://www.amazon.com/Skechers-Performance-Womens-Walking-white/dp/B071GB2K21/ref=sr_1_24?crid=124PSIYVX1PQT&dib=eyJ2IjoiMSJ9.zBzAwcuZPmhw1QXAWx4ICjgayfNbtUz8-bY9e4CNIRN5orDMNx6Dr1WRKVi6vIKE7SRHQ6xIzMhEfS8kGKeAhSC0fy4lmgoJ7QqzHUO_Lyad-hR1fRpVpH0CURWOUUc59O7XhV9_oV3ZPhlR7_r2SFOHTJwPSaSUc3SuOHid1wwRnh9odCwy9RBOR_qaaFErFsBBnJKNEGDcvDyesD6gknPEhlzoCopSQl7Wjmr0NJlIsfQ5TrBYKdep9uQI-Tw602-rOBmj-a45c6QQrgjGCX81Vto5E3OfdcjDwzHqnUUXAnfXuU6gLMy-SRU9RcsRnGgNZ9rTBEWnJIyA15zr8YOEC27v_t54S9nNPKb1UPen_NwInVdAZVQgIRm93zLJJ0VcMWGY7lWZBeNvc8LitINvWypdSX0uaazqb0YFurq7Rkl8eelhyTkKyKGydm5c.uU-2W8TzbqRGqpo2wPRo3q5Cms1kswBBz0QEATaG_Ek&dib_tag=se&keywords=women+shoes&qid=1740312957&sprefix=women+shoe%2Caps%2C446&sr=8-24", // Placeholder image
    },
    {
      title: "Accessories",
      items: [{ title: "Bags" }, { title: "Jewelry" }, { title: "Scarves" }],
      imageUrl:
        "https://www.amazon.com/Tewiky-Necklace-Layered-Necklaces-Solitaire/dp/B09Q33WGZW/ref=sr_1_16?crid=1MCOUS8AXBT44&dib=eyJ2IjoiMSJ9.F5Qt2SNmNwNq4zWJXuAhKg2un4WeAWGagLwT8TEjvkATDy9x9jq1StXPahvzz6hvfRNXuGFfJ-1FTP2BY2WYRN8tTncN_GgMgkCj2SyfBW-RyIwrZkzW1l7czCRlzOk06j-C153b7BsV2Au2_5LMFhyDrUVGrp_OlTW-kEBNON94mVG8kT2NtvV8LOaLEbJxnL15rRFfg1Z7OeLY5qM0qHJVFF6CGvtVHlmWoQb4_RI2Sh6CmOtF633RXvgDeOQ65GYNjzRUANfDsk9PgQHqpD0t1BOWNUMJOOdV8XftUVCiBIqmYagA8idPZ2K2FbYs_l3VPxPHPwk9tXA3Vv0g6naM6Tf7jVGQoNBEWuMkrCWx0PlUed6eNKo6TPkROHBZgADO48g1NmG1wHoQPVEDOSPRcIebZwoGb7fZnebUb59-PxkmIx_HsAiQf02rcPj_.8GVoOQLFXO3WdzUowdu4E_aXW7P4JRniG5yxnAiX3U4&dib_tag=se&keywords=women%27s%2Bjewelry&qid=1740313072&sprefix=women%2Bjewler%2Caps%2C497&sr=8-16&th=1", // Placeholder image
    },
  ],
  Kids: [
    {
      title: "Clothing",
      items: [{ title: "T-Shirts" }, { title: "Shorts" }, { title: "Jackets" }],
      imageUrl:
        "https://www.amazon.com/Amazon-Essentials-Grainge-Unisex-Coverall/dp/B0D9ZHHKR9?ref_=ast_sto_dp&th=1&psc=1", // Placeholder image
    },
    {
      title: "Shoes",
      items: [{ title: "Sneakers" }, { title: "Sandals" }, { title: "Boots" }],
      imageUrl:
        "https://www.amazon.com/adidas-Kaptir-Sneaker-Better-Scarlet/dp/B0BG94Z9VN/ref=sr_1_38?crid=22ITGOKTEZ7PM&dib=eyJ2IjoiMSJ9.Nmx4smuOjOWBaE1YMXZfAO-rzWG1AeO22FlUHWqqRQ8iQwa4O2wIs6SZ840nqbEBxxbcTdYtKsFG1bdvLZbG9AD8q88eWniL6ijV9epxH_NDR6yN5K_eEnIel87h2W70gb1LuLwEdd1NO6rs9O5ICgvKfzCawr_Evk8WH84M-n3oDwT66uQp4zzQj1eKGI4CM0VqSE7z9XrAM0-hxqW3wqT5xb5g6CBy0ua4bVQkQDN65W3bWKf4--L7h0CBoHGuYjQotAhU9pclutMT-JZfBiIUnvPtyHpbJCv4B4o6B024k-taWziDZKRf7hQVg8Cyxasm3Ic4oDspizICHrb2DamwjjZGfBeJvpEztha4DXseJgQ-RrAtCMAoK-TR8lvPv0resJW56bdWLp6rqQplvGPx-Pfow2zvjyTyAMqbwXFxfJFKIsKzQru_O3VozgGD.gVHDDVXcSFEdFbHugxwb9pt3dnlfFF7uhKpGKHLuGV4&dib_tag=se&keywords=kids+shoes&qid=1740314056&sprefix=kids+sho%2Caps%2C526&sr=8-38", // Placeholder image
    },
    {
      title: "Accessories",
      items: [{ title: "Hats" }, { title: "Socks" }, { title: "Backpacks" }],
      imageUrl: "https://via.placeholder.com/150?text=Kids+Accessories", // Placeholder image
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
      imageUrl: "https://via.placeholder.com/150?text=Home+Bedding", // Placeholder image
    },
    {
      title: "Dinning",
      items: [
        { title: "Drinkware" },
        { title: "tableware" },
        { title: "Accessories" },
      ],
      imageUrl: "https://via.placeholder.com/150?text=Home+Dinning", // Placeholder image
    },
    {
      title: "Decor",
      items: [{ title: "Hurricans" }, { title: "Frames" }, { title: "Lamps" }],
      imageUrl: "https://via.placeholder.com/150?text=Home+Decor", // Placeholder image
    },
  ],
};

export default dropdownContent;
