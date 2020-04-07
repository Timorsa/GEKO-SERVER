require('dotenv').config();
const express = require('express');
const cors = require('cors');

// eslint-disable-next-line
const db = require('./src/db/dbConnection');

// eslint-disable-next-line
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Routes
const productRouter = require('./src/routes/product');

app.use('/product', productRouter);

// Error handling
app.use((req, res, next) => {
  let err = new Error('Not Found !!');
  err.status = 404;
  next(err);
});

const errorHandler = require('./src/handlers/error');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server: server is running on: ${PORT}`);
});
