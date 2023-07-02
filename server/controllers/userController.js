const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Get a single user by their id or username
const getUser = async (req, res) => {
  const { id, username } = req.params;
  try {
    const user = await User.findOne({ $or: [{ _id: id }, { username }] });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Exclude sensitive information like password from the response
    const { password, ...userData } = user._doc;
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a user, sign a token, and send it back
const createUser = async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;
  try {
    const user = await User.create({ username, email, password, firstName, lastName });
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

// Login a user, sign a token, and send it back
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isCorrectPassword = await user.isCorrectPassword(password);
    if (!isCorrectPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Show user purchase history
const showPurchaseHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('purchasedArt');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user.purchasedArt);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Helper function to generate a token
const generateToken = (userId) => {
  return jwt.sign({ userId }, 'your-secret-key', { expiresIn: '1h' });
};

module.exports = {
  getUser,
  createUser,
  loginUser,
  showPurchaseHistory,
};
