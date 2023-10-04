const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const { Console } = require("console");

dotenv.config();

const DB = "mongodb+srv://ChocoMeltz:Stop%409211@cluster0.kyymxoo.mongodb.net/ChocoMeltz?retryWrites=true&w=majority&appName=AtlasApp";

mongoose.connect(process.env.MONGO_ATLAS_URL).then(()=>{
    console.log("DB connection with Atlas completed successfully");
}).catch((err)=>
    console.log(err)
);

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("Local DB Connection Successfull!"))
//   .catch((err) => {
//     console.log(err);
//   });


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});