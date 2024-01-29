const express = require('express');
const api = require('./routes/index.js');
const routes = require('./routes');

const PORT = 3001;  // CHANGE THIS BEFORE TURNING IN

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// Use index.js in routes directory to route pages
app.use(routes)

// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

