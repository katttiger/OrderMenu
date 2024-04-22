import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import { Cart } from "../pages/cart";
import style from "./layout.module.css";
import { Footer } from "./footer";

export const Layout = () => {
  const cart = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState<number>(0);
  //Fix
  useEffect(() => {
    let tempcart = 0;
    cart.cart.forEach((ci) => (tempcart += ci.quantity));
    setCartTotal(tempcart);
  }, [cart.cart]);

  return (
    <>
      <div className="container-fluid">
        <Header />
        <Outlet />
        <Footer />
        {cartTotal > 0 && (
          <button
            className={style.cartButton}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            <div className="d-flex">
              <span>Cart: </span>
              <button className="btn btn-info py-2 mr-2 postition-relative">
                <i className="fa fa-shopping-cart text-white"></i>
                <span
                  className="badge btn-badge bg-success rounded-100
                                    btn-badge text-white border position-absolute"
                >
                  {cartTotal}
                </span>
              </button>
            </div>
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
