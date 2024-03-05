import express from "express";
import { updateUser, test, deleteUser } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

const userRouter = express.Router();

//endpoint
userRouter.get("/", test);
userRouter.put("/update/:userId", verifyToken, updateUser);
userRouter.delete("/delete/:userId", verifyToken, deleteUser);

export default userRouter;
