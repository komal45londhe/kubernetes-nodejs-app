const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a simple route
app.get('/', (req, res) => {
  res.send('<h1>Hello from the custom app!</h1>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
