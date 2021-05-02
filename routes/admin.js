const express = require('express');
const path = require('path');

const router = express.Router();

const products = [];

router.get('/add-product', (request, response, next) => {
    response.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true });
})

router.post('/add-product', (request, response, next) => {
    products.push({
        title: request.body.title,
        summary: request.body.summary,
    });
    response.redirect('/');
})

exports.routes = router;
exports.products = products;