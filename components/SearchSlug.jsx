import SelectIndicator from "./SelectIndicator";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import { Search } from "@mui/icons-material";

function SearchSlug() {
  let housingOptions = ["Lease", "Rent", "Buy"];
  return (
    <div className="text-white mt-20 flex gap-2">
      <SelectIndicator
        defaultValue={housingOptions[0]}
        options={housingOptions}
        classes="w-28"
      />
      <Input size="lg" placeholder="Search Locality" className="w-[350px]" />
      <IconButton
        aria-label="Search"
        className="bg-[#F4511E] px-[14px] py-[14px] hover:bg-[#F4511E]"
      >
        <Search className="text-white" sx={{ fontSize: 24 }} />
      </IconButton>
    </div>
  );
}

export default SearchSlug;
