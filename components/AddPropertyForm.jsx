"use client";

import { useRef } from "react";
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
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
    <section className="mx-5 md:mx-10 lg:mx-20 mt-[84px]">
      <Card variant="soft" className="bg-white shadow-all-xl p-11">
        <center className="font-bold text-[28px] text-secondary">
          Add A New Property
        </center>
        <FormControl>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div>
              <FormLabel required>Name</FormLabel>
              <Input placeholder="Enter Name" />
            </div>
            <div>
              <FormLabel required>Address</FormLabel>
              <Input placeholder="Enter Address" />
            </div>
            <div>
              <FormLabel required>Unit Number</FormLabel>
              <Input placeholder="Enter Unit" />
            </div>
            <div>
              <FormLabel required>City</FormLabel>
              <SelectIndicator
                placeHolder={"Select City"}
                options={popularCities}
                classes="w-full"
              />
            </div>
            <div>
              <FormLabel required>Room Type</FormLabel>
              <SelectIndicator
                placeHolder={"Select Room Type"}
                options={roomTypes}
                classes="w-full"
              />
            </div>
            <div>
              <FormLabel required>Price</FormLabel>
              <Input placeholder="Enter Price" />
            </div>
          </div>
          <div className="mt-10">
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Enter Description" minRows={6} />
          </div>
          <div className="mt-10">
            <FormLabel>Upload Photos</FormLabel>
            <Input type="file" ref={fileInputRef} className="hidden" />
            <div className="border-dashed border-2 py-10 rounded-[10px] border-primary bg-primary bg-opacity-[1%]">
              <center className="text-black font-medium text-base">
                Drag your images here, or{" "}
                <span className="text-secondary font-bold">browse</span>
              </center>
              <center className="font-medium text-xs text-opacity-50 text-black mt-3">
                Supported: JPG, JPEG, PNG
              </center>
            </div>
          </div>
          <Button className="w-full h-[72px] font-medium text-xl mt-10 bg-primary hover:bg-primary">
            Add New Property
          </Button>
        </FormControl>
      </Card>
    </section>
  );
}

export default AddPropertyForm;
