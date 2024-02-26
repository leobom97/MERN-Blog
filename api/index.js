import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./database/databaseConnection.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoute.js";

//Server PORT
const SERVER_PORT = 3000;

//Express config
const app = express();
app.use(express.json());

//Dotenv config
dotenv.config();

//Database connection
databaseConnection();

//Routes
app.use("/api/user", userRouter);
app.use("/auth", authRouter);

app.listen(SERVER_PORT, (req, res) => {
  try {
    console.log(`Server running on port: ${SERVER_PORT}`);
  } catch (error) {
    console.log(`Server error ocorred: ${error}`);
  }
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
