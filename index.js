import express from "express";
import cors from "cors";
import { userModel } from "./model.js";
import { connectDb } from "./connectDb.js";

const app = express();
app.use(cors());
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.status(200).send("okay");
});

app.post("/user", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const addUser = await userModel.create({ email, password });
  res.status(200).send(addUser);
});

app.listen(9000, () => console.log("server is running..."));
