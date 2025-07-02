const fs = require('fs');
const path = require('path');
const geminiService = require('../services/geminiService');

exports.processMeeting = async (req, res) => {
  try {
    let inputText = '';

    if (req.file) {
      inputText = fs.readFileSync(path.join(__dirname, `../uploads/${req.file.filename}`), 'utf-8');
    } else if (req.body.text) {
      inputText = req.body.text;
    } else {
      return res.status(400).json({ error: 'No input provided' });
    }

    const response = await geminiService.getMeetingInsights(inputText);
    return res.status(200).json(response);
  } catch (error) {
    console.error('💥 Error:', error.message);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};
