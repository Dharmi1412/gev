import ProductModel from "../Models/ProductModel.js";

// Add product
const AddProduct = async (req, res) => {
  try {
    const productData = req.body;
    console.log(req.body);
    const product = new ProductModel(productData);
    await product.save();
    res
      .status(200)
      .json({ success: true, message: "Product created", product });
  } catch (error) {
    console.error("Error creating product", error);
    res
      .status(500)
      .json({ success: false, message: "Error creating product", error });
  }
};

// List products
const ListProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching products" });
  }
};

// Update product
const UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;

    const updatedProduct = await ProductModel.findOneAndUpdate(
      { ProductId: id },
      productData,
      { new: true }
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product updated",
      updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product", error);
    res.status(500).json({ success: false, message: "Error updating product" });
  }
};

// Delete product
const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await ProductModel.findOneAndDelete({
      ProductId: id,
    });

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Product deleted", deletedProduct });
  } catch (error) {
    console.error("Error deleting product", error);
    res.status(500).json({ success: false, message: "Error deleting product" });
  }
};

// Single product details
const GetProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const product = await ProductModel.findOne({ ProductId: Number(id) });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error fetching product details", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching product details" });
  }
};

export {
  AddProduct,
  ListProducts,
  UpdateProduct,
  DeleteProduct,
  GetProductDetails,
};
