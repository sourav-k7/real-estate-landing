import Image from "next/image";

function CollageCard({ imgSrc, label, height, width }) {
  return (
    <div className="relative">
      <Image
        src={imgSrc}
        alt="room"
        width={width}
        height={height}
        className="rounded-xl"
      />
      <div className="absolute inset-0 flex justify-center items-start mt-5 font-semibold text-white text-2xl text-center">
        {label}
      </div>
    </div>
  );
}

export default CollageCard;
