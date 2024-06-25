require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const db = process.env.MONGODB_URI;

mongoose.connect(db)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();
app.use(cors());

app.get('/welcome', (req, res) => {
    res.send('Take your shoes off!');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));