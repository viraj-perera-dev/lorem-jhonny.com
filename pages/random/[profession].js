import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Import your images
import army from '../../public/assets/jhonny/army.jpeg';
import astronaut from '../../public/assets/jhonny/astronaut.jpg';
import cop from '../../public/assets/jhonny/cop.jpg';
import doctor from '../../public/assets/jhonny/doctor.jpg';
import employee from '../../public/assets/jhonny/employee.png';
import father from '../../public/assets/jhonny/father.jpg';
import fireman from '../../public/assets/jhonny/fireman.jpg';
import personaltrainer from '../../public/assets/jhonny/personaltrainer.jpg';
import plumber from '../../public/assets/jhonny/plumber.jpg';
import teacher from '../../public/assets/jhonny/teacher.jpg';

// Array of images mapped to profession names
const imageMap = {
  army,
  astronaut,
  cop,
  doctor,
  employee,
  father,
  fireman,
  personaltrainer,
  plumber,
  teacher,
};

export default function RandomProfession() {
  const router = useRouter();
  const { profession } = router.query; // Extract the profession from the URL parameter

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (profession) {
      // If the profession exists in the image map, set the image
      if (imageMap[profession]) {
        setImageSrc(imageMap[profession]);
      } else {
        // Fallback to a random image or error handling
        setImageSrc(null);
      }
    }
  }, [profession]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {imageSrc ? (
        <Image
          src={imageSrc} // Pass the imported image
          alt={profession}
          layout="fill" // Ensures the image covers the entire container
          objectFit="contain" // Ensures the image is fully visible and contained within the screen
        />
      ) : (
        <p className="text-white text-center w-full h-full flex items-center justify-center bg-gray-800">
          {profession ? `No image found for ${profession}` : 'Loading...'}
        </p>
      )}
    </div>
  );
}
