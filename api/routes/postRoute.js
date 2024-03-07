import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createPost } from "../controllers/postController.js";
const postRouter = express.Router();

postRouter.post("/create", verifyToken, createPost);

export default postRouter;
