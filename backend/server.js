const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const contactRouter = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/contact', contactRouter);

// Health check route
app.get('/', (req, res) => {
  res.send({ ok: true, env: process.env.NODE_ENV || 'development' });
});

module.exports = app;
