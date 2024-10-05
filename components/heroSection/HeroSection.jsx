import SearchSlug from "../SearchSlug";

function HeroSection() {
  return (
    <div
      className="h-screen flex flex-col justify-center"
      style={{
        backgroundImage: "url('/hero-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="ml-5 mr-5 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
        <div className="font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-tight ">
          The Most Affordable <br /> Place To Stay
        </div>
        <SearchSlug />
      </div>
    </div>
  );
}

export default HeroSection;
