import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
  productId: {
    type: String,
    required: true,
    sparse: true,
  },
});

const Order = mongoose.model("orders", orderSchema);
export default Order;
