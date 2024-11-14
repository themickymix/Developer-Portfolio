import React, { useRef, useState, useEffect } from "react";
const FadeLeftOnScroll = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 } // Trigger animation when 10% of the item is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`opacity-0 transition-all duration-700 transform ${
        isVisible
          ? "opacity-100 animate-fade-left animate-once animate-duration-[2000ms]"
          : ""
      }`}>
      {children}
    </div>
  );
};

export default FadeLeftOnScroll;
