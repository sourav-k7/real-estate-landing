"use client";

import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export default function SelectIndicator({
  options,
  defaultValue,
  placeHolder,
  classes = "",
}) {
  return (
    <Select
      indicator={<KeyboardArrowDown />}
      placeholder={placeHolder}
      defaultValue={defaultValue}
      className={`text-base text-[#1F2328] font-medium ${classes}`}
      sx={{
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {options.map((opt) => (
        <Option key={opt} value={opt}>
          {opt}
        </Option>
      ))}
    </Select>
  );
}
