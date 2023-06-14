//Start the server

const express = require('express');
const app = express();
const cors = require('cors'); // to fix cross-origin issuses
const port = 5000;


//Use cross-origin middleware
app.use(cors());
//Define routes
const routes = require('./routes');

// Define your API routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//Use imported routes
app.use('/', routes);

