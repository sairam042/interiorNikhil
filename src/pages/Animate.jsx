import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const phrases = [
    'Modular Kitchen',
    'Office Spaces',
    'Living Room',
    'Pooja Mandir',
    'Bedroom',
    'Balcony Design',
  ]; // Add more phrases as needed
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length); // Cycle through phrases
    }, 3000); // Adjust delay for switching phrases

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div>
      <h1 id="animateWork">
        We Build{' '}
        <span key={currentIndex} className="animatedPhrase">
          {phrases[currentIndex]}
        </span>
      </h1>
    </div>
  );
};

export default AnimatedText;
