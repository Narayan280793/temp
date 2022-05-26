module.exports = (app) => {
  let authRoute = require("./auth.routes");
  let userRoute = require("./user/user.routes");
  let uploadRoute = require("../routes/upload.routes");
  let createProduct = require("./Product/product.routes");

  app.use("/api/authentication", authRoute);
  app.use("/api/user", userRoute);
  app.use("/api/upload", uploadRoute);
  app.use("/api/product", createProduct);
};
