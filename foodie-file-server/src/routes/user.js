const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");


// Create middleware to verify authentication token
const verifyToken = (req, res, next) => {
  // Get the token from the request cookies
  const token = req.cookies.token;
  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    // Verify the token using jwt.verify
    const decoded = jwt.verify(token, process.env.KEY);
    
    // If token is valid, set the decoded user data to the request object
    req.user = decoded;
    res.locals.token = token;
    next();
  } catch (error) {
    // If token is invalid, return an error response
    return res.status(401).json({ message: 'Invalid token' });
  }
};


// Requests 
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
  return res.status(201).json({ status: true });
});



router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.json({ message: "User is not registered" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.json({ message: "Invalid Password" });
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true });
  
  return res.status(200).json({ status: true, message: "Login successful", userId: user._id });
  
});

// Apply the middleware to the GET route
router.get('/', verifyToken, async (req, res) => {
  // Access the user data from the request object
  const { username } = req.user;

  try {
    // Find the user using the decoded username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
    //res.json(user);
  } catch (error) {
    console.error('Error fetching User Data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// When update button is pressed, this code executes
router.put("/", verifyToken, async (req, res) => {
  try {
    const { userId, newUsername, newEmail, currentPassword, newPassword } = req.body;
    const user = await User.findById(userId); //This gets user information from a given userID from frontend

    console.log("Current Password: ", currentPassword);
    if (newUsername){
      user.username = newUsername;
    } 
    if (newEmail){
      user.email = newEmail;
    }
    
    const validPassword = await bcrypt.compare(currentPassword, user.password);
    console.log("Is current password valid: ", validPassword);
    if (validPassword){
      if (newPassword){
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
      }
      await user.save();
      res.status(200).json({ status: true, message: "User information updated successfully" });
    }
    
    

    
  }catch (error){
    console.log("There is an error", error);
  }
});

/*
try{
    const { newUsername, newEmail, currentPassword, newPassword, userId } = req.body;
    console.log("Req.body: ", req.body);

    const user = await User.findById(userId);
    console.log("This is user: ", user);
    if (!user){
      return res.status(404).json({ message: "User not found" });
    } 
    if (newUsername) user.username = newUsername;
    if (newEmail) user.email = newEmail;
    
    
    const validPassword = await bcrypt.compare(currentPassword, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect current password" });
    }
    console.log("Password Matches", validPassword);
    if (newPassword) {
      // Check if newPassword is different from current password
      if (currentPassword == newPassword) {
        return res.status(400).json({ message: "New password must be different from current password" });
      } 
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
    }
    console.log(user);
    await user.save();
    //return res.status(200).json()
    res.status(200).json({ status: true, message: "User information updated successfully" });
  } catch (error) {
    console.error("Error updating user information:", error);
    res.status(500).json({ message: "Internal Server Error" });
  
  }
*/



module.exports = router;
