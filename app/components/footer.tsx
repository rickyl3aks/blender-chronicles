import { FooterCopyright } from "flowbite-react";

const Footer = () => {
  const currentYear = typeof window !== "undefined" ? new Date().getFullYear() : 2025;
  return (
    <FooterCopyright
      by={`${currentYear} Riccardo Consolandi | All Rights Reserved`}
      className="text-center bg-gray-800 text-white py-4"
    ></FooterCopyright>
  );
};

export default Footer;
