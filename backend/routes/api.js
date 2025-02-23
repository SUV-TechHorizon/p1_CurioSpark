const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const googleSheetController = require('../controllers/googleSheetController');

router.post('/subscribe', emailController.subscribe);
router.post('/feedback', googleSheetController.feedback);

module.exports = router;