import { NavLink } from "react-router-dom";
import { CartContext } from "../App";
import { useContext, useEffect, useState } from "react";
import styles from "./cart.module.css"

export const Cart = () => {
    const { cart, clearCart, addToCart, removeFromCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let currentTotal = 0
        cart.forEach((item) => currentTotal += item.totalItemPrice)
        setTotal(currentTotal);
    }, [])

    const addToCarttest = (id: string, title: string, price: number) => {

        addToCart(id, title, price);
        setTotal(total + price);
    };

    const removeFromCarttest = (id: string) => {
        let isItemInCart = cart.find((item) => item.id === id)

        removeFromCart(id);
        setTotal(total - isItemInCart?.singleItemPrice!);
    }

    return (
        <>
            <div className={styles.MenuContainer}>
                <div className={`${styles.Menu}`} style={{ textDecoration: 'underline' }}>Order</div>
                <div className={`${styles.Menu}`}>Pay</div>
            </div>
            <div className="container-fluid" style={{ msOverflowY: 'scroll', maxHeight: '60vh' }}>
                <table className="table">
                    <tbody>
                        {cart.map((item) => (
                            <tr className={styles.tableRow}>
                                <td><button className="btn btn-danger" onClick={() => removeFromCarttest(item.id)}><h4>-</h4></button></td>
                                <td><h6>{item.quantity}</h6></td>
                                <td><h6>{item.title}</h6></td>
                                <td><h6>{item.totalItemPrice} SEK</h6></td>
                                <td><button className="btn btn-success" onClick={() => addToCarttest(item.id, item.title, item.singleItemPrice)}><h4>+</h4></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.cartFooter} >
                {cart.length > 0 ?
                    <h4>Total: {total}:-</h4> : <h4>Your cart is empty.</h4>}
                <input type="text" placeholder="Table Code"></input>
                <button className="btn btn-secondary" onClick={() => clearCart()}>Send Order</button>
            </div>
        </>
    )
}