const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const contactRouter = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRouter);

app.get('/', (req, res) => {
  res.send({ ok: true, env: process.env.NODE_ENV || 'development' });
});

module.exports = app; // ✅ For Vercel
