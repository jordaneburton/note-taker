const router = require('express').Router();

// Import our modular routers for and '/'(html pages) paths
const htmlRouter = require('./notes');

router.use('/', htmlRouter);

module.exports = router;