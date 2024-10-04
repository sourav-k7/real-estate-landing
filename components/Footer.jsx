import { Language } from "@mui/icons-material";
import { IconButton } from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  let pages = [
    "Home V1",
    "Home V2",
    "Home V3",
    "About 1",
    "About 2",
    "Blog 1",
    "Blog 2",
    "Help Center 1",
    "Help Center 2",
    "FAQ V1",
    "FAQ V2",
    "FAQ Details",
    "Contact V1",
    "Contact V2",
    "Checkout",
  ];
  let utilityPages = [
    "Sign In",
    "Sign Up",
    "Forgot Password",
    "Reset Password",
    "Email Confirmation",
    "404 Page",
    "Coming Soon",
    "Style Guide",
  ];
  let socialLinks = [
    {
      url: "#",
      icon: <Language className="text-white" sx={{ fontSize: 32 }} />,
    },
    {
      url: "#",
      icon: <FaFacebookF className="text-white" sx={{ fontSize: 32 }} />,
    },
    {
      url: "#",
      icon: <FaTwitter className="text-white" sx={{ fontSize: 32 }} />,
    },
    {
      url: "#",
      icon: <FaGoogle className="text-white" sx={{ fontSize: 32 }} />,
    },
    {
      url: "#",
      icon: <FaLinkedinIn className="text-white" sx={{ fontSize: 32 }} />,
    },
  ];
  return (
    <footer className="bg-primary px-20 py-[120px] text-white flex justify-between">
      <div>
        <Link href="/" className="">
          <Image
            src="/logo.svg"
            alt="logo"
            width={147}
            height={50}
            className="mb-3"
          />
        </Link>
        <span>
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit. Diam ut id nisl tellus
          <br /> rhoncus, imperdiet
        </span>
        <div className="mt-8 flex flex-row gap-4">
          {socialLinks.map((opt, index) => (
            <IconButton
              key={index}
              aria-label="Open in new tab"
              component="a"
              href={opt.url}
              className="bg-white bg-opacity-20 p-2 rounded-[10px] h-12 w-12"
            >
              {opt.icon}
            </IconButton>
          ))}
        </div>
      </div>
      <div>
        <ul className="flex flex-row gap-40">
          <li className="columns-2 gap-40">
            <h2 className="font-bold text-lg mb-4">Pages</h2>
            <ul>
              {pages.map((page) => (
                <li key={page} className="mb-4">
                  {page}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h2 className="font-bold text-lg mb-4">Utility Pages</h2>
            <ul>
              {utilityPages.map((page) => (
                <li key={page} className="mb-4">
                  {page}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
