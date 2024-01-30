const notes = require('express').Router();
const fsUtils = require('../../helpers/fsUtils');
const readFromFile = util.promisify(fs.readFile);

// GET Route for notes data
notes.get('/', (req, res) => {
    // Log that a GET request was received
    console.info(`${req.method} request received for notes data`);
    // INVALID LINE, USE FS METHOD

    readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
    // return res;
});





// POST Route for adding notes to data
notes.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit notes`);  
    
});

module.exports = notes;