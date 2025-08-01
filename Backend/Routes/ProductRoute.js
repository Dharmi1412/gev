import express from "express";
import {
  AddProduct,
  DeleteProduct,
  GetProductDetails,
  ListProducts,
  UpdateProduct,
} from "../Controllers/ProductController.js";
import upload from "../Config/multerStorage.js";

const ProductRouter = express.Router();

ProductRouter.post("/add", upload.array("images", 5), AddProduct);
ProductRouter.get("/list", ListProducts);
ProductRouter.get("/:id", GetProductDetails);
ProductRouter.put("/update/:id", UpdateProduct);
ProductRouter.delete("/delete/:id", DeleteProduct);

export default ProductRouter;
