import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import { Cart } from "../pages/cart";
import style from "./layout.module.css";
import { Footer } from "./footer";
import { Cartbar } from "./cartbar";

export const Layout = () => {
  const cart = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    let tempcart = 0;
    cart.cart.forEach((ci) => (tempcart += ci.quantity));
    setCartTotal(tempcart);
  }, [cart.cart]);

  return (
    <>
      <div className="container-fluid" style={{ width: "100.1%" }}>
        <Header />
        <Outlet />
        <Footer />
        <Cartbar cartTotal={cartTotal} />
      </div>

      <div
        className="offcanvas offcanvas-bottom"
        tabIndex={-1}
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
        style={{ height: "100vh" }}
      >
        <div className={`offcanvas-header ${style.backgroundImage}`}>
          <h5 className="offcanvas-title text-white" id="offcanvasBottomLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <Cart />
      </div>
    </>
  );
};
