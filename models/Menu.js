const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title:{ type: String, required: true},
    listItems: [
      {
        id: { type: Number, required: true },
        title: {type: String },
        url:{type: String },
        icon: {type: String},
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Menu", MenuSchema);