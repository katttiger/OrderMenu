import { NavLink} from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
 
  return (
    <div className={` d-flex justify-content-between text-dark ${styles.links}`}>
      <NavLink
        to="/food#Vegetarian"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <h6>Mains</h6>
      </NavLink>
      <NavLink to="/sides" className={({ isActive }) => (isActive ? styles.active : "")} >
        <h6>Sides</h6>
      </NavLink>
      <NavLink to="/drinks" className={({ isActive }) => (isActive ? styles.active : "")}>
        <h6>Cocktails</h6>
      </NavLink>
    </div>
  );
};
