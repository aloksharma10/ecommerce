import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    avatar: {
      type: String,
    },
    password: {
      type: String,
    },
    address: {
      type: Object,
    },
    orderedProducts: {
      type: Object,
    },
    cartItem: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "product",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.User || mongoose.model("User", userSchema);
