import { Link } from "react-router-dom";

const NavbarLink = ({ name, to, onClick }) => (
  <li className="relative group">
    <Link
      to={to}
      onClick={onClick}
      className="text-base lg:text-lg font-normal leading-4 text-white transition-all duration-200 hover:text-primary"
    >
      {name}
    </Link>
  </li>
);

export default NavbarLink;
