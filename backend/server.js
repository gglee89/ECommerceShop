const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const products = require('./data/products');

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

app.listen(PORT, () => {
  console.log(`Server started. Listening to port ${PORT}`);
});
