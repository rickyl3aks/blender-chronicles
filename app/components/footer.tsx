const Footer = () => {
  const currentYear = typeof window !== "undefined" ? new Date().getFullYear() : 2025;
  return (
    <div className="backdrop-blur-md text-center !text-[#7a6a5a] text-sm py-4">
      &#169; {`${currentYear} Riccardo Consolandi | All Rights Reserved`}
    </div>
  );
};

export default Footer;
