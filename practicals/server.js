// Import the express module
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handler for GET requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route handler for POST requests
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
  console.log(req.body);
});

// Route handler for PUT requests
app.put('/update', (req, res) => {
  res.send('Resource updated!');
});

// Route handler for DELETE requests
app.delete('/delete', (req, res) => {
  res.send('Resource deleted!');
});

// Mounting middleware
app.use((req, res, next) => {
  console.log('Request received');
  next();
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

let s = 'Hello'
console.log(s)