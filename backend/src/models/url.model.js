import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    originalUrl: String,
    shortCode: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    clicks: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("URL", schema);