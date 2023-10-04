const express = require("express");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const connectDB = require("./database/mongoosedb");


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.get("/", (req, res) => {
  res.send("ChocoMeltz API is Live.");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_ATLAS_URL);
    app.listen(process.env.PORT || 5000, () => {
      console.log("Backend server is running!");
    });

  } catch (error) {
    console.log(error);
  }
};


start();
