// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4000;
const nodemailer = require('nodemailer');
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

// server.js
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
app.listen(port, () => {
    console.log(`Server is running on port 4000`);
  });
