import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import personalizeRoute from "./routes/personalize.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/outputs", express.static("outputs"));

app.use("/personalize", personalizeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});
