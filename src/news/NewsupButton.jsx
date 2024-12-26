import React, { useState, useEffect } from "react";

const NewsupButton = () => {
  const [upButton, setUpButton] = useState(false); // State to control button visibility

  // Show button when page is scrolled down
  const visibleButton = () => {
    if (window.scrollY > 1500) {
      setUpButton(true);
    } else {
      setUpButton(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0,
      behavior: "smooth",
    });
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", visibleButton);
    return () => {
      window.removeEventListener("scroll", visibleButton);
    };
  }, []);

  return (
    <>
      {upButton && ( // Render the button only if upButton is true
        <button onClick={scrollToTop} className="scrollupButton">
          &#8679;
        </button>
      )}
    </>
  );
};

export default NewsupButton;
