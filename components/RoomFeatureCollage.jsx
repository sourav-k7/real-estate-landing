import Image from "next/image";
import CollageCard from "./CollageCard";

function RoomFeatureCollage() {
  return (
    <div className="lg:justify-self-end">
      <div className="flex items-end gap-2 justify-center mb-2">
        <CollageCard
          imgSrc="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          label="Flexible Leases"
          height={255}
          width={255}
        />
        <CollageCard
          imgSrc={
            "https://images.unsplash.com/photo-1503266980949-bd30d04d0b7a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          height={270}
          width={270}
          label={"7-Day Happiness Guaranteed"}
        />
      </div>
      <div className="flex items-start justify-center gap-2 rounded-lg">
        <CollageCard
          imgSrc={
            "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          height={285}
          width={212}
          label={"Monthly House Cleaning"}
        />
        <CollageCard
          imgSrc={
            "https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          height={356}
          width={235}
          label={"Choose Your Own Roommate"}
        />
      </div>
    </div>
  );
}

export default RoomFeatureCollage;
