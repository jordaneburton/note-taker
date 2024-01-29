const express = require('express');
const path = require('path');

const notes = express();

// GET Route for notes page
notes.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);