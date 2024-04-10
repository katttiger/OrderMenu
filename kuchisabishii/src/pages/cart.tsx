import { NavLink } from "react-router-dom";
import { CartContext } from "../App";
import { useContext, useEffect, useState } from "react";
import styles from "./cart.module.css"
//import { CartItem } from "../types/cart";

export const Cart = () => {
    const {cart, clearCart, addToCart, removeFromCart} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => 
    {
        let currentTotal = 0
        cart.forEach((item) => currentTotal += item.totalItemPrice) 
        setTotal(currentTotal);
    }, [])

    // ta bort addToCart och removeFromCart
    const addToCarttest = (id: string, title: string, price: number) => {

        // const isItemICart = cart.find((item) => item.id === id);
        // if (isItemICart) {
        //     isItemICart.quantity++;
        //     isItemICart.totalItemPrice = (price * isItemICart.quantity);
        // }
        addToCart(id, title, price);
        setTotal(total + price);
    };

    const removeFromCarttest = (id: string) => {
        let isItemInCart = cart.find((item) => item.id === id)
        // if (isItemInCart) {
        //     isItemInCart.quantity--;
        //     isItemInCart.totalItemPrice = (isItemInCart.quantity * isItemInCart.singleItemPrice)
        //     if (isItemInCart.quantity < 1) {
        //         cart.splice(cart.indexOf(isItemInCart), 1);
        //     }
        // }
        removeFromCart(id);
        setTotal(total - isItemInCart?.singleItemPrice!);
    }

    return (
        <>
            <h1>Checkout</h1>
            <NavLink to={'/'}>Go Back</NavLink>
            <div className="row m-0">
                <div className={`${styles.Menu} col-6`}>Order</div>
                <div className={`${styles.Menu} col-6`} >Pay</div>
            </div>
            <div className="container-fluid" style={{overflow: 'scroll', maxHeight: '60vh'}}>
                <table className="table">
                    <tbody>
                        {cart.map((item) => (
                            <tr>
                                <button className="btn btn-danger" onClick={() => removeFromCarttest(item.id)}>-</button>
                                <td><h4>{item.quantity}</h4></td>
                                <td><h6>{item.title}</h6></td>
                                <td><h6>{item.totalItemPrice} SEK</h6></td>
                                <button className="btn btn-danger" onClick={() => addToCarttest(item.id, item.title, item.singleItemPrice)}>+</button>
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
                {/* <h4>Payment</h4> */}
            </div>
           
        </>
    )
}