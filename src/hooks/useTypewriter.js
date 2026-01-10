import { useState, useEffect } from "react";

export const useTypewriter = (text = "", speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Reset progress ONLY when the actual text content changes
  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    // If we've reached the end of the text, stop the timer
    if (index >= text.length) return;

    const timeoutId = setTimeout(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      setIndex((i) => i + 1);
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [index, text, speed]);

  return displayedText;
};