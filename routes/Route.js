import express from "express";
import { addOrder, getOrder } from "../controller/orderController.js";
import { getOneProduct, getProducts, insertProducts } from "../controller/ProductsController.js";
import { userLogin, userSignup } from "../controller/userController.js";

const Router = express.Router();

Router.get("/getProducts",getProducts )
Router.post("/insertProduct",insertProducts )
Router.get("/getProduct/:id",getOneProduct )

Router.post("/signup", userSignup);
Router.post("/login", userLogin);

Router.post("/addOrder", addOrder)
Router.post("/getOrder", getOrder)

export default Router;