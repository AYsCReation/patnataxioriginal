// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())
// Start the server

// server.js


mongoose.connect('mongodb+srv://ayushm850:LlqVpJ1uosx9kDuV@cluster0.hzeut2c.mongodb.net/patnataxi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});



// server.js

app.get('/', (req,res) => { 
    res.send("hello this is home page")
    console.log("hellooooo")
})
const formDataSchema = new mongoose.Schema({
  activeMenu: String,
  fromLocation: String,
  toLocation: String,
  date: String,
  time: String,
  phone: String,
  city: String,
  tourPackage: String,
  returnDate: String,
  days: Number,
  carType: String,
  directions: Object,
  distance: String,
  travelTime: String,
  currentdate: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

// server.js
app.post('/formdata', async (req, res) => {
    try {
      const formData = new FormData(req.body);
      const savedData = await formData.save();
      res.json(savedData);
    } catch (error) {
      res.status(500).json({ error: 'Could not save form data' });
    }
  });
  
app.get('/api/data', async (req, res) => {
    try {
      const local = await FormData.find({activeMenu : 'menu2'});
      const carpack = await FormData.find({activeMenu : 'menu3'});
      const round = await FormData.find({activeMenu : 'round'}); 
      const oneway = await FormData.find({activeMenu : 'oneway'});// Fetch all the data from the FormData collection
      res.send({status : 'ok', local : local , carpack : carpack , round : round , oneway : oneway})// Return the data as a JSON response
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch data from the database' });
    }
  });
app.listen(port, () => {
    console.log(`Server is running on port 4000`);
  });
app.post('/post', (req, res) => {
  
});