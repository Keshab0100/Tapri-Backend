import Product from "../model/product-schema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products) {
      return res.status(200).json(products);
    }
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.find({productId: req.params.id});
    if (product) {
      console.log(product)
      return res.status(200).json(product);
    }
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export const insertProducts = async (req, res) => {
  try {
    await Product.insertMany(req.body);
    console.log("data imported succesfully");
    res.json({ message: "success" });
  } catch (error) {
    console.log(error.message);
  }
};
