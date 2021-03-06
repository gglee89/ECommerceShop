import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';

// Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Middlewares
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();

// Environment Variables
dotenv.config();

// Database configuration
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Routes configuration
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Middleware configuration
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.NODE_ENV}. Listening to port ${PORT}`
      .yellow.bold
  );
});
