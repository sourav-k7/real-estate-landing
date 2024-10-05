import { ImQuotesLeft } from "react-icons/im";
import { Avatar } from "@mui/joy";

function TestimonialCard({ id, comment, name }) {
  return (
    <div
      key={id}
      className="pt-11 lg:pt-20 px-5 md:px-10 lg:pl-32 pb-20 pr-10 min-w-full"
    >
      <div className="relative text-sm lg:text-[21px] text-[#6D220A]">
        <ImQuotesLeft className="h-10 w-9 lg:h-[60px] lg:w-[70px] absolute -top-5 lg:-left-12 lg:-top-7 text-secondary opacity-30" />
        {comment}
      </div>
      <div className="mt-6 lg:mt-24 flex gap-3 lg:gap-5">
        <div>
          <Avatar
            src={"https://i.pravatar.cc/300"}
            variant="outlined"
            className="h-11 lg:h-[60px] w-11 lg:w-[60px]"
          />
        </div>
        <div>
          <div className="text-secondary font-bold text-base lg:text-lg">
            {name}
          </div>
          <div className="text-primary text-sm lg:text-base">
            Property owner
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
