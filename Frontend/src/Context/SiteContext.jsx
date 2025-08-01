import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext(); // ✅ This is your actual context object

const SiteContext = ({ children }) => {
  // const [products, setProducts] = useState(
  //     [{
  //         name: 'Ola S1 Pro (2nd Gen) 4.0',
  //         price: 1.41,
  //         // off: 10,
  //         img: 'https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fvehicle_image%2F2025-03-20-09-03-83-blob&w=384&q=75',
  //         topSpeed: 123,
  //         range: 242,
  //         waiting: 15,
  //     },
  //     {
  //         name: 'Ola S1 Pro (2nd Gen) 4.0',
  //         price: 1.41,
  //         // off: 10,
  //         img: 'https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fvehicle_image%2F2025-03-12-11-03-21-SimpleBlack.jpg&w=1920&q=75',
  //         topSpeed: 123,
  //         range: 242,
  //         waiting: 15,
  //     },
  //     {
  //         name: 'Ola S1 Pro (2nd Gen) 4.0',
  //         price: 1.41,
  //         // off: 10,
  //         img: 'https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fvehicle_image%2Ffd11d13ac5dc5ffe0f6e52ea7f9c4922&w=1920&q=100',
  //         topSpeed: 123,
  //         range: 242,
  //         waiting: 15,
  //     },
  //     {
  //         name: 'Ola S1 Pro (2nd Gen) 4.0',
  //         price: 0.5,
  //         // off: 10,
  //         img: 'https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fvehicle_image%2F3df7de310319eee1dcc5d572c81a3410&w=1920&q=100',
  //         topSpeed: 123,
  //         range: 242,
  //         waiting: 15,
  //     },
  //     {
  //         name: 'Ola S1 Pro (2nd Gen) 4.0',
  //         price: 1.41,
  //         // off: 10,
  //         img: 'https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fvehicle_image%2Fd3feddcc284e22499e93ad064a99a781&w=1920&q=100',
  //         topSpeed: 123,
  //         range: 242,
  //         waiting: 15,
  //     },
  //     ]
  // );

  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/product/list`
      );

      // alert("Product listed successfully!");
      console.log(res.data.products);
      setProducts(res.data.products);
    } catch (error) {
      console.error("Upload failed:", error);
      alert(`error adding product`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const values = {
    products,
    setProducts,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default SiteContext; // ✅ Still export the provider
