const notes = require('express').Router();
const { readFromFile, readAndAppend, readAndRemove } = require('../../helpers/fsUtils');
const uuid = require('../../helpers/uuid');


// GET Route for notes database
notes.get('/', (req, res) => {
    // Log that a GET request was received
    console.info(`${req.method} request received for notes data`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for adding notes to database
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
            id: uuid()
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        // log response to server console
        console.info(`${response.status} | note: ${newNote}`)
        res.json(response);
    } else {
        res.json('Error in posting new note');
    }
});


// DELETE Route for deleting notes from database
notes.delete('/:id', (req, res) => {
    // Log that a GET request was received
    console.info(`${req.method} request received for notes data`);

    // If all the required properties are present
    if (req.params.id) {
        readAndRemove(req.params.id, './db/db.json');

        const response = {
            status: 'success',
        };
        // log response to server console
        console.info(`${response.status} | ID of deleted note: ${req.params.id}`);
        res.json(response);
    } else {
        res.json('Error in deleting note');
    }
});


module.exports = notes;