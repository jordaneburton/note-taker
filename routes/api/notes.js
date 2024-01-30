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
    
    const { noteTitle, noteText } = req.body;

  // If all the required properties are present
    if (noteTitle && noteText) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
        // email,
        // feedbackType,
        // feedback,
        // feedback_id: uuid(),
        };

        // readAndAppend(newFeedback, './db/feedback.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting new note');
    }
});

module.exports = notes;