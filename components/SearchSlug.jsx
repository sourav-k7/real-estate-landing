import SelectIndicator from "./SelectIndicator";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import { Search } from "@mui/icons-material";

function SearchSlug() {
  let housingOptions = ["Lease", "Rent", "Buy"];
  return (
    <div className="text-white mt-20 flex flex-col sm:flex-row gap-3 sm:gap-2">
      <div className="flex gap-2">
        <SelectIndicator
          defaultValue={housingOptions[0]}
          options={housingOptions}
          classes="text-xs sm:text-base w-28 sm:w-32"
        />
        <Input
          size="lg"
          placeholder="Search Locality"
          className="text-xs sm:text-base w-full"
        />
      </div>
      <IconButton
        aria-label="Search"
        className="bg-[#F4511E] px-[14px] py-[14px] hover:bg-[#F4511E] text-center"
      >
        <Search className="text-white" sx={{ fontSize: 24 }} />
        <span className="text-white ml-3 sm:hidden">Search</span>
      </IconButton>
    </div>
  );
}

export default SearchSlug;
