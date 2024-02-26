import express from "express";
import { test } from "../controllers/userController.js";
const userRouter = express.Router();

//endpoint
userRouter.get("/", test);

export default userRouter;
