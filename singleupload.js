const express = require('express');
const multer = require('multer');
const app = express();
app.use('/uploads', express.static('uploads'));
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage: storage });
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image uploaded.' });
  }
  const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
  res.json({
    message: 'Image uploaded successfully!',
    imageUrl: imageUrl
  });
});
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
