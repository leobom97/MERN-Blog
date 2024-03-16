import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./database/databaseConnection.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import path from "path";
import postRouter from "./routes/postRoute.js";
import commentRouter from "./routes/commentsRoute.js";

//Server PORT
const SERVER_PORT = 3000;

//Dotenv config
dotenv.config();

//Database connection
databaseConnection();

// directory name
const __dirname = path.resolve();

//Express config
const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(SERVER_PORT, (req, res) => {
  try {
    console.log(`Server running on port: ${SERVER_PORT}`);
  } catch (error) {
    console.log(`Server error ocorred: ${error}`);
  }
});

//Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/comment", commentRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
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
