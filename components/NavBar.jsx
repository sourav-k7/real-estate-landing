import Link from "next/link";
import Image from "next/image";
import Button from "@mui/joy/Button";

const NavBar = () => (
  <header className="w-full h-[86px] absolute z-10">
    <nav className="max-w-[1440px] flex justify-between items-center bg-transparent py-[22px] px-20">
      <Link href="/" className="">
        <Image
          src="/logo.svg"
          alt="logo"
          width={147}
          height={50}
          className="object-contain"
        />
      </Link>
      <div className="flex gap-24">
		<div className="flex text-white gap-11 items-center text-base">
			<div className="cursor-pointer">Home</div>
			<div className="cursor-pointer">Our Mission</div>
			<div className="cursor-pointer">About Us</div>
			<div className="cursor-pointer">Landlord</div>
			<div className="cursor-pointer">Tenants</div>
			<div className="cursor-pointer">Contact Us</div>
		</div>
        <div className="flex gap-3">
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
