import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
  },
  url: String,
  price: Object,
  title: Object
});

const Product = mongoose.model("product", productSchema);
export default Product;
