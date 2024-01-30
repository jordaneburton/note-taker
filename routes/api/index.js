const router = require('express').Router();

// Import our modular routers for /notes 
const notesRouter = require('./notes');

// Route call to be handled at 
router.use('/notes', notesRouter);

module.exports = router;