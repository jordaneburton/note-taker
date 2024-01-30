const router = require('express').Router();
const path = require('path');

// Import our modular routers for /api and '/' (html pages) paths
const apiRouter = require('./api');
const htmlRouter = require('./html');

// Route call to corresponding index.js
router.use('/api', apiRouter);
router.use('/', htmlRouter);

// Catch-all route to homepage
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;
