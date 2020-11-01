import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import products from './data/products.js';

const app = express();

dotenv.config();

// Database configuration
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.NODE_ENV}. Listening to port ${PORT}`
      .yellow.bold
  );
});
