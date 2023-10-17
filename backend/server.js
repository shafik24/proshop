import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running.....");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((item) => item._id === Number(req.params.id));
  res.json(product);
});

app.get("*", (req, res) => {
  res.json({
    message: "Page Not found",
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
