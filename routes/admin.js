const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/product => GET
router.get('/products');

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
