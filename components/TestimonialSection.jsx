import { ImQuotesLeft } from "react-icons/im";
import { Avatar } from "@mui/joy";

function TestimonialSection() {
  return (
    <section className="grid grid-cols-2 h-[596px] bg-primary bg-opacity-[7%] mt-[92px]">
      <div className="pt-20 pl-32 pb-20 pr-10 ">
        <div className="relative text-[21px] text-[#6D220A]">
          <ImQuotesLeft className="h-[60px] w-[70px] absolute -left-12 -top-7 text-secondary opacity-30" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </div>
        <div className="mt-24 flex gap-5">
          <div>
            <Avatar variant="outlined" className="h-[60px] w-[60px]" />
          </div>
          <div>
            <div className="text-secondary font-bold text-lg">Harry Wilson</div>
            <div className="text-primary">Property owner</div>
          </div>
        </div>
        <div className="mt-20 w-[10px] h-[10px] rounded-full bg-primary" />
      </div>
      <div className="bg-white">video</div>
    </section>
  );
}

export default TestimonialSection;
