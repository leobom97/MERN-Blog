import User from "../models/Users.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/Error.js";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });
    if (newUser) {
      res.json({ message: "User succefully created!!!" });
    }
  } catch (error) {
    next(error);
  }
};
