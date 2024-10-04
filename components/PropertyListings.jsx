import { Button } from "@mui/joy";
import SectionTitle from "./SectionTitle";
import PropertyCard from "./PropertyCard";

async function PropertyListings() {
  const res = await fetch("http://localhost:3000/api/properties", {
    method: "GET",
    cache: "no-cache",
  });
  const properties = await res.json();
  return (
    <section className="mx-20 mt-32">
      <div className="flex justify-between items-center">
        <SectionTitle title={"List of properties"} />
        <Button className="bg-primary hover:bg-primary">
          View All Property
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-9 mt-12">
        {properties.map((property) => {
          const { id, address, price, bedRoomCount, bathCount, area, imgSrc } =
            property;
          return (
            <PropertyCard
              key={id}
              address={address}
              price={price}
              bedRoomCount={bedRoomCount}
              bathCount={bathCount}
              area={area}
              imgSrc={imgSrc}
            />
          );
        })}
      </div>
    </section>
  );
}

export default PropertyListings;
