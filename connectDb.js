import mongoose from "mongoose";
import { config } from "dotenv";

config();
const mongodbUrl = process.env.MONGODB_URL;

export function connectDb() {
  try {
    mongoose
      .connect(mongodbUrl)
      .then(() => console.log("database successfully connected"));
  } catch (e) {
    console.log(e);
  }
}
