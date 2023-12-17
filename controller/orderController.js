import Order from "../model/previous-order-schema.js";
import Product from "../model/product-schema.js";

export const addOrder = async (req, res) => {
  try {
    const data = await req.body;
    const newData = new Order(data);
    await newData.save();
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const getOrder = async (req, res) => {
  try {
    const phoneNo = req.body.phone;
    const exist = await Order.find({ phone: phoneNo });

    console.log(exist);
    
    if (exist.length > 0) {
      const arrLength = exist.length;
      console.log(arrLength);
      const data = await Product.findOne({ productId: exist[arrLength-1].productId });
      console.log(data);
      return res.status(200).json({ data: data });
    } else {
      return res.status(200).json({ data: [] }); // Return an empty array if no orders found
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
