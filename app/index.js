import express from "express";
import seniorRoutes from "./routes/seniorRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/seniors", seniorRoutes);

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
