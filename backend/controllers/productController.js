import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

/**
 * @description Fetch all products
 * @route       GET /api/products
 * @access      Public
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/**
 * @description Fetch single product
 * @route       GET /api/product/:id
 * @access      Public
 */
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    // Not found
    // res.status(404).json({ message: 'Product not found' });

    // With the ErrorMiddleware we do not need to
    // return .json({ message: ... })
    // This error gets catched and handled by the middleware
    // just by throwing the Error
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById };
