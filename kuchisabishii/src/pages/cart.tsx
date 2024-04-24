import { CartContext } from "../App";
import { useContext, useEffect, useState } from "react";
import styles from "./cart.module.css";

export const Cart = () => {
  const { cart, clearCart, addToCart, removeFromCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let currentTotal = 0;
    cart.forEach((item) => (currentTotal += item.totalItemPrice));
    setTotal(currentTotal);
  }, [cart]);

  const addToCarttest = (id: string, title: string, price: number) => {
    addToCart(id, title, price);
    setTotal(total + price);
  };

  const removeFromCarttest = (id: string) => {
    let isItemInCart = cart.find((item) => item.id === id);
    removeFromCart(id);
    setTotal(total - isItemInCart?.singleItemPrice!);
  };

  return (
    <>
      <div className={styles.MenuContainer}>
        <div className={`${styles.Menu}`} style={{ textDecoration: "underline" }}>
          Order
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ borderBottom: "none", overflowY: "scroll", maxHeight: "60vh" }}
      >
        <table className="table" style={{}}>
          <tbody>
            {cart.map((item) => (
              <tr className={styles.tableRow} key={item.id}>
                <td className="m-0 ps-4">
                  <button className="btn btn-danger" onClick={() => removeFromCarttest(item.id)}>
                    <h4>-</h4>
                  </button>
                </td>
                <td className="d-flex justify-content-around w-100">
                  <div className="d-flex justify-content-center" style={{ width: "20%" }}>
                    <h6>
                      <span>{item.quantity}</span>st
                    </h6>
                  </div>

                  <div className="d-flex justify-content-center" style={{ width: "50%" }}>
                    <h6>{item.title}</h6>
                  </div>

                  <div className="d-flex justify-content-center" style={{ width: "30%" }}>
                    <h6>{item.totalItemPrice} SEK</h6>
                  </div>
                </td>
                <td className="m-0 pe-4">
                  <button
                    className="btn btn-success"
                    onClick={() => addToCarttest(item.id, item.title, item.singleItemPrice)}
                  >
                    <h4>+</h4>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.cartFooter}>
        {cart.length > 0 ? <h4>Total: {total}:-</h4> : <h4>Thank you for purchasing!</h4>}
        <input type="text" placeholder="Table Code"></input>
        <button className="btn btn-secondary" onClick={() => clearCart()}>
          Send Order
        </button>
        {/* <h4>Payment</h4> */}
      </div>
    </>
  );
};
