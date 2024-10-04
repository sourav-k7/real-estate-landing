"use client";

import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { Avatar } from "@mui/joy";
import Carousel from "./Carousel";

function TestimonialSection() {
  let testimonials = [
    {
      id: 1,
      comment:
        "We absolutely love our new home! The open layout, natural light, and modern design exceeded our expectations. The attention to detail in every corner is remarkable. The neighborhood is friendly, and we instantly felt at home. The buying process was smooth, and the team was incredibly helpful throughout. Highly recommend this beautiful property!",
      name: "John Mitchell",
      videoUrl:
        "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4",
      imageUrl: "https://i.pravatar.cc/300",
    },
    {
      id: 2,
      comment:
        "Our new house is everything we dreamed of! The spacious rooms and stylish finishes make it feel luxurious, yet cozy. We appreciate how thoughtfully designed each space is. The location is perfect for our family, close to schools and parks. We're truly happy with our choice and excited for this new chapter.",
      name: " Sarah Thompson",
      videoUrl:
        "https://videos.pexels.com/video-files/7578542/7578542-uhd_2560_1440_30fps.mp4",
      imageUrl: "https://i.pravatar.cc/300",
    },
    {
      id: 3,
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
    <section className="grid grid-cols-2 h-[596px] bg-primary bg-opacity-[7%] mt-[92px] relative">
      <Carousel
        itemCount={testimonials.length}
        onIndexChange={handleTestimonialIndexChange}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="pt-20 pl-32 pb-20 pr-10 min-w-full"
          >
            <div className="relative text-[21px] text-[#6D220A]">
              <ImQuotesLeft className="h-[60px] w-[70px] absolute -left-12 -top-7 text-secondary opacity-30" />
              {testimonial.comment}
            </div>
            <div className="mt-24 flex gap-5">
              <div>
                <Avatar
                  src={"https://i.pravatar.cc/300"}
                  variant="outlined"
                  className="h-[60px] w-[60px]"
                />
              </div>
              <div>
                <div className="text-secondary font-bold text-lg">
                  {testimonial.name}
                </div>
                <div className="text-primary">Property owner</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="absolute left-32 bottom-16 flex gap-3">
        {testimonials.map((opt) => (
          <div
            key={opt.id}
            className={`mt-20 w-[10px] h-[10px] rounded-full ${
              opt.id - 1 == currentTestimonialIndex
                ? "bg-primary"
                : "bg-[#D9DBE1]"
            }`}
          />
        ))}
      </div>
      <div className="bg-black h-full flex justify-center">
        {
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
        }
      </div>
    </section>
  );
}

export default TestimonialSection;
