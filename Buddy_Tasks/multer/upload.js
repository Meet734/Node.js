const multer = require('multer');
const path = require('path');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads')); // Use absolute path for consistency
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix);
  }
});

// File filter to allow only JPEG files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg') {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Only .jpg files are allowed!'), false); // Reject the file
  }
};

// Create the multer instance
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // Optional: Limit file size to 5MB
});

module.exports = upload;