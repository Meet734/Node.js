const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Require the upload middleware
const upload = require('./upload');
const path = require('path');

// Set up a route for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file
  console.log("file: ", req.file);
  res.json({ message: 'File uploaded successfully!' });
});

app.get('/getimg', (req, res) => {
  const fileName = req.query.name; // Expecting the file name as a query parameter
  const filePath = path.join(__dirname, 'uploads', fileName);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(404).json({ message: 'File not found' });
    }
  });
});

app.get('/download', (req, res) => {
  // Read the file into a buffer
  const fileName = req.query.name; // Expecting the file name as a query parameter
  const filePath = path.join(__dirname, 'uploads', fileName);
  fs.readFile(filePath, (err, buffer) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    // Set the content type based on the file type
    res.set('Content-Type', 'application/octet-stream');

    // Set the content disposition to attachment with a filename
    res.set('Content-Disposition', 'attachment; filename="downloaded_file.bin"');

    // Send the buffer as the response
    res.send(buffer);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
