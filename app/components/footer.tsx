import { FooterCopyright } from "flowbite-react";

const Footer = () => {
  const currentYear = typeof window !== "undefined" ? new Date().getFullYear() : 2025;
  return (
    <FooterCopyright
      by={`${currentYear} Riccardo Consolandi | All Rights Reserved`}
      className="backdrop-blur-md text-center !text-[#7a6a5a] font-bold py-4"
    ></FooterCopyright>
  );
};

export default Footer;
