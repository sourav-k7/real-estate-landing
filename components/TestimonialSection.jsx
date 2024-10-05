"use client";

import { useState } from "react";
import Carousel from "./Carousel";
import TestimonialCard from "./testimonialCard";

function TestimonialSection() {
  let testimonials = [
    {
      id: 0,
      comment:
        "We absolutely love our new home! The open layout, natural light, and modern design exceeded our expectations. The attention to detail in every corner is remarkable. The neighborhood is friendly, and we instantly felt at home. The buying process was smooth, and the team was incredibly helpful throughout. Highly recommend this beautiful property!",
      name: "John Mitchell",
      videoUrl:
        "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4",
      imageUrl: "https://i.pravatar.cc/300",
    },
    {
      id: 1,
      comment:
        "Our new house is everything we dreamed of! The spacious rooms and stylish finishes make it feel luxurious, yet cozy. We appreciate how thoughtfully designed each space is. The location is perfect for our family, close to schools and parks. We're truly happy with our choice and excited for this new chapter.",
      name: " Sarah Thompson",
      videoUrl:
        "https://videos.pexels.com/video-files/7578542/7578542-uhd_2560_1440_30fps.mp4",
      imageUrl: "https://i.pravatar.cc/300",
    },
    {
      id: 2,
      comment:
        "Moving into this house has been a fantastic experience! The craftsmanship is outstanding, and the blend of modern and classic design elements really adds charm. We’re especially impressed with the outdoor space, perfect for relaxing and entertaining. The community is welcoming, and we couldn't be happier with our decision to call this place home.",
      name: "David Walker",
      videoUrl:
        "https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4",
      imageUrl: "https://i.pravatar.cc/300",
    },
  ];
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  function handleTestimonialIndexChange(index) {
    setCurrentTestimonialIndex(index);
  }

  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 bg-primary bg-opacity-[7%] mt-9 lg:mt-[92px] relative">
      <Carousel
        itemCount={testimonials.length}
        onIndexChange={handleTestimonialIndexChange}
        autoScrollDuration={3000}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            id={testimonial.id}
            comment={testimonial.comment}
            name={testimonial.name}
          />
        ))}
      </Carousel>
      <div className="absolute left-5 lg:left-32 bottom-5 lg:bottom-16 flex gap-3">
        {testimonials.map((opt) => (
          <div
            key={opt.id}
            className={`mt-20 w-[10px] h-[10px] rounded-full ${
              opt.id == currentTestimonialIndex ? "bg-primary" : "bg-[#D9DBE1]"
            }`}
          />
        ))}
      </div>
      <div className="bg-black h-full flex justify-center mt-5 lg:mt-0 mx-5 lg:mx-0">
        <video
          controls
          preload="metadata"
          key={currentTestimonialIndex}
          autoPlay
        >
          <source
            src={testimonials[currentTestimonialIndex].videoUrl}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default TestimonialSection;
