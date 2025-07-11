import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
        Contatos
      </NavLink>
    </div>
  );
};

export default Navbar;