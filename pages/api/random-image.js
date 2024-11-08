import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const imagesDir = path.join(process.cwd(), 'public/assets/jhonny');

  // Read the files in the directory
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Failed to retrieve images' });
      return;
    }

    // Select a random image from the files
    const randomImage = files[Math.floor(Math.random() * files.length)];
    const imagePath = path.join('/assets/jhonny', randomImage);

    // Send the image path as the response
    res.status(200).json({ imageUrl: imagePath });
  });
}
