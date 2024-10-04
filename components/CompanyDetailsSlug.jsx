import { IconButton } from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import { Language } from "@mui/icons-material";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function CompanyDetailsSlug() {
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
  );
}

export default CompanyDetailsSlug;
