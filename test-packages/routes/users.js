const express = require('express');
const router = express.Router();

// Define your route logic here
router.get('/', (req, res) => {
  res.send('users route is working!');
});

module.exports = router;