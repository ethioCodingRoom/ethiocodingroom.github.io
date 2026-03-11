import React from 'react';

interface TypingProps {
  words: string[];
}

export const Typing: React.FC<TypingProps> = ({ words }) => {
  const [wordIndex, setWordIndex] = React.useState(0); // current word
  const [charIndex, setCharIndex] = React.useState(0); // current character
  // Toggles between typing forward and deleting backward.
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[wordIndex];

    const tick = () => {
      if (deleting) {
        // Remove a character
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          // Move to next word after deletion
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Add a character
        if (charIndex < currentWord.length) {
          setCharIndex(charIndex + 1);
        } else {
          // Pause at the complete word for readability, then start deletion.
          setTimeout(() => setDeleting(true), 1200);
        }
      }
    };

    const delay = deleting ? 50 : 90; // faster deleting
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