import Image from "next/image";
import SearchSlug from "./SearchSlug";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <Image src="/hero-img.png" alt="hero-image" fill />
      <div className="absolute ml-20 top-52">
        <div className="font-bold text-white text-[64px] ">
          The Most Affordable <br /> Place To Stay
        </div>
		<SearchSlug />
      </div>
    </div>
  );
}

export default Hero;
