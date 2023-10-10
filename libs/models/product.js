import mongoose,{ Schema } from "mongoose";
const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        required: true,
    },
    highlights: {
        type: [String],
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    images: {
        type: [],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    inStock: {
        type: Number,
        default: 0,
    },
    sold: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
export default mongoose.models.product || mongoose.model("product", productSchema);
