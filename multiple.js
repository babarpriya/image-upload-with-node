const express = require('express');
const multer = require('multer');
const app = express();
app.use('/uploads', express.static('uploads'));
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'), 
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname) 
});
const upload = multer({ storage: storage });
app.post('/upload', upload.array('image', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No images uploaded.' });
  }
  const imageUrls = req.files.map(file => `http://localhost:3000/uploads/${file.filename}`);
  res.json({
    message: 'Images uploaded successfully!',
    imageUrls: imageUrls
  });
});
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
