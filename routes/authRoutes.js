const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUserInfo);

module.exports = router;
