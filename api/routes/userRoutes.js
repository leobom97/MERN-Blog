import express from "express";
import {
  updateUser,
  test,
  deleteUser,
  signout,
  getUsers,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

const userRouter = express.Router();

//endpoint
userRouter.get("/test", test);
userRouter.put("/update/:userId", verifyToken, updateUser);
userRouter.delete("/delete/:userId", verifyToken, deleteUser);
userRouter.post("/signout", signout);
userRouter.get("/getusers", verifyToken, getUsers);

export default userRouter;
