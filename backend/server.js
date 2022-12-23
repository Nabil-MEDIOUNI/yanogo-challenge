const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary');

const uploadFile = require('./src/helpers/uploadFile.js');

require('dotenv').config();

const { connectDB } = require('./db/config');

connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure Cors to be able to use the server for a front-end application
const CORS_OPTIONS = {
  origin: process.env.REACT_APP_API_URL,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(CORS_OPTIONS));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT_APP_API_URL);
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use('/api/users', require('./src/routes/userRouter'));
app.use('/api/photos', require('./src/routes/photoRouter'));

const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.post('/files', upload.single('file'), uploadFile);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
