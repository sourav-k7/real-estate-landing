"use client";

import { useRef } from "react";
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Option,
  Select,
  selectClasses,
  Textarea,
} from "@mui/joy";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { KeyboardArrowDown } from "@mui/icons-material";

const formValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  unitNumber: Yup.number().required("Unit number is required"),
  city: Yup.string().required("City is required"),
  roomType: Yup.string().required("Room type is required"),
  price: Yup.string().required("Price is required"),
});

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

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="mx-5 md:mx-10 lg:mx-20 mt-9 sm:mt-12 md:mt-16 lg:mt-[84px]">
      <Card variant="soft" className="bg-white shadow-all-xl p-5 md:p-11">
        <center className="font-bold text-xl md:text-[28px] text-secondary">
          Add A New Property
        </center>
        <Formik
          initialValues={{
            name: "",
            address: "",
            unitNumber: 0,
            city: "",
            roomType: "",
            price: 0,
          }}
          validationSchema={formValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            touched,
            errors,
            values,
            setFieldValue,
          }) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-4 md:mt-10">
                <FormControl
                  error={touched.name && Boolean(errors.name)}
                  required
                >
                  <FormLabel className="font-semibold mb-1">Name</FormLabel>
                  <Input
                    placeholder="Enter Name"
                    className="bg-white"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormHelperText>{touched.name && errors.name}</FormHelperText>
                </FormControl>
                <FormControl
                  error={touched.address && Boolean(errors.address)}
                  required
                >
                  <FormLabel className="font-semibold mb-1">Address</FormLabel>
                  <Input
                    placeholder="Enter Address"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-white"
                  />
                  <FormHelperText>
                    {touched.address && errors.address}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  error={touched.unitNumber && Boolean(errors.unitNumber)}
                  required
                >
                  <FormLabel className="font-semibold mb-1">
                    Unit Number
                  </FormLabel>
                  <Input
                    placeholder="Enter Unit"
                    name="unitNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-white"
                    type="number"
                  />
                  <FormHelperText>
                    {touched.unitNumber && errors.unitNumber}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  error={touched.city && Boolean(errors.city)}
                  required
                >
                  <FormLabel className="font-semibold mb-1">City</FormLabel>
                  <Select
                    indicator={<KeyboardArrowDown />}
                    name="city"
                    value={values.city}
                    onChange={(e, newValue) => setFieldValue("city", newValue)}
                    onBlur={handleBlur}
                    className={`text-base text-[#1F2328] font-medium`}
                    sx={{
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    <Option value="" disabled>
                      <em>Please select city</em>
                    </Option>
                    {popularCities.map((opt) => (
                      <Option key={opt} value={opt}>
                        {opt}
                      </Option>
                    ))}
                  </Select>
                  <FormHelperText>{touched.city && errors.city}</FormHelperText>
                </FormControl>
                <FormControl
                  error={touched.roomType && Boolean(errors.roomType)}
                  required
                >
                  <FormLabel className="font-semibold mb-1">
                    Room Type
                  </FormLabel>
                  <Select
                    indicator={<KeyboardArrowDown />}
                    name="roomType"
                    value={values.roomType}
                    onChange={(e, newValue) =>
                      setFieldValue("roomType", newValue)
                    }
                    onBlur={handleBlur}
                    className={`text-base text-[#1F2328] font-medium`}
                    sx={{
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    <Option value="" disabled>
                      <em>Select Room Type</em>
                    </Option>
                    {roomTypes.map((opt) => (
                      <Option key={opt} value={opt}>
                        {opt}
                      </Option>
                    ))}
                  </Select>
                  <FormHelperText>
                    {touched.roomType && errors.roomType}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  error={touched.price && Boolean(errors.price)}
                  required
                >
                  <FormLabel className="font-semibold mb-1">Price</FormLabel>
                  <Input
                    placeholder="Enter Price"
                    className="bg-white"
                    type="number"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormHelperText>
                    {touched.price && errors.price}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="mt-4 md:mt-10">
                <FormLabel className="font-semibold mb-1">
                  Description
                </FormLabel>
                <Textarea
                  placeholder="Enter Description"
                  minRows={6}
                  className="bg-[#F9F9F9]"
                />
              </div>
              <div className="mt-4 md:mt-10">
                <FormLabel className="font-semibold mb-1">
                  Upload Photos
                </FormLabel>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                />
                <div
                  className="border-dashed border-2 py-10 rounded-[10px] border-primary bg-primary bg-opacity-[1%] cursor-pointer"
                  onClick={handleFileUpload}
                >
                  <center className="text-black font-medium text-base hidden lg:block">
                    Drag your images here, or &nbsp;
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

              <Button
                className="w-full h-12 md:h-14 lg:h-[72px] font-medium text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-10 bg-primary hover:bg-primary"
                type="submit"
              >
                Add New Property
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </section>
  );
}

export default AddPropertyForm;
