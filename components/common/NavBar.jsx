"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/joy/Button";
import logo from "../../public/logo.svg";
import { MenuOutlined } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton } from "@mui/joy";
import ListItemText from "@mui/material/ListItemText";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          "Home",
          "Our Mission",
          "About Us",
          "Landlord",
          "Tenants",
          "Contact Us",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <header className="w-full h-[86px] absolute z-10">
      <nav className="max-w-[1440px] flex justify-between items-center bg-transparent py-[22px] px-5 md:px-10 lg:px-20 gap-10">
        <div className="w-[60px] sm:w-22 md:w-28 lg:w-36 h-5 sm:h-8 md:h-10 lg:h-12">
          <Link href="/" className="">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex gap-12 xl:gap-24">
          <div className="text-white gap-9 xl:gap-11 items-center text-base hidden lg:flex text-center">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">Our Mission</div>
            <div className="cursor-pointer">About Us</div>
            <div className="cursor-pointer">Landlord</div>
            <div className="cursor-pointer">Tenants</div>
            <div className="cursor-pointer">Contact Us</div>
          </div>
          <div className="gap-3 hidden lg:flex">
            <Button
              variant="outlined"
              className="border-white text-white hover:bg-transparent"
            >
              Log in
            </Button>
            <Button
              variant="solid"
              className="bg-white text-black hover:bg-white cursor-pointer"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className="lg:hidden">
          <MenuOutlined className="text-white" onClick={toggleDrawer(true)} />
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          {DrawerList}
        </Drawer>
      </nav>
    </header>
  );
};

export default NavBar;
