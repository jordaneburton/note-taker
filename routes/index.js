const router = require('express').Router();

// Import our modular routers for /api and '/' (html pages) paths
const apiRouter = require('./api');
const htmlRouter = require('./');

router.use('/api', apiRouter);
router.use('/', htmlRouter);

module.exports = router;
