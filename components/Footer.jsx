import { Language } from "@mui/icons-material";
import { IconButton } from "@mui/joy";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  let socialLinks = [
    {
      url: "#",
      icon: <Language className="text-white" sx={{ fontSize: 32 }} />,
    },
    {
      url: "#",
      icon: <Language className="text-white" sx={{ fontSize: 32 }} />,
    },
    {
      url: "#",
      icon: <Language className="text-white" sx={{ fontSize: 32 }} />,
    },
    {
      url: "#",
      icon: <Language className="text-white" sx={{ fontSize: 32 }} />,
    },
    {
      url: "#",
      icon: <Language className="text-white" sx={{ fontSize: 32 }} />,
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
            className="object-contain"
          />
        </Link>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
          nisl tellus rhoncus, imperdiet
        </span>
        <div className="mt-8 flex flex-row gap-4">
          {socialLinks.map((opt, index) => (
            <IconButton
              key={index}
              aria-label="Open in new tab"
              component="a"
              href={opt.url}
              className="bg-white bg-opacity-20 p-2 rounded-[10px]"
            >
              {opt.icon}
            </IconButton>
          ))}
        </div>
      </div>
      <div>links</div>
    </footer>
  );
}

export default Footer;
