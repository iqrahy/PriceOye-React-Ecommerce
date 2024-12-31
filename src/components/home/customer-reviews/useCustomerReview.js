import React from "react";

const useCustomerReview = () => {
  const reviewImages = [
    {
      id: 1,
      image: "	https://images.priceoye.pk/review/9638/1540415-appbb-270x270.jpg",
    },
    {
      id: 2,
      image: "	https://images.priceoye.pk/review/7714/1513305-it28c-270x270.jpg",
    },
    {
      id: 3,
      image: "https://images.priceoye.pk/review/8826/1529783-gs6hs-270x270.jpg",
    },
    {
      id: 4,
      image: "https://images.priceoye.pk/review/9117/1534328-wjk9k-270x270.jpg",
    },
    {
      id: 5,
      image: "	https://images.priceoye.pk/review/5893/322290-8eci2-270x270.jpg",
    },
    {
      id: 6,
      image: "https://images.priceoye.pk/review/8012/1526730-psv9r-270x270.jpg",
    },
    {
      id: 7,
      image: "https://images.priceoye.pk/review/7764/1535235-j6q7r-270x270.jpg",
    },
    {
      id: 8,
      image:
        "	https://images.priceoye.pk/review/5189/1535244-t9l55-270x270.jpeg",
    },
    {
      id: 9,
      image: "https://images.priceoye.pk/review/9079/1535000-8t7tx-270x270.jpg",
    },
    {
      id: 10,
      image:
        "https://images.priceoye.pk/review/6194/1530552-uz7nx-270x270.jpeg",
    },
  ];

  const review = [
    {
      id: 1,
      reviewerShortName: "SA",
      reviewerFullName: "Shaheer Ashfaq",
      date: "18 December 2024",
      productCondition: "Original Product Brand New 100% Satisfy",
    },
    {
      id: 2,
      reviewerShortName: "JA",
      reviewerFullName: "Junaid Ali",
      date: "19 December 2024",
      productCondition: "Nyc phone..Packing is good.. Recommended",
    },
    {
      id: 3,
      reviewerShortName: "FM",
      reviewerFullName: "Faisal Mahmood",
      date: "17 December 2024",
      productCondition: " Good & recommended",
    },
    {
      id: 4,
      reviewerShortName: "SA",
      reviewerFullName: "Faris Sajjad",
      date: "17 December 2024",
      productCondition: " Good product",
    },
    {
      id: 5,
      reviewerShortName: "RA",
      reviewerFullName: " Rashid Ali",
      date: "18 December 2024",
      productCondition: "Zabardast",
    },
    {
      id: 6,
      reviewerShortName: "SK",
      reviewerFullName: " Saim Khan",
      date: "18 December 2024",
      productCondition: "Thanks price Oye your product is parfact",
    },
  ];

  return { reviewImages, review };
};

export default useCustomerReview;
