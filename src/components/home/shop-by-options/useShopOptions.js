import React from "react";

const useShopOptions = () => {
  const shopByPrice = [
    {
      id: 1,
      priceRanges: "Below Rs. 15,000",
    },
    {
      id: 2,
      priceRanges: "Rs. 15,000 - Rs. 25,000",
    },
    {
      id: 3,
      priceRanges: "Rs. 25,000 - Rs. 40,000",
    },
    {
      id: 4,
      priceRanges: "Rs. 40,000 - Rs. 60,000",
    },
    {
      id: 5,
      priceRanges: "Rs. 60,000 - Rs. 80,000",
    },
    {
      id: 6,
      priceRanges: "Rs. 80,000 - Rs. 100,000",
    },
    {
      id: 7,
      priceRanges: "Rs. 100,000 - Rs. 150,000",
    },
    {
      id: 8,
      priceRanges: "Above 150,000",
    },
  ];

  const ShopByBrand = [
    {
      id: 1,
      image: "https://static.priceoye.pk/images/brands/svg/samsung.svg",
      title: "Samsung ",
    },
    {
      id: 2,
      image: "https://static.priceoye.pk/images/brands/svg/infinix.svg",
      title: "Infinix ",
    },
    {
      id: 3,
      image: "https://static.priceoye.pk/images/brands/svg/oppo.svg",
      title: "OPPO ",
    },
    {
      id: 4,
      image: "	https://static.priceoye.pk/images/brands/svg/xiaomi.svg",
      title: "Xiaomi ",
    },
    {
      id: 5,
      image: "	https://static.priceoye.pk/images/brands/svg/vivo.svg",
      title: "Vivo ",
    },
    {
      id: 6,
      image: "https://static.priceoye.pk/images/brands/svg/tecno.svg",
      title: "Tecno ",
    },
    {
      id: 7,
      image: "	https://static.priceoye.pk/images/brands/svg/realme.svg",
      title: "Realme ",
    },
    {
      id: 8,
      image: "	https://static.priceoye.pk/images/brands/svg/itel.svg",
      title: "itel ",
    },
    {
      id: 9,
      image: "	https://static.priceoye.pk/images/brands/svg/apple.svg",
      title: "Apple ",
    },
    {
      id: 10,
      image: "	https://static.priceoye.pk/images/brands/svg/nokia.svg",
      title: "Nokia ",
    },
  ];

  return { ShopByBrand, shopByPrice };
};

export default useShopOptions;
