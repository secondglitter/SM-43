<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "../estilos/frase-gigapro.css";

const AnimatedTypingText = ({ text, typingSpeed }) => {
    const [displayText, setDisplayText] = useState("");
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        } else {
          setIsAnimationComplete(true);
          clearInterval(interval);
        }
      }, typingSpeed);
  
      return () => clearInterval(interval);
    }, [text, typingSpeed]);
  
    return <div className="typing-text">{isAnimationComplete ? text : displayText}</div>;
  };
  
=======
import React, { useEffect, useState } from "react";
import "../estilos/frase-gigapro.css";

const AnimatedTypingText = ({ text, typingSpeed }) => {
    const [displayText, setDisplayText] = useState("");
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        } else {
          setIsAnimationComplete(true);
          clearInterval(interval);
        }
      }, typingSpeed);
  
      return () => clearInterval(interval);
    }, [text, typingSpeed]);
  
    return <div className="typing-text">{isAnimationComplete ? text : displayText}</div>;
  };
  
>>>>>>> 6fdab3317e7e6244b5f5d573370dfe23d080f4fa
  export default AnimatedTypingText;