const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors=require('cors')
const routes = require('./routes/trainroute');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use('/api', routes);

mongoose.connect('mongodb+srv://geethika1129:pass@cluster0.stvazm8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });