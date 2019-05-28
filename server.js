const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const admin = require('./api/routes/admin');
const dashboard = require('./api/routes/dashboard');
const posts = require('./api/routes/posts');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
app.use('/api/admin', admin);
app.use('/api/dashboard', dashboard);
app.use('/api/posts', posts);
  
app.get('/', (req, res) => {
    res.send("Hello World");
  });

const port = process.env.PORT || 3000;

app.listen(port);

console.log('RESTful API server started on: ' + port);