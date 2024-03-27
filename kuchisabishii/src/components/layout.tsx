import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar"
import ;

export const Layout = () => {

    // enum foodcategories {
    //     skaldjur,
    //     kött
    //   }
    //   enum drinkcategories {
    //     Beer, OrdinaryDrink, SoftDrink, CoffeeTea, HomemadeLiqueur
    //   }

    return (
        <>
        <div className="container-fluid">
            <Navbar />
            <Outlet />
        </div>
        </>
    )
}