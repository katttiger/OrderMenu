import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Sidebottom } from "./footer"

export const Layout = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <Outlet />
                <Sidebottom />
            </div>
        </>
    )
}