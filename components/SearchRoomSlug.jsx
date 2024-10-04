import { Button } from "@mui/joy";
import RoomFeatureCollage from "./RoomFeatureCollage";

function SearchRoomSlug() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-16">
      <RoomFeatureCollage />
      <div className="px-12 flex flex-col items-start justify-center">
        <div className="font-extrabold text-[40px] text-primary+">
          Flexibility and options to suit your lifestyle.
        </div>
        <div className="text-lg text-[#6B7280]">
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </div>
        <Button className="mt-10 font-medium text-xl h-[72px] bg-primary w-52 hover:bg-primary">
          Search Rooms
        </Button>
      </div>
    </section>
  );
}

export default SearchRoomSlug;
