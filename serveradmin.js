const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'adminlogin';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/admin/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/admin/login', (req, res) => {
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;

    const db = client.db(dbName);
    const collection = db.collection('leaverequests');

    collection.findOne({ email: req.body.email, password: req.body.password }, function(err, result) {
      if (err) throw err;

      if (result) {
        res.send('You are logged in as an admin.');
      } else {
        res.send('Invalid email or password.');
      }

      client.close();
    });
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
