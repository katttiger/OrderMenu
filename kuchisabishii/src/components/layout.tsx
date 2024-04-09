import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Bottom } from "./bottom"

export const Layout = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <Outlet />
                <Bottom />
            </div>
        </>
    )
}