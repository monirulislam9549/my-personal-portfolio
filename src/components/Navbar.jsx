import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#contact">Contact Me</a>
      </li>
    </>
  );
  return (
    <nav>
      <div>
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                --> */}
              <svg
                onClick={toggleNavbar}
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeWidth="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeWidth="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-5">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden rounded-full"
                src={`https://i.ibb.co/qmYVdD6/Screenshot-2023-07-02-125125.png`}
                alt=""
              />
              <Link>
                <img
                  className="hidden h-8 w-auto lg:block rounded-full"
                  src={`https://i.ibb.co/qmYVdD6/Screenshot-2023-07-02-125125.png`}
                  alt=""
                />
              </Link>
            </div>
            <div className="hidden sm:ml-auto sm:block">
              <ul className="flex space-x-6">{navItems}</ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        {isMenuOpen && <ul className="space-y-1 px-2 pb-3 pt-2">{navItems}</ul>}
      </div>
    </nav>
  );
};

export default Navbar;
