import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function LoadingSpinner() {
  const emojis = ["🎸","⚽️","🧑‍🍳","🐣","🔨","🤖","🧑‍🌾","🐱","🚶"];
  const [currentEmoji, setCurrentEmoji] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(Math.floor(Math.random() * emojis.length));
    }, 1000);

    return () => clearInterval(interval);
  }, [emojis.length]);

  return (
    <Heading size={"3xl"} textAlign={"center"}>
      {/* Unique key forces re-render, re-applying the animation */}
      <div key={currentEmoji} className='shrink'>{emojis[currentEmoji]}</div>
    </Heading>
  );
};
