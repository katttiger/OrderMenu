import { Outlet } from "react-router-dom"
import { Header } from "./header"

export const Layout = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="sticky-top">
                    <Header />
                </div>
                <div>
                    <Outlet />
                </div>

            </div>
        </>
    )
}