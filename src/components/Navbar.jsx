import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  return (
    <>
      <nav className="text-white px-5 sm:px-10 flex items-center justify-between py-5 z-10 sticky top-0 bg-bg mb-10">
        <div
          className="flex items-center gap-5 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src="/logo-white.svg" alt="" />
          <span className="text-2xl">piyushNegi</span>
        </div>
        <ul className="hidden md:flex gap-4 text-xl">
          <li>
            <HashLink smooth to="/#home">
              <span className="text-primary">#</span>home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">
              <span className="text-primary">#</span>projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about-me">
              <span className="text-primary">#</span>about-me
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">
              <span className="text-primary">#</span>contacts
            </HashLink>
          </li>
        </ul>

        <button
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
          className="
            md:hidden
          "
        >
          <MdOutlineMenuOpen className="text-4xl" />
        </button>
      </nav>
      <div
        className={`
          flex overflow-hidden flex-col
          h-screen
          text-white
          bg-bg
          transition-all
          fixed top-0
          right-0
          z-100
          lg:hidden
          ${showMenu ? "w-screen px-5" : "w-0 px-0"}
        `}
      >
        <button
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
          className="
            ml-auto
            mb-10
            text-4xl
          "
        >
          &#215;
        </button>
        <ul
          className="
            flex flex-col
            text-xl
            gap-4
          "
        >
          <li
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            <HashLink smooth to="/#home">
              <span className="text-primary">#</span>home
            </HashLink>
          </li>
          <li
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            <HashLink smooth to="/#projects">
              <span className="text-primary">#</span>projects
            </HashLink>
          </li>
          <li
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            <HashLink smooth to="/#about-me">
              <span className="text-primary">#</span>about-me
            </HashLink>
          </li>
          <li
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            <HashLink smooth to="/#contact">
              <span className="text-primary">#</span>contacts
            </HashLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
