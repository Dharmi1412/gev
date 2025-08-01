import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GrUpdate } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";

import "./list.css";
import { toast } from "react-toastify";
export default function List() {
  const [product, setProduct] = useState([]);
  const removeProduct = (productId) => {
    // console.log(productId);
    try {
      axios.delete(
        `${import.meta.env.VITE_BASE_URL}api/product/delete/${productId}`
      );
      // alert("Product deleted ");
      toast.success("Product deleted ")
      fetchData();
    } catch (error) {
      console.error("Deletion failed:", error);
      toast.error("error deleting product ")
      // alert(`error deleting product`);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/product/list`
      );
      toast.success("Product listed ")
      // alert("Product listed successfully!");
      console.log(res.data.products);
      setProduct(res.data.products);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("error adding product ")
      // alert(`error adding product`);
    }
  };

  useEffect(() => {
    fetchData();
    // console.log("useeffect ");
  }, []);
  return (
    <div className="list-main-wrapper">
      {product.map((elem, index) => {
        return (
          <div className="product-row" key={index}>
            <div className="product-main-img">
              <img src={elem.image[0]} alt={elem.productName} />
            </div>

            <div className="prodct-name product-fields">
              <span className="row-lable">product name</span>
              <span className="row-value">{elem.ProductName}</span>
            </div>

            <div className="product-price product-fields">
              <span className="row-lable">price</span>
              <span className="row-value">
                <LiaRupeeSignSolid />
                {elem.price}
              </span>
            </div>

            <div className="product-range product-fields">
              <span className="row-lable">range</span>
              <span className="row-value">{elem.range}</span>
            </div>

            <div className="product-speed product-fields">
              <span className="row-lable">speed</span>
              <span className="row-value">{elem.speed}</span>
            </div>

            <div className="product-waiting-time product-fields">
              <span className="row-lable">waiting time</span>
              <span className="row-value">{elem.waitingperiod}</span>
            </div>

            <div className="product-action product-fields">
              <Link to={`/update/${elem.ProductId}`}>
                <GrUpdate />
              </Link>
              <div onClick={() => removeProduct(elem.ProductId)}>
                <CiCircleRemove />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
