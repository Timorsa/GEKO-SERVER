const express = require('express');

// eslint-disable-next-line
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server: server is running on: ${PORT}`);
});
