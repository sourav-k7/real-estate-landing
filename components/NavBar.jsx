import Link from "next/link";
import Image from "next/image";
import Button from "@mui/joy/Button";

const NavBar = () => (
  <header className="w-full h-[86px] absolute z-10">
    <nav className="max-w-[1440px] flex justify-between items-center bg-transparent py-[22px] px-20">
      {/* <div className="w-36 h-12"> */}
      <Link href="/" className="">
        {/* <div className="w-14 h-5 md:w-36 md:h-12"> */}
        <Image src="/logo.svg" alt="logo" width={147} height={50} />
      </Link>
      {/* </div> */}
      <div className="flex gap-24">
        <div className="text-white gap-11 items-center text-base hidden md:flex">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Our Mission</div>
          <div className="cursor-pointer">About Us</div>
          <div className="cursor-pointer">Landlord</div>
          <div className="cursor-pointer">Tenants</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
        <div className="gap-3 hidden md:flex">
          <Button
            variant="outlined"
            className="border-white text-white hover:bg-transparent"
          >
            Sign in
          </Button>
          <Button
            variant="solid"
            className="bg-white text-black hover:bg-white cursor-pointer"
          >
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  </header>
);

export default NavBar;
