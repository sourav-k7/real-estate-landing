"use client";
import { useState, useEffect } from "react";

function Carousel({
  children,
  itemCount,
  onIndexChange,
  autoScrollDuration = 0,
  index = 0,
}) {
  const [currentIndex, setCurrentIndex] = useState(index);
  useEffect(() => {
    let interval;
    if (autoScrollDuration > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
      }, autoScrollDuration);
    }
    return () => clearInterval(interval);
  }, [itemCount, autoScrollDuration]);

  useEffect(() => {
    onIndexChange && onIndexChange(currentIndex);
  }, [currentIndex, onIndexChange]);

  useEffect(() => {
    setCurrentIndex(index % itemCount);
  }, [index]);

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
