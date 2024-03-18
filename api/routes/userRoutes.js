import express from "express";
import {
  updateUser,
  test,
  deleteUser,
  signout,
  getUser,
  getUsers,
} from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const userRouter = express.Router();

//endpoint
userRouter.get("/test", test);
userRouter.put("/update/:userId", verifyToken, updateUser);
userRouter.delete("/delete/:userId", verifyToken, deleteUser);
userRouter.post("/signout", signout);
userRouter.get("/getusers", verifyToken, getUsers);
userRouter.get("/:userId", getUser);

export default userRouter;
