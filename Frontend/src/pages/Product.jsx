import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const fetchSingleProduct = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}api/product/${productId}`
    );
    const product = res.data.product;
    setProduct(product);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="products">
        <div className="subproduct-div  ">
          <div className="products-div">
            {product.image && product.image.length > 0 ? (
              product.image.map((img, idx) => (
                <img key={idx} src={img} alt={`product-img-${idx}`} />
              ))
            ) : (
              <span>No images available</span>
            )}
          </div>
        </div>

        <div className="subproducts-div">
          <div>
            <img src={product.image[0]} alt="" />
          </div>
        </div>

        <div >
          <h2>{product.ProductName}</h2>
          <p>Price: {product.price}</p>
          <p>range:{product.range}</p>
          <p>speed:{product.speed}</p>
          <p>waitingperiod:{product.waitingperiod}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
