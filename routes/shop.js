const path = require('path');

const express = require('express');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (request, response, next) => {
    const products = adminData.products;
    response.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;