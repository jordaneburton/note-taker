const express = require('express');
const fs = require('fs');
const path = require('path');

const notes = express();

// GET Route for notes data
notes.get('/notes', (req, res) => {
    // Log that a GET request was received
    console.info(`${req.method} request received for notes data`)
    // INVALID LINE, USE FS METHOD
    // readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for adding notes to data
notes.post('/api/feedback', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit notes`);  
});

module.exports = notes;