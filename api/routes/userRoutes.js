import express from "express";
import { updateUser, test } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

const userRouter = express.Router();

//endpoint
userRouter.get("/", test);
userRouter.put("/update/:userId", verifyToken, updateUser);

export default userRouter;
