import express from "express";
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getcomments,
  likeComment,
} from "../controllers/commentController.js";
import { verifyToken } from "../utils/verifyUser.js";
const commentRouter = express.Router();

commentRouter.post("/create", verifyToken, createComment);
commentRouter.get("/getPostComments/:postId", getPostComments);
commentRouter.put("/likeComment/:commentId", verifyToken, likeComment);
commentRouter.put("/editComment/:commentId", verifyToken, editComment);
commentRouter.delete("/deleteComment/:commentId", verifyToken, deleteComment);
commentRouter.get("/getcomments", verifyToken, getcomments);

export default commentRouter;
