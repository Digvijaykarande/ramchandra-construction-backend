const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String },
    description: { type: String },
    image_url: { type: String },
    contact_info: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
