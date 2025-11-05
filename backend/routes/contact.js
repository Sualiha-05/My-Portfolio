const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  try {
    const sql = `INSERT INTO contacts (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())`;
    const [result] = await pool.execute(sql, [name, email, subject || '', message]);
    res.json({ success: true, id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
