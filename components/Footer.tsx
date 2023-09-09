import { importantLinks, quickLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section-containter">
      <div className="flex justify-between items-center flex-wrap">
        <div className="px-4">
          <Image
            src="/dash.svg"
            width={200}
            height={84}
            alt="Footer Logo"
            className="object-contain"
          />
        </div>

        <div className="px-4">
          <h4 className="text-2xl font-semibold my-5 text-black1">
            Quick Links
          </h4>
          {quickLinks.map((quickLink) => (
            <Link
              href={quickLink.route}
              key={quickLink.label}
              className="flex flex-col gap-2 text-lg hover:text-primary text-gray1"
            >
              {quickLink.label}
            </Link>
          ))}
        </div>

        <div className="px-4">
          <h4 className="text-2xl font-semibold my-5 text-black1">
            Important Links
          </h4>
          {importantLinks.map((importantLink) => (
            <Link
              href={importantLink.route}
              key={importantLink.label}
              className="flex flex-col gap-2 text-lg hover:text-primary text-gray1"
            >
              {importantLink.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 w-full max-w-[1440px]">
        <Image
          src="/line.svg"
          width={1440}
          height={1}
          alt="Footer Divider"
          className="object-contain"
        />
      </div>

      <div className="flex justify-center items-center gap-10 text-gray1 mt-5">
        <p>Copyright &copy; 2023 Dash</p>
        <p>Created by Prithwish Hati</p>
      </div>
    </footer>
  );
};

export default Footer;
