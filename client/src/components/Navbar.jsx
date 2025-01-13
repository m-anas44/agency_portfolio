import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import monogram from "@/assets/monogram.png";
import NavbarLink from "./Header/NavbarLink";
import { navLinks } from "@/lib/navLinks";
import DropdownMenu from "./Header/DropdownMenu";
import MobileMenu from "./Header/MobileMenu";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const navigate = useNavigate();
  return (
    <header className="bg-secondary sticky top-0 z-50">
      <div className="py-2 mx-auto max-w-screen-2xl px-3 sm:px-4 md:px-6 lg:px-20">
        <div className="flex items-center md:justify-between h-16 gap-x-5 lg:gap-x-10">
          <Link to="/" onClick={() => window.scrollTo(0)}>
            <img className="w-28 md:w-32 lg:w-40" src={monogram} alt="Logo" />
          </Link>
          <div className="hidden md:block">
            <nav>
              <ul className="flex items-center gap-8 lg:gap-10">
                {navLinks.map((link) => (
                  <NavbarLink
                    key={link.name}
                    name={link.name}
                    to={link.to}
                    onClick={() => window.scrollTo(0)}
                  />
                ))}
                <li className="relative group">
                  <span className="cursor-pointer text-base lg:text-lg font-normal leading-4 text-white hover:text-primary">
                    Services
                  </span>
                  <DropdownMenu />
                </li>
              </ul>
            </nav>
          </div>
          <div className="relative flex items-center gap-4 ml-auto md:ml-0">
            <div className="sm:flex sm:gap-4">
              <button
                className="flex items-center px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-3 text-nowrap overflow-hidden text-base font-medium rounded-full lg:text-lg text-tertiary bg-primary hover:bg-tertiary hover:text-primary group"
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo(0);
                }}
              >
                {/* Ping effect */}
                <div className="absolute right-[5px] -top-[1px] md:block hidden">
                  <span className="relative flex w-3 h-3">
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-tertiary group-hover:bg-primary"></span>
                    <span className="relative inline-flex w-3 h-3 rounded-full bg-tertiary group-hover:bg-primary"></span>
                  </span>
                </div>
                Get in Touch
              </button>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className="block md:hidden p-2 rounded text-primary bg-tertiary"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
      <MobileMenu
        navLinks={navLinks}
        servicesDropdown={servicesOpen ? servicesDropdown : null}
        isOpen={menuOpen}
        closeMenu={closeMenu}
        toggleServices={toggleServices}
      />
    </header>
  );
};

export default Navbar;
