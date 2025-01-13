import { Link } from "react-router-dom";
import monogram from "@/assets/monogram.png";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

const MobileMenu = ({
  navLinks,
  servicesDropdown,
  isOpen,
  closeMenu,
  toggleServices,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`fixed inset-0 bg-secondary text-white z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex items-center justify-between px-4 h-28">
        <Link to="/" onClick={() => window.scrollTo(0)}>
          <img className="w-32 mt-1" src={monogram} alt="Logo" />
        </Link>
        <button
          onClick={closeMenu}
          className="p-2 rounded-full text-tertiary bg-primary"
        >
          <MdClose />
        </button>
      </div>
      <nav className="flex flex-col items-start p-4 space-y-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={closeMenu}
            className="font-normal leading-4 text-white transition-all duration-200 hover:text-primary"
          >
            {link.name}
          </Link>
        ))}
        <div className="w-full">
          <button
            className="flex items-center w-full gap-2 font-normal leading-4 text-white rounded-lg bg-secondary hover:text-primary"
            onClick={toggleServices}
          >
            Services
            {/* Chevron Icon */}
          </button>
          {servicesDropdown && (
            <ul className="p-4 mt-2 space-y-2 bg-white rounded-lg shadow-lg">
              {servicesDropdown.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.to}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg hover:text-primary hover:bg-tertiary "
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
      {/* Get in Touch Button on Mobile */}
      <div className="p-4 mt-auto">
        <button
          className="w-full py-3 font-normal leading-4 text-center text-white rounded-full bg-primary hover:bg-tertiary hover:text-primary"
          onClick={() => navigate("/contact")}
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
