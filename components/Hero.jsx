import Image from "next/image";
import SearchSlug from "./SearchSlug";

function Hero() {
  return (
    <div className=" h-[420px] md:h-screen relative">
      <Image src="/hero-img.png" alt="hero-image" fill />
      <div className="absolute ml-5 mr-5 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20 top-28 md:top-52">
        <div className="font-bold text-white text-2xl lg:text-[64px] ">
          The Most Affordable <br /> Place To Stay
        </div>
        <SearchSlug />
      </div>
    </div>
  );
}

export default Hero;
