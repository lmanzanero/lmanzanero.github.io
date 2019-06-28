const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const admin = require('./api/routes/admin');
const dashboard = require('./api/routes/dashboard');
const posts = require('./api/routes/posts');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db

const db = require('./config/keys').mongoURI;

//connect to mongoose
mongoose.connect(db, { useNewUrlParser: true})
        .then(() => console.log('Connected to lmanzanero db'))
        .catch(err => console.log(err));

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