import React, { useState, useEffect } from "react";

const Typewriter = ({
  sentences,
  typingSpeed = 150,
  deleteSpeed = 100,
  pause = 1000,
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];

    if (isDeleting) {
      // Deleting effect
      if (displayedText.length > 0) {
        setTimeout(() => {
          setDisplayedText(
            currentSentence.substring(0, displayedText.length - 1)
          );
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }
    } else {
      // Typing effect
      if (displayedText.length < currentSentence.length) {
        setTimeout(() => {
          setDisplayedText(
            currentSentence.substring(0, displayedText.length + 1)
          );
        }, typingSpeed);
      } else {
        // Start deleting after a pause when sentence is fully typed
        setTimeout(() => setIsDeleting(true), pause);
      }
    }
  }, [
    displayedText,
    isDeleting,
    sentences,
    currentSentenceIndex,
    typingSpeed,
    deleteSpeed,
    pause,
  ]);

  return (
    <div className="text-3xl font-bold text-purple-700">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default Typewriter;
