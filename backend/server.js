// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const uploadMiddleware = multer({dest: 'uploads/'})
const app = express();
const port = 4000;
const nodemailer = require('nodemailer');
const fs = require('fs');
const Post = require('./post');
const Route = require('./routepage');
const RoutePage = require('./routepage');
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
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ayushm850@gmail.com',
    pass: 'rnjoaswfqsdjsxvz',
  },
});

const generateEmailContent = (data) => {
  let emailContent = `<h1>New Lead Submitted</h1>`;

  if (data.activeMenu === 'menu2') {
    // For activeMenu 'menu2' (Local)
    emailContent += `
      <h2>Trip Details (Local)</h2>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>Package:</strong> ${data.tourPackage}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Date:</strong> ${data.date}</p>
    `;
  } else if (data.activeMenu === 'menu3') {
    // For activeMenu 'menu3' (Car Package)
    emailContent += `
      <h2>Trip Details (Car Package)</h2>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Days:</strong> ${data.days}</p>
      <p><strong>Return Date:</strong> ${data.returnDate}</p>
    `;
  } else if (data.activeMenu === 'round') {
    // For activeMenu 'round' (Round Trip)
    emailContent += `
      <h2>Trip Details (Round Trip)</h2>
      <p><strong>From:</strong> ${data.fromLocation}</p>
      <p><strong>To:</strong> ${data.toLocation}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
      <p><strong>Return Date:</strong> ${data.returnDate}</p>
    `;
  } else if (data.activeMenu === 'oneway') {
    // For activeMenu 'oneway' (One Way Trip)
    emailContent += `
      <h2>Trip Details (One Way Trip)</h2>
      <p><strong>From:</strong> ${data.fromLocation}</p>
      <p><strong>To:</strong> ${data.toLocation}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
    `;
  }

  return emailContent;
};

// Function to send the email
const sendEmail = async (data) => {
  const emailContent = generateEmailContent(data);

  // Setup email data
  const mailOptions = {
    from: 'ayushm850@gmail.com',
    to: 'jatinchouhan1515@gmail.com', // Replace with the recipient's email address
    subject: 'New Lead Submitted',
    html: emailContent,
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

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

const citySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  footTitle:{
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  faq1: {
    que : String,
    ans : String,
  },
  faq2: {
    que : String,
    ans : String,
  },
  faq3: {
    que : String,
    ans : String,
  },
  faq4: {
    que : String,
    ans : String,
  },
  faq5: {
    que : String,
    ans : String,
  }
});
const CityData = mongoose.model('CityData', citySchema);

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
app.get('/citypage', async (req, res) => {
  try {
    const data = await CityData.find({});
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

    // Send email with the lead data
    sendEmail(req.body); // Here, req.body contains the lead data received from the user
  } catch (error) {
    res.status(500).json({ error: 'Could not save form data' });
  }
});
app.delete('/formdata/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await FormData.findByIdAndDelete(id);
    res.json({ message: 'Field deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete field' });
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
app.get('/city/:id', async (req, res)=>{
  const {id} = req.params;
  const postDoc = await CityData.findById(id);
  res.json(postDoc);
})
app.put('/post', uploadMiddleware.single('file'), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
  }

  const { id, title, summary, content, author } = req.body;
  try {
    const postDoc = await Post.findById(id);
    console.log(postDoc);
    console.log(id);

    // Update the document properties
    postDoc.title = title;
    postDoc.summary = summary;
    postDoc.content = content;
    postDoc.author = author;
    postDoc.cover = newPath || postDoc.cover; // If newPath is available, use it; otherwise, keep the existing cover value

    // Save the updated document
    await postDoc.save();

    // Optionally, you can send a response back to the client indicating the successful update.
    res.status(200).json({ message: 'Post updated successfully.' });
  } catch (err) {
    // Handle errors appropriately
    console.error(err);
    res.status(500).json({ error: 'An error occurred while updating the post.' });
  }
});
app.post('/api/routes', async (req, res) => {


    try {
      const { title, FromRoute, content, toRoute } = req.body;
  
      // Create a new blog post document
      const newPost = new RoutePage({
        title,
        FromRoute,
        content,
        toRoute, 
         
      });
  
      // Save the new post to the database
      await newPost.save();
      
      res.status(201).json({ message: 'Route post created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/api/city', async (req, res) => {
  const {
    title,
    footTitle,
    summary,
    content,
    faq1,
    faq2,
    faq3,
    faq4,
    faq5,
  } = req.body;

  try {
    // Create a new CityData document with the parsed JSON data
    const cityData = new CityData({
      title,
      footTitle,
      summary,
      content,
      faq1,
      faq2,
      faq3,
      faq4,
      faq5,
    });

    // Save the new CityData document to the database
    await cityData.save(); 

    // Respond with a success message
    res.status(200).json({ message: 'Blog post created successfully' });
  } catch (error) {
    // If there's an error, respond with an error message
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});