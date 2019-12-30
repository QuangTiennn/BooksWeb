require("dotenv").config();

const product = require("./models/products.model");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');

const authMiddleware = require("./middlewares/auth.middleware");
const sessionMidleware = require("./middlewares/session.middleware");
const router = require("./router/router");
const cartRouter = require("./router/cart.router");
const authRoute = require("./router/auth.route");
const usersRouter = require("./router/users.route");


mongoose.connect(process.env.MONGO_URL);
const port = 8000; 

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(session());
app.use(express.static("public"));


app.set("views", "./views");
app.set("view engine", "pug");
app.get("/",authMiddleware.requireAuth , async (req, res) => {
  var products = await product.find();
  res.render('../views/index.pug',{
      products: products
  });
});

app.use("/product",authMiddleware.requireAuth ,router);  
app.use("/user", usersRouter);
app.use("/auth", authRoute);
app.use("/product", cartRouter);

app.listen(port, () => {
    console.log('App listening on port ' + port);
});