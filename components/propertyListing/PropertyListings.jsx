"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/joy";
import SectionTitle from "../common/SectionTitle";
import PropertyCard from "./PropertyCard";
import Carousel from "../common/Carousel";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function PropertyListings() {
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchPropertiesDetails();
  }, []);
  async function fetchPropertiesDetails() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/properties`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    let details = await res.json();
    setProperties(details);
  }
  function getPropertiesCard() {
    return properties.map((property) => {
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
    });
  }

  function handleCarouselIndexChange(index) {
    setCarouselCurrentIndex(index);
  }

  return (
    <section className="mx-5 md:mx-10 lg:mx-20 mt-11 sm:mt-16 md:mt-24 lg:mt-32">
      <div className="flex justify-between items-center">
        <SectionTitle title={"List of properties"} />
        <Button className="bg-primary hidden sm:block sm:h-12 md:h-14 lg:h-[72px] font-medium text-base md:text-lg lg:text-xl hover:bg-primary">
          View All Property
        </Button>
      </div>
      <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-9 mt-12">
        {getPropertiesCard()}
      </div>
      <div className=" sm:hidden mt-4">
        <Carousel index={carouselCurrentIndex} itemCount={properties.length}>
          {getPropertiesCard()}
        </Carousel>
        <div className="flex justify-between mt-4 sm:hidden">
          <Button className="bg-primary hover:bg-primary text-sm font-medium h-12">
            View All Property
          </Button>
          <div className="flex items-center gap-2">
            <CiCircleChevLeft
              className="text-3xl"
              onClick={() => {
                handleCarouselIndexChange(carouselCurrentIndex - 1);
              }}
            />
            <CiCircleChevRight
              className="text-3xl"
              onClick={() => {
                handleCarouselIndexChange(carouselCurrentIndex + 1);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyListings;
