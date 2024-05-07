import { CartContext } from "../App";
import { useContext, useEffect, useState } from "react";
import styles from "./cart.module.css";

export const Cart = () => {
  const { cart, clearCart, addToCart, removeFromCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [tableCode, setTableCode] = useState("");
  let isItemsInCart = cart.length === 0;
  const [isPayed, setPayed] = useState<boolean>(isItemsInCart);

  const handleChange = (event: any) => {
    const newValue = event.target.value.replace(/\D/g, "");
    const truncatedValue = newValue.slice(0, 4);
    const finalValue = Math.min(Math.max(parseInt(truncatedValue, 10), 1), 9999);
    setTableCode(finalValue.toString());
  };

  const handlePayment = () => {
    clearCart();
    setPayed(true)
  };

  useEffect(() => {
    setPayed(isItemsInCart && isPayed);
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
        <table className="table">
          <tbody>
            {cart.map((item) => (
              <tr className={styles.tableRow} key={item.id}>
                <td className="m-0 ps-4">
                  <button className="btn btn-danger" onClick={() => removeFromCarttest(item.id)}>
                    <span className={styles.buttonText}>-</span>
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
                    <span className={styles.buttonText}>+</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* To develop: "Your order will arrive shortly" + "timer" */}
      <div className={styles.cartFooter}>
        {cart.length === 0 && isPayed ? <h4>Thank you for purchase!</h4> : <h4>Total: {total}:-</h4> }
        <input
          onChange={handleChange}
          type="number"
          min={1}
          max={9999}
          maxLength={4}
          placeholder="Table Code"
          value={tableCode}
        ></input>

        <button
          className={
            cart.length > 0 && !isPayed ? "btn text-black font-weight-bold" : "btn btn-light text-white disabled"
          } onClick={() => handlePayment()}
        >
          <p>Send Order</p>
        </button>
      </div>
    </>
  );
};
