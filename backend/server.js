// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const uploadMiddleware = multer({dest: 'uploads/'})
const app = express();
const port = 4000;
const fs = require('fs');
const Post = require('./post');
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'));
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
app.get('/post', async (req, res) => {
  try {
    const data = await Post.find({});
    res.json({ status: 'ok', data });
     // Return the data as a JSON response
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch blog posts from the database' });
  }
});

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


app.post('/api/posts', uploadMiddleware.single('file'), async (req, res) => {
const {originalname, path} = req.file;
const parts = originalname.split('.');
const ext = parts[parts.length-1];
const newPath = path + '.' + ext;
fs.renameSync(path, newPath);


  try {
    const { title, summary, content, author } = req.body;
    const file = req.file;

    // Create a new blog post document
    const newPost = new Post({
      title,
      summary,
      content,
      author,
      cover : newPath,
      file: file ? file.path : '', // Store the file path in the database if it exists.
       
    });

    // Save the new post to the database
    await newPost.save();

    res.status(201).json({ message: 'Blog post created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/post/:id', async (req, res)=>{
  const {id} = req.params;
  const postDoc = await Post.findById(id);
  res.json(postDoc);
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});