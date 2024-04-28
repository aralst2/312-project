const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, name, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  return res.status(201).json({ message: "User created successfully" });
});

module.exports = router;
