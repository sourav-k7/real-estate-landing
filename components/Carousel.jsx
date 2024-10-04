"use client";
import { useState, useEffect } from "react";

function Carousel({ children, itemCount, onIndexChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [itemCount]);

  useEffect(() => {
    onIndexChange && onIndexChange(currentIndex);
  }, [currentIndex, onIndexChange]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
    </div>
  );
}

export default Carousel;
