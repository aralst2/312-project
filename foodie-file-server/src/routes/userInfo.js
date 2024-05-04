const express = require("express");
const User = require("../models/user");
const router = express.Router();


router.get('/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching User Data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



module.exports = router;
