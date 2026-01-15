import { useState, useEffect } from "react";

export const useTypewriter = (text = "", speed = 50, glitch = false) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  
  // 1. ARCHITECT FIX: Track the previous text to detect changes during render
  const [prevText, setPrevText] = useState(text);

  // 2. Sync State during render: If the text prop changes (e.g., Executive -> Architect), 
  // reset everything immediately. This avoids the "Cascading Render" warning.
  if (text !== prevText) {
    setPrevText(text);
    setDisplayedText("");
    setIndex(0);
  }

  useEffect(() => {
    // If we've finished the string, stop the effect
    if (index >= text.length) return;

    const timeoutId = setTimeout(() => {
      // 10% chance to show a "glitch" character if glitch mode is enabled
      const characters = "01$#&_";
      const isGlitching = glitch && Math.random() > 0.9;
      
      const charToShow = isGlitching 
        ? characters.charAt(Math.floor(Math.random() * characters.length)) 
        : text.charAt(index);

      setDisplayedText((prev) => prev + charToShow);
      
      // If we showed a glitch character, we don't increment the index.
      // This makes the "real" character wait until the next tick.
      if (charToShow === text.charAt(index)) {
        setIndex((i) => i + 1);
      }
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [index, text, speed, glitch]);

  return displayedText;
};