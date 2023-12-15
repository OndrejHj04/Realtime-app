import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
dotenv.config();
const port = process.env.PORT;
const uri = process.env.MOMGO_URI;
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  return res.json({
    status: "success",
    message: "data",
  });
});

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });
