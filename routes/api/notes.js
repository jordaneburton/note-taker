const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');

// GET Route for notes data
notes.get('/', (req, res) => {
    // Log that a GET request was received
    console.info(`${req.method} request received for notes data`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for adding notes to data
notes.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit notes`);  
    
    const { title, text } = req.body;

  // If all the required properties are present
    if (title && text) {
        // Variable for the new note we will save
        const newNote = {
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        // log response to server console
        console.info(`${response.status} | note: ${response}`)
        res.json(response);
    } else {
        res.json('Error in posting new note');
    }
});

module.exports = notes;