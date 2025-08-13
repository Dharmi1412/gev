import React, { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import axios from "axios";
import "./add.css";
import { toast } from "react-toastify";

export default function Add() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadedImageURLs, setUploadedImageURLs] = useState([]);
  const [formData, setFormData] = useState({
    ProductName: "",
    price: "",
    speed: "",

    range: "",
    waitingperiod: "",
  });
  useEffect(() => {
    console.log(selectedImages);
    console.log(formData);
  }, [selectedImages, formData]);

  // Handle input fields
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file select + preview
  const handleImageSelect = async (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);

    // console.log(process.env.VITE_CLOUD_NAME);
    const cloudName = import.meta.env.VITE_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUD_PRESET;

    for (let file of files) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", uploadPreset);
      data.append("folder", "products");

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data
      );

      setUploadedImageURLs((prev) => [...prev, res.data.secure_url]);
    }
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    console.log("Adding ");
    e.preventDefault();

    const product = {
      ...formData,
      image: uploadedImageURLs,
    };
    console.log(product);
    console.log("base", import.meta.env.VITE_BASE_URL);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}api/product/add`,
        product
      );
      toast.success("Product added successfully!");
      console.log(res.data);
      console.log("Adding done ");
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error(`error adding product`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-product">
        <div className="add-product-text">
          <h5>ADD+</h5>
        </div>

        <div className="add-product-div">
          <div className="add-image">
            {[...Array(5)].map((_, i) => (
              <label key={i} htmlFor={`image${i}`} className="addons">
                {uploadedImageURLs[i] ? (
                  <img
                    className="uploaded-product-img"
                    src={uploadedImageURLs[i]}
                    alt="sdf"
                  />
                ) : (
                  <>
                    <IoAddOutline />
                    <input
                      type="file"
                      id={`image${i}`}
                      hidden
                      onChange={handleImageSelect}
                      accept="image/*"
                    />
                  </>
                )}
              </label>
            ))}
          </div>

          <div>
            <label htmlFor="image" className="addons2">
              {uploadedImageURLs[0] ? (
                <img
                  className="uploaded-product-img"
                  src={uploadedImageURLs[0]}
                  alt="asdf"
                />
              ) : (
                <>
                  {/* <IoAddOutline />
                  <input type="file" name="image" id="image" hidden />{" "} */}
                </>
              )}
            </label>
          </div>

          <div className="detail-div">
            <label>Product Id</label>
            <input
              type="number"
              name="ProductId"
              onChange={handleInputChange}
            />

            {["ProductName", "price", "speed", "range", "waitingperiod"].map(
              (field) => (
                <div key={field}>
                  <label>{field.toUpperCase()}</label>
                  <input
                    type="text"
                    name={field}
                    onChange={handleInputChange}
                  />
                </div>
              )
            )}

            <button type="submit">ADD</button>
          </div>
        </div>
      </div>
    </form>
  );
}
