import React from 'react';

export const Typing: React.FC<{ words: string[] }> = ({ words }) => {
  const [wordIndex, setWordIndex] = React.useState(0); // current word
  const [charIndex, setCharIndex] = React.useState(0); // current char
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[wordIndex];

    const tick = () => {
      if (deleting) {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          // Move to next word after deletion
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        if (charIndex < currentWord.length) {
          setCharIndex(charIndex + 1);
        } else {
          // Pause at full word, then start deleting
          setTimeout(() => setDeleting(true), 1200);
        }
      }
    };

    const delay = deleting ? 50 : 90;
    const timer = setTimeout(tick, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <span className="whitespace-pre">
      {words[wordIndex].substring(0, charIndex)}
      <span className="ml-1 inline-block animate-pulse">|</span>
    </span>
  );
};
