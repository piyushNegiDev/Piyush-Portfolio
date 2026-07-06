import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white px-5 sm:px-10 py-5 border-t border-gray mt-20">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-5 items-center justify-center">
          <p className="flex gap-5 items-center">
            <span className="flex items-center gap-2">
              <img src="/logo-white.svg" className="h-10" alt="" />
              <span className="text-lg">piyushNegi</span>
            </span>
            <span className="text-gray max-md:hidden">
              piyushnegi381@gmail.com
            </span>
          </p>
          <p className="text-lg flow-text text-center max-md:hidden">
            Web designer and Software developer
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <h3 className="text-xl font-semibold">Media</h3>
          <div className="flex gap-5">
            <a
              href="https://github.com/piyushNegiDev"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/piyush_negi381/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-negi381/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-gray">
        &copy; Copyright 2026. Made by Piyush Negi
      </div>
    </div>
  );
};

export default Footer;
