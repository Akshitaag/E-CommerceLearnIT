const route = require("express").Router();

route.use("/vendors", require("./vendors"));
route.use("/products", require("./products"));
route.use("/cart", require("./cart"));

exports = module.exports = {
  route
};
