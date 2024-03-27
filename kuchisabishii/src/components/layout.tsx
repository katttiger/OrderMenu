import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar"

export const Layout = () => {
    return (
        <>
        <div className="container-fluid">
            <Navbar />
            <Outlet />
        </div>
        </>
    )
}