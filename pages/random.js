import { useState, useEffect } from 'react';

export default function RandomImagePage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch the random image URL from the API route
    fetch('/api/random-image')
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.imageUrl);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {imageUrl ? (
        <img src={imageUrl} alt="Random" className="max-w-full max-h-screen object-contain" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
