import User from "../models/Users.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
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
    res.status(500).json({ message: error.message });
  }
};
