import { NavLink } from "react-router-dom"
import styles from './navbar.module.css'
export const Navbar = () => {
    
    return (
        <>
            <div className={` d-flex justify-content-between text-dark ${styles.links}`}>
                <NavLink to="/food" className={({ isActive }) => isActive ? styles.active : ""}>Food</NavLink >
                <NavLink to="/sides" className={({ isActive }) => isActive ? styles.active : ""}>Sides</NavLink >
                <NavLink to="/drinks" className={({ isActive }) => isActive ? styles.active : ""}>Cocktails</NavLink >
                <NavLink to="/cart" className={({ isActive }) => isActive ? styles.active : ""}>Cart</NavLink >
            </div>
        </>
    )
}