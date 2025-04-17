import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export const userModel =
  mongoose.models.users || mongoose.model("user", userSchema);
