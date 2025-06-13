# Node.js Image Upload API

This is a simple Node.js and Express.js project that demonstrates how to upload single and multiple image files using Multer. Uploaded images are stored in the `uploads/` directory and served statically.
 Features:
- Upload a **single image** via `index.js`
- Upload **multiple images (up to 5)** via `multi.js`
- Store uploaded files in a local `uploads/` folder
- Return public image URLs in the response.

## Project Structure
nodeimage/
├── index.js # Single image upload
├── multi.js # Multiple image upload (up to 5)
├── uploads/ # Folder where images are stored
├── package.json # Project dependencies(multer and express)
└── package-lock.json


