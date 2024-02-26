import express from "express";
import { test } from "../controllers/userController";
const userRouter = express.Router();

//endpoint
userRouter.get("/", test);

export default userRouter;
