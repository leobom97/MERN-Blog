import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletePost,
  getPosts,
  updatepost,
} from "../controllers/postController.js";
const postRouter = express.Router();

postRouter.post("/create", verifyToken, create);
postRouter.get("/getposts", getPosts);
postRouter.delete("/delete/:postId/:userId", verifyToken, deletePost);
postRouter.put("/update/:postId/:userId", verifyToken, updatepost);
export default postRouter;
