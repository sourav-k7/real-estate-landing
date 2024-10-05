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

  // Effect to handle auto-scrolling based on `autoScrollDuration` if it's greater than 0
  useEffect(() => {
    let interval;
    if (autoScrollDuration > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
      }, autoScrollDuration);
    }
    return () => clearInterval(interval);
  }, [itemCount, autoScrollDuration]);

  // Effect to trigger the `onIndexChange` callback whenever `currentIndex` changes
  useEffect(() => {
    onIndexChange && onIndexChange(currentIndex);
  }, [currentIndex, onIndexChange]);

  // Effect to update `currentIndex` whenever the `index` prop changes
  // `index` prop is shared by parent component
  useEffect(() => {
    setCurrentIndex(index % itemCount);
  }, [index, itemCount]);

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
