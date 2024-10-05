import { Button } from "@mui/joy";
import RoomFeatureCollage from "./RoomFeatureCollage";

function SearchRoomSlug() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-[52px] sm:mt-14 lg:mt-16 mx-5 sm:mx-0">
      <RoomFeatureCollage />
      <div className="px-12 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <div className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary mt-6 lg:mt-0">
          Flexibility and options to suit your lifestyle.
        </div>
        <div className="text-xs md:text-base lg:text-lg text-[#6B7280] mt-4">
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </div>
        <Button className="h-12 mt-5 md:mt-10 font-medium text-sm sm:text-base md:text-lg lg:text-xl  md:h-14 lg:h-[72px] bg-primary w-52 hover:bg-primary">
          Search Rooms
        </Button>
      </div>
    </section>
  );
}

export default SearchRoomSlug;
