"use client";

import { useRef } from "react";
import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@mui/joy";
import SelectIndicator from "./SelectIndicator";

function AddPropertyForm() {
  const popularCities = [
    "Mumbai",
    "Pune",
    "Hyderabad",
    "New Delhi",
    "Ratnagiri",
  ];
  const roomTypes = ["Studio", "1 Bedroom", "2 Bedroom", "Penthouse"];
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  return (
    <section className="mx-5 md:mx-10 lg:mx-20 mt-9 sm:mt-12 md:mt-16 lg:mt-[84px]">
      <Card variant="soft" className="bg-white shadow-all-xl p-5 md:p-11">
        <center className="font-bold text-xl md:text-[28px] text-secondary">
          Add A New Property
        </center>
        <FormControl>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-4 md:mt-10">
            <div>
              <FormLabel required>Name</FormLabel>
              <Input placeholder="Enter Name" className="bg-white" />
            </div>
            <div>
              <FormLabel required>Address</FormLabel>
              <Input placeholder="Enter Address" className="bg-white" />
            </div>
            <div>
              <FormLabel required>Unit Number</FormLabel>
              <Input placeholder="Enter Unit" className="bg-white" />
            </div>
            <div>
              <FormLabel required>City</FormLabel>
              <SelectIndicator
                placeHolder={"Select City"}
                options={popularCities}
                classes="w-full bg-white"
              />
            </div>
            <div>
              <FormLabel required>Room Type</FormLabel>
              <SelectIndicator
                placeHolder={"Select Room Type"}
                options={roomTypes}
                classes="w-full bg-white"
              />
            </div>
            <div>
              <FormLabel required>Price</FormLabel>
              <Input placeholder="Enter Price" className="bg-white" />
            </div>
          </div>
          <div className="mt-4 md:mt-10">
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Enter Description"
              minRows={6}
              className="bg-white"
            />
          </div>
          <div className="mt-4 md:mt-10">
            <FormLabel>Upload Photos</FormLabel>
            <Input type="file" ref={fileInputRef} className="hidden" />
            <div className="border-dashed border-2 py-10 rounded-[10px] border-primary bg-primary bg-opacity-[1%]">
              <center className="text-black font-medium text-base hidden lg:block">
                Drag your images here, or{" "}
                <span className="text-secondary font-bold">browse</span>
              </center>
              <center className="text-black font-medium text-base lg:hidden">
                Click here to Upload Image
              </center>
              <center className="font-medium text-xs text-opacity-50 text-black mt-2 lg:mt-3">
                Supported: JPG, JPEG, PNG
              </center>
            </div>
          </div>
          <Button className="w-full h-12 md:h-14 lg:h-[72px] font-medium text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-10 bg-primary hover:bg-primary">
            Add New Property
          </Button>
        </FormControl>
      </Card>
    </section>
  );
}

export default AddPropertyForm;
