import express from "express";
import { signUp, signin, google } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signin);
authRouter.post("/google", google);

export default authRouter;
