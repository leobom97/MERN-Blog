import express from "express";
import { signUp, signin, google } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp); //Cadastro de novo usuário
authRouter.post("/signin", signin); //Login de usário
authRouter.post("/google", google); //Login utilizando conta do Google

export default authRouter;
