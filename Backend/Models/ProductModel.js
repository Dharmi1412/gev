import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  image: {
    type: [String],
    default: [],
  },
  ProductId: {
    type: Number,
    unique: true,
    required: true,
  },
  ProductName: {
    type: String,
    required: true, 
  },
  price: {
    type: String,
  },
  speed: {
    type: String,
  },
  range: {
    type: Number,
  },
  waitingperiod: {
    type: String,
  },
});

const ProductModel =
  mongoose.models.product || mongoose.model("product", ProductSchema);

export default ProductModel;
