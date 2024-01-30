const router = require('express').Router();

// Import our modular routers for and '/'(html pages) paths
const notesRouter = require('./notes');

router.use('/notes', notesRouter);

module.exports = router;