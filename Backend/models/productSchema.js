const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // User reference
    id: { type: Number, required: true },
    gender: { type: String, required: true },
    category: { type: String, required: true },
    designer: { type: String, required: true },
    adjective: { type: String },
    productType: { type: String, required: true },
    productName: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    discount: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    size: { type: Number, required: true },
    color: { type: String, required: true },
    prefix: { type: String },
    numericID: { type: Number, required: true },
    suffix: { type: String },
    description: { type: String },
    stock: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    date: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true }
}, { timestamps: true });

const Favorite = mongoose.model("favourites", favoriteSchema);
module.exports = Favorite;