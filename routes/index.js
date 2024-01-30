const router = require('express').Router();

// Import our modular routers for /api and '/' (html pages) paths
const apiRouter = require('./api');
const htmlRouter = require('./html');

// Route call to corresponding index.js
router.use('/api', apiRouter);
router.use('/', htmlRouter);

module.exports = router;
