import { useEffect, useState } from 'react';

export const useTypewriter = (text: string, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      let currentIndex = 0;
      
      const typeCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeCharacter, speed);
        } else {
          setIsComplete(true);
        }
      };
      
      typeCharacter();
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
};