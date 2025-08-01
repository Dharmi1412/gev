import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import axios from "axios";
import "./update.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Update() {
  const { id } = useParams();

  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadedImageURLs, setUploadedImageURLs] = useState([]);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ProductId: -1,
    ProductName: "",
    price: "",
    speed: "",
    range: "",
    waitingperiod: "",
  });
  const inputFields = [
    { name: "ProductId", label: "", type: "hidden" },
    { name: "ProductName", label: "Product Name", type: "text" },
    { name: "price", label: "Price", type: "text" },
    { name: "speed", label: "Speed", type: "text" },
    { name: "range", label: "Range", type: "text" },
    { name: "waitingperiod", label: "Waiting Period", type: "text" },
  ];
  const fetchData = async (productId) => {
    try {
      const productData = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/product/${productId}`
      );

      const singleProduct = productData.data.product;

      setFormData({
        ProductId: singleProduct.ProductId,
        ProductName: singleProduct.ProductName,
        price: singleProduct.price,
        speed: singleProduct.speed,
        range: singleProduct.range,
        waitingperiod: singleProduct.waitingperiod,
      });

      if (singleProduct.image && Array.isArray(singleProduct.image)) {
        setUploadedImageURLs(singleProduct.image);
      }

      console.log("Product data loaded", singleProduct);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Error loading product");
    }
  };

  useEffect(() => {
    fetchData(id);
  }, []);
  // Handle input fields
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file select + preview
  const handleImageSelect = async (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...formData,
      image: uploadedImageURLs,
    };

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}api/product/update/${
          formData.ProductId
        }`,
        updatedProduct
      );
      toast.success("product updated ");
      // alert("Product updated successfully!");
      navigate("/list");
      console.log(res.data);
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("error updating product ");
      // alert("Something went wrong while updating!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h5>
            UPDATE
            <RxUpdate />
          </h5>
        </div>

        <div className="add-product-div1">
          {/* Images  */}
          <div className="add-image">
            {uploadedImageURLs.map((url, index) => (
              <img
                className="addons1"
                key={index}
                src={url}
                alt="preview"
                width="80px"
              />
            ))}
          </div>

          <div>
            <label htmlFor="image" className="addons3">
              <img src={uploadedImageURLs[0]} alt="" />
            </label>
          </div>

          <div className="detail-div1">
            <div className="detail-div1">
              {inputFields.map((field) => (
                <div key={field.name}>
                  <label>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}

              <button type="submit">UPDATE</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
