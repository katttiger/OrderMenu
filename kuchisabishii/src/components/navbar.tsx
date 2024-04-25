import { NavLink, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { useEffect } from "react";
export const Navbar = () => {
  const scrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location])
  }

  return (
    <div className={` d-flex justify-content-between text-dark ${styles.links}`}>
      <NavLink
        to="/food"
        // href={'#FoodList'}
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
