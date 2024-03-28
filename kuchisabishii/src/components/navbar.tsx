import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <div className="NavBar d-flex justify-content-between text-dark">
                <Link to="/food">Food</Link >
                <Link to="/sides">Sides</Link >
                <Link to="/drinks">Cocktails</Link >
                <Link to="/cart">Car</Link >
            </div>
        </>
    )
}