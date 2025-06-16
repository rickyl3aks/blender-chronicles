import Link from "next/link";
import GithubLogo from "../atoms/gitHubLogo";
import EmailLogo from "../atoms/emailLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-md text-[#7a6a5a] text-sm py-4 px-4">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between max-w-4xl mx-auto">
        <p className="text-center sm:text-left">&#169; {currentYear} Riccardo Consolandi | All Rights Reserved</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/rickyl3aks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#5c4d3f] transition"
          >
            <GithubLogo/>
            GitHub
          </Link>
          <Link href="mailto:rconsolandi@gmail.com" className="flex items-center gap-1 hover:text-[#5c4d3f] transition">
            <EmailLogo/>
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
