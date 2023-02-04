import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Connect } from "./db/connection.js";
import Router from "./routes/Route.js";



const USERNAME = "guest";
const PASSWORD = "123456%40guest";
const url =
  process.env.url ||
  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.tvkljfb.mongodb.net/?retryWrites=true&w=majority`;
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router)

app.listen(PORT, () => console.log("listening"));
Connect(url);
