const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const contactRouter = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRouter);

// health
app.get('/', (req, res) => res.send({ ok: true, env: process.env.NODE_ENV || 'development' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
