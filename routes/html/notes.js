const express = require('express');
const path = require('path');

const notes = express();

// GET Route for notes page
notes.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
);

module.exports = notes;