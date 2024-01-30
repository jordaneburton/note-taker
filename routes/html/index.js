const html = require('express').Router();
const path = require('path');

// GET Route for notes page
html.get('/', (req, res) => {
  console.info(`${req.method} request received to get home page`)
  res.sendFile(path.join(__dirname, '../../public/index.html'))
});

html.get('/notes', (req, res) => {
  console.info(`${req.method} request received to get notes page`)
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

module.exports = html;