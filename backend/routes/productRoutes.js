// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { Product } = require('../models/product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add other CRUD endpoints...

module.exports = router;
