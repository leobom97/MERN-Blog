import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./database/databaseConnection.js";
import userRouter from "./routes/userRoutes.js";

//Server PORT
const SERVER_PORT = 3000;

//Express config
const app = express();

//Dotenv config
dotenv.config();

//Database connection
databaseConnection();

//Routes
app.use("/test", userRouter);

app.listen(SERVER_PORT, (req, res) => {
  try {
    console.log(`Server running on port: ${SERVER_PORT}`);
  } catch (error) {
    console.log(`Server error ocorred: ${error}`);
  }
});
