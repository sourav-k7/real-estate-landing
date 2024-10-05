import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { AspectRatio } from "@mui/joy";
import Image from "next/image";
import { Bathtub, Bed, SelectAll } from "@mui/icons-material";

export default function PropertyCard({
  address,
  price,
  bedRoomCount,
  bathCount,
  area,
  imgSrc,
}) {
  return (
    <Card className="rounded-xl bg-white w-full min-w-full">
      <CardOverflow>
        <AspectRatio ratio="2">
          <Image src={imgSrc} alt="Property-image" fill />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <div className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-black">
          {address}
        </div>
        <div className="font-normal text-xs md:text-base text-[#818181]">
          Private Room
        </div>
        <div className="font-bold text-xl sm:text-2xl lg:text-[26px] text-secondary">
          {price}
        </div>
      </CardContent>
      <CardOverflow
        variant="soft"
        className="rounded-b-xl bg-white flex flex-row gap-1 justify-around border-t-[1px] "
      >
        <Typography
          startDecorator={<Bed color="danger" />}
          level="title-sm"
          className="py-2"
        >
          {bedRoomCount}
        </Typography>
        <Divider orientation="vertical" />
        <Typography startDecorator={<Bathtub />} level="title-sm">
          {bathCount}
        </Typography>
        <Divider orientation="vertical" />
        <Typography startDecorator={<SelectAll />} level="title-sm">
          {area}
        </Typography>
      </CardOverflow>
    </Card>
  );
}
