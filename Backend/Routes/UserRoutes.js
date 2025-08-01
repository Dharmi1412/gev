// import express from "express";
// import { addUser } from "../Controllers/UserController.js";

// const UserRouter = new express.Router();

// UserRouter.post("/add", addUser);

// export default UserRouter;

import express from "express";
import User from "../Models/UserModel.js";

const router = express.Router();

// signup
router.post("/signup", async (req, res) => {
  try {
    const { name, userName, number, city, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ name, userName, number, city, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Signup error", error });
  }
});

// sigin
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Signin error", error });
  }
});

export default router;
