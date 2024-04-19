import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import { Cart } from "../pages/cart";
import style from "./layout.module.css";

export const Layout = () => {
    const cart = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState<number>(0);
    //Fix
    useEffect(() => {
        let tempcart = 0;
        cart.cart.forEach((ci) => tempcart += ci.quantity)
        setCartTotal(tempcart)
    }, [cart.cart]);

    return (
        <>
            <div className="container-fluid">
                <Header />
                <Outlet />
                {cartTotal > 0 && (
                    <button
                        className={style.cartButton}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom"
                    >
                        <i className="bi-alarm-clock"></i>
                        <p>{cartTotal}</p>
                    </button>
                )}
            </div>

            <div
                className="offcanvas offcanvas-bottom"
                tabIndex={-1}
                id="offcanvasBottom"
                aria-labelledby="offcanvasBottomLabel"
                style={{ height: "100vh" }}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">
                        Cart
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <Cart />
            </div>
        </>
    );
};
