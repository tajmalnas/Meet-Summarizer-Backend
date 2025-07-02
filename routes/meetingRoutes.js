const express = require('express');
const multer = require('multer');
const { processMeeting } = require('../controllers/meetingController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), processMeeting);

module.exports = router;
