/**
 * Permite acceder a las operaciones sobre un recurso de compañia
 */

const express = require('express');
const products = require('../src/products');
let router = express.Router();

/* GET para obtener una compañia en particular */
router.get('/', products.fetchProductsList);
router.get('/:id', products.fetchProductById);

module.exports = router;
