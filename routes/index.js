const express = require("express");
const route = express.Router();

const userRouter = require("./user")
route.get("/", (req, res) => {
  res.json("ini halaman utama");
});

route.use("/user", userRouter)
module.exports = route;
