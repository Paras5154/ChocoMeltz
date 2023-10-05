const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, },
    image: { type: String, required: true },
    category: { type: Array },
    size: { type: String },
    company: { type: String },
    colors: { type: Array },
    price: { type: Number, required: [true,"Price must be set now."] },
    featured: {
        type: Boolean,
        default: false,
      },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
