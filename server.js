const express = require('express');
const routes = require('./routes');

const PORT = 3001;  // CHANGE THIS BEFORE TURNING IN

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use 'index.js' in 'routes' directory to route pages
app.use(routes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);